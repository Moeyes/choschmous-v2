/**
 * photoStorage.ts
 *
 * Persists File/Blob objects across page reloads using IndexedDB.
 * Each upload slot gets a stable unique ID so files survive hot-reload
 * and can be retrieved by ID before the final backend push.
 *
 * Usage:
 *   const id = await PhotoStorage.save('photo_main', file);   // returns slotId
 *   const file = await PhotoStorage.get('photo_main');        // File | null
 *   await PhotoStorage.remove('photo_main');
 *   await PhotoStorage.clear();                               // wipe all
 */

const DB_NAME = 'registration_files';
const STORE = 'files';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      req.result.createObjectStore(STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export const PhotoStorage = {
  /** Store a file under a stable slot ID. Returns the slotId. */
  async save(slotId: string, file: File): Promise<string> {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      // Store as { file, name, type, lastModified } so we can reconstruct it
      tx.objectStore(STORE).put(
        { blob: file, name: file.name, type: file.type, lastModified: file.lastModified },
        slotId
      );
      tx.oncomplete = () => resolve(slotId);
      tx.onerror = () => reject(tx.error);
    });
  },

  /** Retrieve a File by slot ID. Returns null if not found. */
  async get(slotId: string): Promise<File | null> {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly');
      const req = tx.objectStore(STORE).get(slotId);
      req.onsuccess = () => {
        const data = req.result;
        if (!data) return resolve(null);
        const file = new File([data.blob], data.name, {
          type: data.type,
          lastModified: data.lastModified,
        });
        resolve(file);
      };
      req.onerror = () => reject(req.error);
    });
  },

  /** Remove a single slot. */
  async remove(slotId: string): Promise<void> {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).delete(slotId);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  },

  /** Wipe everything (e.g. after successful submission). */
  async clear(): Promise<void> {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).clear();
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  },

  /**
   * Generate a stable, unique slot ID for a given registration session + field.
   * sessionKey should be something like the event+org combo so IDs don't collide
   * across different registrations in the same browser.
   */
  slotId(sessionKey: string, field: string): string {
    return `${sessionKey}__${field}`;
  },
};
