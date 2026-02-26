type Handler<T = unknown> = (payload: T) => void | Promise<void>;
class EventBus {
  private handlers = new Map<string, Handler[]>();
  on<T>(event: string, handler: Handler<T>) {
    this.handlers.set(event, [...(this.handlers.get(event) ?? []), handler as Handler]);
  }
  off(event: string, handler: Handler) {
    this.handlers.set(event, (this.handlers.get(event) ?? []).filter((h) => h !== handler));
  }
  async emit<T>(event: string, payload: T) {
    await Promise.all((this.handlers.get(event) ?? []).map((h) => h(payload)));
  }
}
export const eventBus = new EventBus();
