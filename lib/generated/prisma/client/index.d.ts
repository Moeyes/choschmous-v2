
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Enroll
 * 
 */
export type Enroll = $Result.DefaultSelection<Prisma.$EnrollPayload>
/**
 * Model Athletes
 * 
 */
export type Athletes = $Result.DefaultSelection<Prisma.$AthletesPayload>
/**
 * Model Leaders
 * 
 */
export type Leaders = $Result.DefaultSelection<Prisma.$LeadersPayload>
/**
 * Model Events
 * 
 */
export type Events = $Result.DefaultSelection<Prisma.$EventsPayload>
/**
 * Model Sports
 * 
 */
export type Sports = $Result.DefaultSelection<Prisma.$SportsPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model Sports_event_org
 * 
 */
export type Sports_event_org = $Result.DefaultSelection<Prisma.$Sports_event_orgPayload>
/**
 * Model AthleteParticipat
 * 
 */
export type AthleteParticipat = $Result.DefaultSelection<Prisma.$AthleteParticipatPayload>
/**
 * Model LeaderParticipat
 * 
 */
export type LeaderParticipat = $Result.DefaultSelection<Prisma.$LeaderParticipatPayload>
/**
 * Model Medals
 * 
 */
export type Medals = $Result.DefaultSelection<Prisma.$MedalsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const IdDocType: {
  IDCard: 'IDCard',
  BirthCertificate: 'BirthCertificate'
};

export type IdDocType = (typeof IdDocType)[keyof typeof IdDocType]


export const LeaderRole: {
  coach: 'coach',
  manager: 'manager',
  delegate: 'delegate',
  team_lead: 'team_lead',
  coach_trainer: 'coach_trainer',
  teacher_assistant: 'teacher_assistant'
};

export type LeaderRole = (typeof LeaderRole)[keyof typeof LeaderRole]


export const MedalType: {
  gold: 'gold',
  silver: 'silver',
  bronze: 'bronze'
};

export type MedalType = (typeof MedalType)[keyof typeof MedalType]

}

export type IdDocType = $Enums.IdDocType

export const IdDocType: typeof $Enums.IdDocType

export type LeaderRole = $Enums.LeaderRole

export const LeaderRole: typeof $Enums.LeaderRole

export type MedalType = $Enums.MedalType

export const MedalType: typeof $Enums.MedalType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enroll`: Exposes CRUD operations for the **Enroll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrolls
    * const enrolls = await prisma.enroll.findMany()
    * ```
    */
  get enroll(): Prisma.EnrollDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.athletes`: Exposes CRUD operations for the **Athletes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Athletes
    * const athletes = await prisma.athletes.findMany()
    * ```
    */
  get athletes(): Prisma.AthletesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaders`: Exposes CRUD operations for the **Leaders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leaders
    * const leaders = await prisma.leaders.findMany()
    * ```
    */
  get leaders(): Prisma.LeadersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **Events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.EventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sports`: Exposes CRUD operations for the **Sports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sports
    * const sports = await prisma.sports.findMany()
    * ```
    */
  get sports(): Prisma.SportsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sports_event_org`: Exposes CRUD operations for the **Sports_event_org** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sports_event_orgs
    * const sports_event_orgs = await prisma.sports_event_org.findMany()
    * ```
    */
  get sports_event_org(): Prisma.Sports_event_orgDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.athleteParticipat`: Exposes CRUD operations for the **AthleteParticipat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AthleteParticipats
    * const athleteParticipats = await prisma.athleteParticipat.findMany()
    * ```
    */
  get athleteParticipat(): Prisma.AthleteParticipatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaderParticipat`: Exposes CRUD operations for the **LeaderParticipat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaderParticipats
    * const leaderParticipats = await prisma.leaderParticipat.findMany()
    * ```
    */
  get leaderParticipat(): Prisma.LeaderParticipatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medals`: Exposes CRUD operations for the **Medals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medals
    * const medals = await prisma.medals.findMany()
    * ```
    */
  get medals(): Prisma.MedalsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Enroll: 'Enroll',
    Athletes: 'Athletes',
    Leaders: 'Leaders',
    Events: 'Events',
    Sports: 'Sports',
    Organization: 'Organization',
    categories: 'categories',
    Sports_event_org: 'Sports_event_org',
    AthleteParticipat: 'AthleteParticipat',
    LeaderParticipat: 'LeaderParticipat',
    Medals: 'Medals'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "enroll" | "athletes" | "leaders" | "events" | "sports" | "organization" | "categories" | "sports_event_org" | "athleteParticipat" | "leaderParticipat" | "medals"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Enroll: {
        payload: Prisma.$EnrollPayload<ExtArgs>
        fields: Prisma.EnrollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollPayload>
          }
          findFirst: {
            args: Prisma.EnrollFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollPayload>
          }
          findMany: {
            args: Prisma.EnrollFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollPayload>[]
          }
          create: {
            args: Prisma.EnrollCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollPayload>
          }
          createMany: {
            args: Prisma.EnrollCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollPayload>[]
          }
          delete: {
            args: Prisma.EnrollDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollPayload>
          }
          update: {
            args: Prisma.EnrollUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollPayload>
          }
          deleteMany: {
            args: Prisma.EnrollDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollPayload>[]
          }
          upsert: {
            args: Prisma.EnrollUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollPayload>
          }
          aggregate: {
            args: Prisma.EnrollAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnroll>
          }
          groupBy: {
            args: Prisma.EnrollGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollCountAggregateOutputType> | number
          }
        }
      }
      Athletes: {
        payload: Prisma.$AthletesPayload<ExtArgs>
        fields: Prisma.AthletesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AthletesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AthletesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletesPayload>
          }
          findFirst: {
            args: Prisma.AthletesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AthletesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletesPayload>
          }
          findMany: {
            args: Prisma.AthletesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletesPayload>[]
          }
          create: {
            args: Prisma.AthletesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletesPayload>
          }
          createMany: {
            args: Prisma.AthletesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AthletesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletesPayload>[]
          }
          delete: {
            args: Prisma.AthletesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletesPayload>
          }
          update: {
            args: Prisma.AthletesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletesPayload>
          }
          deleteMany: {
            args: Prisma.AthletesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AthletesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AthletesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletesPayload>[]
          }
          upsert: {
            args: Prisma.AthletesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthletesPayload>
          }
          aggregate: {
            args: Prisma.AthletesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAthletes>
          }
          groupBy: {
            args: Prisma.AthletesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AthletesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AthletesCountArgs<ExtArgs>
            result: $Utils.Optional<AthletesCountAggregateOutputType> | number
          }
        }
      }
      Leaders: {
        payload: Prisma.$LeadersPayload<ExtArgs>
        fields: Prisma.LeadersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersPayload>
          }
          findFirst: {
            args: Prisma.LeadersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersPayload>
          }
          findMany: {
            args: Prisma.LeadersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersPayload>[]
          }
          create: {
            args: Prisma.LeadersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersPayload>
          }
          createMany: {
            args: Prisma.LeadersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersPayload>[]
          }
          delete: {
            args: Prisma.LeadersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersPayload>
          }
          update: {
            args: Prisma.LeadersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersPayload>
          }
          deleteMany: {
            args: Prisma.LeadersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersPayload>[]
          }
          upsert: {
            args: Prisma.LeadersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadersPayload>
          }
          aggregate: {
            args: Prisma.LeadersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaders>
          }
          groupBy: {
            args: Prisma.LeadersGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadersGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadersCountArgs<ExtArgs>
            result: $Utils.Optional<LeadersCountAggregateOutputType> | number
          }
        }
      }
      Events: {
        payload: Prisma.$EventsPayload<ExtArgs>
        fields: Prisma.EventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findFirst: {
            args: Prisma.EventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findMany: {
            args: Prisma.EventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          create: {
            args: Prisma.EventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          createMany: {
            args: Prisma.EventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          delete: {
            args: Prisma.EventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          update: {
            args: Prisma.EventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          deleteMany: {
            args: Prisma.EventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          upsert: {
            args: Prisma.EventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.EventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      Sports: {
        payload: Prisma.$SportsPayload<ExtArgs>
        fields: Prisma.SportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SportsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SportsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPayload>
          }
          findFirst: {
            args: Prisma.SportsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SportsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPayload>
          }
          findMany: {
            args: Prisma.SportsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPayload>[]
          }
          create: {
            args: Prisma.SportsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPayload>
          }
          createMany: {
            args: Prisma.SportsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SportsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPayload>[]
          }
          delete: {
            args: Prisma.SportsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPayload>
          }
          update: {
            args: Prisma.SportsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPayload>
          }
          deleteMany: {
            args: Prisma.SportsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SportsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SportsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPayload>[]
          }
          upsert: {
            args: Prisma.SportsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPayload>
          }
          aggregate: {
            args: Prisma.SportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSports>
          }
          groupBy: {
            args: Prisma.SportsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SportsCountArgs<ExtArgs>
            result: $Utils.Optional<SportsCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Sports_event_org: {
        payload: Prisma.$Sports_event_orgPayload<ExtArgs>
        fields: Prisma.Sports_event_orgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Sports_event_orgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sports_event_orgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Sports_event_orgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sports_event_orgPayload>
          }
          findFirst: {
            args: Prisma.Sports_event_orgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sports_event_orgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Sports_event_orgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sports_event_orgPayload>
          }
          findMany: {
            args: Prisma.Sports_event_orgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sports_event_orgPayload>[]
          }
          create: {
            args: Prisma.Sports_event_orgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sports_event_orgPayload>
          }
          createMany: {
            args: Prisma.Sports_event_orgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Sports_event_orgCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sports_event_orgPayload>[]
          }
          delete: {
            args: Prisma.Sports_event_orgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sports_event_orgPayload>
          }
          update: {
            args: Prisma.Sports_event_orgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sports_event_orgPayload>
          }
          deleteMany: {
            args: Prisma.Sports_event_orgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Sports_event_orgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Sports_event_orgUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sports_event_orgPayload>[]
          }
          upsert: {
            args: Prisma.Sports_event_orgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sports_event_orgPayload>
          }
          aggregate: {
            args: Prisma.Sports_event_orgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSports_event_org>
          }
          groupBy: {
            args: Prisma.Sports_event_orgGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sports_event_orgGroupByOutputType>[]
          }
          count: {
            args: Prisma.Sports_event_orgCountArgs<ExtArgs>
            result: $Utils.Optional<Sports_event_orgCountAggregateOutputType> | number
          }
        }
      }
      AthleteParticipat: {
        payload: Prisma.$AthleteParticipatPayload<ExtArgs>
        fields: Prisma.AthleteParticipatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AthleteParticipatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteParticipatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AthleteParticipatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteParticipatPayload>
          }
          findFirst: {
            args: Prisma.AthleteParticipatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteParticipatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AthleteParticipatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteParticipatPayload>
          }
          findMany: {
            args: Prisma.AthleteParticipatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteParticipatPayload>[]
          }
          create: {
            args: Prisma.AthleteParticipatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteParticipatPayload>
          }
          createMany: {
            args: Prisma.AthleteParticipatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AthleteParticipatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteParticipatPayload>[]
          }
          delete: {
            args: Prisma.AthleteParticipatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteParticipatPayload>
          }
          update: {
            args: Prisma.AthleteParticipatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteParticipatPayload>
          }
          deleteMany: {
            args: Prisma.AthleteParticipatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AthleteParticipatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AthleteParticipatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteParticipatPayload>[]
          }
          upsert: {
            args: Prisma.AthleteParticipatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteParticipatPayload>
          }
          aggregate: {
            args: Prisma.AthleteParticipatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAthleteParticipat>
          }
          groupBy: {
            args: Prisma.AthleteParticipatGroupByArgs<ExtArgs>
            result: $Utils.Optional<AthleteParticipatGroupByOutputType>[]
          }
          count: {
            args: Prisma.AthleteParticipatCountArgs<ExtArgs>
            result: $Utils.Optional<AthleteParticipatCountAggregateOutputType> | number
          }
        }
      }
      LeaderParticipat: {
        payload: Prisma.$LeaderParticipatPayload<ExtArgs>
        fields: Prisma.LeaderParticipatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaderParticipatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderParticipatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaderParticipatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderParticipatPayload>
          }
          findFirst: {
            args: Prisma.LeaderParticipatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderParticipatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaderParticipatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderParticipatPayload>
          }
          findMany: {
            args: Prisma.LeaderParticipatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderParticipatPayload>[]
          }
          create: {
            args: Prisma.LeaderParticipatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderParticipatPayload>
          }
          createMany: {
            args: Prisma.LeaderParticipatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaderParticipatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderParticipatPayload>[]
          }
          delete: {
            args: Prisma.LeaderParticipatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderParticipatPayload>
          }
          update: {
            args: Prisma.LeaderParticipatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderParticipatPayload>
          }
          deleteMany: {
            args: Prisma.LeaderParticipatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaderParticipatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaderParticipatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderParticipatPayload>[]
          }
          upsert: {
            args: Prisma.LeaderParticipatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderParticipatPayload>
          }
          aggregate: {
            args: Prisma.LeaderParticipatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaderParticipat>
          }
          groupBy: {
            args: Prisma.LeaderParticipatGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaderParticipatGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaderParticipatCountArgs<ExtArgs>
            result: $Utils.Optional<LeaderParticipatCountAggregateOutputType> | number
          }
        }
      }
      Medals: {
        payload: Prisma.$MedalsPayload<ExtArgs>
        fields: Prisma.MedalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalsPayload>
          }
          findFirst: {
            args: Prisma.MedalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalsPayload>
          }
          findMany: {
            args: Prisma.MedalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalsPayload>[]
          }
          create: {
            args: Prisma.MedalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalsPayload>
          }
          createMany: {
            args: Prisma.MedalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalsPayload>[]
          }
          delete: {
            args: Prisma.MedalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalsPayload>
          }
          update: {
            args: Prisma.MedalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalsPayload>
          }
          deleteMany: {
            args: Prisma.MedalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalsPayload>[]
          }
          upsert: {
            args: Prisma.MedalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalsPayload>
          }
          aggregate: {
            args: Prisma.MedalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedals>
          }
          groupBy: {
            args: Prisma.MedalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedalsCountArgs<ExtArgs>
            result: $Utils.Optional<MedalsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    enroll?: EnrollOmit
    athletes?: AthletesOmit
    leaders?: LeadersOmit
    events?: EventsOmit
    sports?: SportsOmit
    organization?: OrganizationOmit
    categories?: categoriesOmit
    sports_event_org?: Sports_event_orgOmit
    athleteParticipat?: AthleteParticipatOmit
    leaderParticipat?: LeaderParticipatOmit
    medals?: MedalsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Enroll: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Enroll?: boolean | UsersCountOutputTypeCountEnrollArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEnrollArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollWhereInput
  }


  /**
   * Count Type AthletesCountOutputType
   */

  export type AthletesCountOutputType = {
    AthleteParticipat: number
  }

  export type AthletesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AthleteParticipat?: boolean | AthletesCountOutputTypeCountAthleteParticipatArgs
  }

  // Custom InputTypes
  /**
   * AthletesCountOutputType without action
   */
  export type AthletesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthletesCountOutputType
     */
    select?: AthletesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AthletesCountOutputType without action
   */
  export type AthletesCountOutputTypeCountAthleteParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AthleteParticipatWhereInput
  }


  /**
   * Count Type LeadersCountOutputType
   */

  export type LeadersCountOutputType = {
    LeaderParticipat: number
  }

  export type LeadersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LeaderParticipat?: boolean | LeadersCountOutputTypeCountLeaderParticipatArgs
  }

  // Custom InputTypes
  /**
   * LeadersCountOutputType without action
   */
  export type LeadersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadersCountOutputType
     */
    select?: LeadersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeadersCountOutputType without action
   */
  export type LeadersCountOutputTypeCountLeaderParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderParticipatWhereInput
  }


  /**
   * Count Type EventsCountOutputType
   */

  export type EventsCountOutputType = {
    categories: number
    AthleteParticipat: number
    LeaderParticipat: number
    Sports_event_org: number
  }

  export type EventsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | EventsCountOutputTypeCountCategoriesArgs
    AthleteParticipat?: boolean | EventsCountOutputTypeCountAthleteParticipatArgs
    LeaderParticipat?: boolean | EventsCountOutputTypeCountLeaderParticipatArgs
    Sports_event_org?: boolean | EventsCountOutputTypeCountSports_event_orgArgs
  }

  // Custom InputTypes
  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventsCountOutputType
     */
    select?: EventsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountAthleteParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AthleteParticipatWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountLeaderParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderParticipatWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountSports_event_orgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sports_event_orgWhereInput
  }


  /**
   * Count Type SportsCountOutputType
   */

  export type SportsCountOutputType = {
    categories: number
    AthleteParticipat: number
    LeaderParticipat: number
    Sports_event_org: number
  }

  export type SportsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | SportsCountOutputTypeCountCategoriesArgs
    AthleteParticipat?: boolean | SportsCountOutputTypeCountAthleteParticipatArgs
    LeaderParticipat?: boolean | SportsCountOutputTypeCountLeaderParticipatArgs
    Sports_event_org?: boolean | SportsCountOutputTypeCountSports_event_orgArgs
  }

  // Custom InputTypes
  /**
   * SportsCountOutputType without action
   */
  export type SportsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsCountOutputType
     */
    select?: SportsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SportsCountOutputType without action
   */
  export type SportsCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
  }

  /**
   * SportsCountOutputType without action
   */
  export type SportsCountOutputTypeCountAthleteParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AthleteParticipatWhereInput
  }

  /**
   * SportsCountOutputType without action
   */
  export type SportsCountOutputTypeCountLeaderParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderParticipatWhereInput
  }

  /**
   * SportsCountOutputType without action
   */
  export type SportsCountOutputTypeCountSports_event_orgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sports_event_orgWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    AthleteParticipat: number
    LeaderParticipat: number
    Sports_event_org: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AthleteParticipat?: boolean | OrganizationCountOutputTypeCountAthleteParticipatArgs
    LeaderParticipat?: boolean | OrganizationCountOutputTypeCountLeaderParticipatArgs
    Sports_event_org?: boolean | OrganizationCountOutputTypeCountSports_event_orgArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAthleteParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AthleteParticipatWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountLeaderParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderParticipatWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountSports_event_orgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sports_event_orgWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    AthleteParticipat: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AthleteParticipat?: boolean | CategoriesCountOutputTypeCountAthleteParticipatArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountAthleteParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AthleteParticipatWhereInput
  }


  /**
   * Count Type AthleteParticipatCountOutputType
   */

  export type AthleteParticipatCountOutputType = {
    Medals: number
  }

  export type AthleteParticipatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Medals?: boolean | AthleteParticipatCountOutputTypeCountMedalsArgs
  }

  // Custom InputTypes
  /**
   * AthleteParticipatCountOutputType without action
   */
  export type AthleteParticipatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipatCountOutputType
     */
    select?: AthleteParticipatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AthleteParticipatCountOutputType without action
   */
  export type AthleteParticipatCountOutputTypeCountMedalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedalsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    userID: number | null
    userLevel: number | null
  }

  export type UsersSumAggregateOutputType = {
    userID: number | null
    userLevel: number | null
  }

  export type UsersMinAggregateOutputType = {
    userID: number | null
    username: string | null
    password: string | null
    userLevel: number | null
    photoPath: string | null
    createdAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    userID: number | null
    username: string | null
    password: string | null
    userLevel: number | null
    photoPath: string | null
    createdAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    userID: number
    username: number
    password: number
    userLevel: number
    photoPath: number
    createdAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    userID?: true
    userLevel?: true
  }

  export type UsersSumAggregateInputType = {
    userID?: true
    userLevel?: true
  }

  export type UsersMinAggregateInputType = {
    userID?: true
    username?: true
    password?: true
    userLevel?: true
    photoPath?: true
    createdAt?: true
  }

  export type UsersMaxAggregateInputType = {
    userID?: true
    username?: true
    password?: true
    userLevel?: true
    photoPath?: true
    createdAt?: true
  }

  export type UsersCountAggregateInputType = {
    userID?: true
    username?: true
    password?: true
    userLevel?: true
    photoPath?: true
    createdAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userID: number
    username: string
    password: string
    userLevel: number
    photoPath: string | null
    createdAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userID?: boolean
    username?: boolean
    password?: boolean
    userLevel?: boolean
    photoPath?: boolean
    createdAt?: boolean
    Enroll?: boolean | Users$EnrollArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userID?: boolean
    username?: boolean
    password?: boolean
    userLevel?: boolean
    photoPath?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userID?: boolean
    username?: boolean
    password?: boolean
    userLevel?: boolean
    photoPath?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    userID?: boolean
    username?: boolean
    password?: boolean
    userLevel?: boolean
    photoPath?: boolean
    createdAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userID" | "username" | "password" | "userLevel" | "photoPath" | "createdAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Enroll?: boolean | Users$EnrollArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Enroll: Prisma.$EnrollPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userID: number
      username: string
      password: string
      userLevel: number
      photoPath: string | null
      createdAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userID`
     * const usersWithUserIDOnly = await prisma.users.findMany({ select: { userID: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userID`
     * const usersWithUserIDOnly = await prisma.users.createManyAndReturn({
     *   select: { userID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userID`
     * const usersWithUserIDOnly = await prisma.users.updateManyAndReturn({
     *   select: { userID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Enroll<T extends Users$EnrollArgs<ExtArgs> = {}>(args?: Subset<T, Users$EnrollArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly userID: FieldRef<"Users", 'Int'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly userLevel: FieldRef<"Users", 'Int'>
    readonly photoPath: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Enroll
   */
  export type Users$EnrollArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enroll
     */
    select?: EnrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enroll
     */
    omit?: EnrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollInclude<ExtArgs> | null
    where?: EnrollWhereInput
    orderBy?: EnrollOrderByWithRelationInput | EnrollOrderByWithRelationInput[]
    cursor?: EnrollWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollScalarFieldEnum | EnrollScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Enroll
   */

  export type AggregateEnroll = {
    _count: EnrollCountAggregateOutputType | null
    _avg: EnrollAvgAggregateOutputType | null
    _sum: EnrollSumAggregateOutputType | null
    _min: EnrollMinAggregateOutputType | null
    _max: EnrollMaxAggregateOutputType | null
  }

  export type EnrollAvgAggregateOutputType = {
    id: number | null
    userID: number | null
  }

  export type EnrollSumAggregateOutputType = {
    id: number | null
    userID: number | null
  }

  export type EnrollMinAggregateOutputType = {
    id: number | null
    userID: number | null
    name: string | null
    gender: string | null
    nationality: string | null
    dob: Date | null
    idDocType: $Enums.IdDocType | null
    address: string | null
    photoPath: string | null
    DocumentsPath: string | null
    createdAt: Date | null
  }

  export type EnrollMaxAggregateOutputType = {
    id: number | null
    userID: number | null
    name: string | null
    gender: string | null
    nationality: string | null
    dob: Date | null
    idDocType: $Enums.IdDocType | null
    address: string | null
    photoPath: string | null
    DocumentsPath: string | null
    createdAt: Date | null
  }

  export type EnrollCountAggregateOutputType = {
    id: number
    userID: number
    name: number
    gender: number
    nationality: number
    dob: number
    idDocType: number
    address: number
    photoPath: number
    DocumentsPath: number
    createdAt: number
    _all: number
  }


  export type EnrollAvgAggregateInputType = {
    id?: true
    userID?: true
  }

  export type EnrollSumAggregateInputType = {
    id?: true
    userID?: true
  }

  export type EnrollMinAggregateInputType = {
    id?: true
    userID?: true
    name?: true
    gender?: true
    nationality?: true
    dob?: true
    idDocType?: true
    address?: true
    photoPath?: true
    DocumentsPath?: true
    createdAt?: true
  }

  export type EnrollMaxAggregateInputType = {
    id?: true
    userID?: true
    name?: true
    gender?: true
    nationality?: true
    dob?: true
    idDocType?: true
    address?: true
    photoPath?: true
    DocumentsPath?: true
    createdAt?: true
  }

  export type EnrollCountAggregateInputType = {
    id?: true
    userID?: true
    name?: true
    gender?: true
    nationality?: true
    dob?: true
    idDocType?: true
    address?: true
    photoPath?: true
    DocumentsPath?: true
    createdAt?: true
    _all?: true
  }

  export type EnrollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enroll to aggregate.
     */
    where?: EnrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrolls to fetch.
     */
    orderBy?: EnrollOrderByWithRelationInput | EnrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrolls
    **/
    _count?: true | EnrollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollMaxAggregateInputType
  }

  export type GetEnrollAggregateType<T extends EnrollAggregateArgs> = {
        [P in keyof T & keyof AggregateEnroll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnroll[P]>
      : GetScalarType<T[P], AggregateEnroll[P]>
  }




  export type EnrollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollWhereInput
    orderBy?: EnrollOrderByWithAggregationInput | EnrollOrderByWithAggregationInput[]
    by: EnrollScalarFieldEnum[] | EnrollScalarFieldEnum
    having?: EnrollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollCountAggregateInputType | true
    _avg?: EnrollAvgAggregateInputType
    _sum?: EnrollSumAggregateInputType
    _min?: EnrollMinAggregateInputType
    _max?: EnrollMaxAggregateInputType
  }

  export type EnrollGroupByOutputType = {
    id: number
    userID: number
    name: string
    gender: string
    nationality: string
    dob: Date
    idDocType: $Enums.IdDocType
    address: string | null
    photoPath: string | null
    DocumentsPath: string | null
    createdAt: Date
    _count: EnrollCountAggregateOutputType | null
    _avg: EnrollAvgAggregateOutputType | null
    _sum: EnrollSumAggregateOutputType | null
    _min: EnrollMinAggregateOutputType | null
    _max: EnrollMaxAggregateOutputType | null
  }

  type GetEnrollGroupByPayload<T extends EnrollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollGroupByOutputType[P]>
        }
      >
    >


  export type EnrollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    name?: boolean
    gender?: boolean
    nationality?: boolean
    dob?: boolean
    idDocType?: boolean
    address?: boolean
    photoPath?: boolean
    DocumentsPath?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    athletes?: boolean | Enroll$athletesArgs<ExtArgs>
    leaders?: boolean | Enroll$leadersArgs<ExtArgs>
  }, ExtArgs["result"]["enroll"]>

  export type EnrollSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    name?: boolean
    gender?: boolean
    nationality?: boolean
    dob?: boolean
    idDocType?: boolean
    address?: boolean
    photoPath?: boolean
    DocumentsPath?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enroll"]>

  export type EnrollSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    name?: boolean
    gender?: boolean
    nationality?: boolean
    dob?: boolean
    idDocType?: boolean
    address?: boolean
    photoPath?: boolean
    DocumentsPath?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enroll"]>

  export type EnrollSelectScalar = {
    id?: boolean
    userID?: boolean
    name?: boolean
    gender?: boolean
    nationality?: boolean
    dob?: boolean
    idDocType?: boolean
    address?: boolean
    photoPath?: boolean
    DocumentsPath?: boolean
    createdAt?: boolean
  }

  export type EnrollOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userID" | "name" | "gender" | "nationality" | "dob" | "idDocType" | "address" | "photoPath" | "DocumentsPath" | "createdAt", ExtArgs["result"]["enroll"]>
  export type EnrollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    athletes?: boolean | Enroll$athletesArgs<ExtArgs>
    leaders?: boolean | Enroll$leadersArgs<ExtArgs>
  }
  export type EnrollIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type EnrollIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $EnrollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enroll"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      athletes: Prisma.$AthletesPayload<ExtArgs> | null
      leaders: Prisma.$LeadersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userID: number
      name: string
      gender: string
      nationality: string
      dob: Date
      idDocType: $Enums.IdDocType
      address: string | null
      photoPath: string | null
      DocumentsPath: string | null
      createdAt: Date
    }, ExtArgs["result"]["enroll"]>
    composites: {}
  }

  type EnrollGetPayload<S extends boolean | null | undefined | EnrollDefaultArgs> = $Result.GetResult<Prisma.$EnrollPayload, S>

  type EnrollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollCountAggregateInputType | true
    }

  export interface EnrollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enroll'], meta: { name: 'Enroll' } }
    /**
     * Find zero or one Enroll that matches the filter.
     * @param {EnrollFindUniqueArgs} args - Arguments to find a Enroll
     * @example
     * // Get one Enroll
     * const enroll = await prisma.enroll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollFindUniqueArgs>(args: SelectSubset<T, EnrollFindUniqueArgs<ExtArgs>>): Prisma__EnrollClient<$Result.GetResult<Prisma.$EnrollPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enroll that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollFindUniqueOrThrowArgs} args - Arguments to find a Enroll
     * @example
     * // Get one Enroll
     * const enroll = await prisma.enroll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollClient<$Result.GetResult<Prisma.$EnrollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enroll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollFindFirstArgs} args - Arguments to find a Enroll
     * @example
     * // Get one Enroll
     * const enroll = await prisma.enroll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollFindFirstArgs>(args?: SelectSubset<T, EnrollFindFirstArgs<ExtArgs>>): Prisma__EnrollClient<$Result.GetResult<Prisma.$EnrollPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enroll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollFindFirstOrThrowArgs} args - Arguments to find a Enroll
     * @example
     * // Get one Enroll
     * const enroll = await prisma.enroll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollClient<$Result.GetResult<Prisma.$EnrollPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrolls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrolls
     * const enrolls = await prisma.enroll.findMany()
     * 
     * // Get first 10 Enrolls
     * const enrolls = await prisma.enroll.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollWithIdOnly = await prisma.enroll.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollFindManyArgs>(args?: SelectSubset<T, EnrollFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enroll.
     * @param {EnrollCreateArgs} args - Arguments to create a Enroll.
     * @example
     * // Create one Enroll
     * const Enroll = await prisma.enroll.create({
     *   data: {
     *     // ... data to create a Enroll
     *   }
     * })
     * 
     */
    create<T extends EnrollCreateArgs>(args: SelectSubset<T, EnrollCreateArgs<ExtArgs>>): Prisma__EnrollClient<$Result.GetResult<Prisma.$EnrollPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrolls.
     * @param {EnrollCreateManyArgs} args - Arguments to create many Enrolls.
     * @example
     * // Create many Enrolls
     * const enroll = await prisma.enroll.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollCreateManyArgs>(args?: SelectSubset<T, EnrollCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrolls and returns the data saved in the database.
     * @param {EnrollCreateManyAndReturnArgs} args - Arguments to create many Enrolls.
     * @example
     * // Create many Enrolls
     * const enroll = await prisma.enroll.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrolls and only return the `id`
     * const enrollWithIdOnly = await prisma.enroll.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enroll.
     * @param {EnrollDeleteArgs} args - Arguments to delete one Enroll.
     * @example
     * // Delete one Enroll
     * const Enroll = await prisma.enroll.delete({
     *   where: {
     *     // ... filter to delete one Enroll
     *   }
     * })
     * 
     */
    delete<T extends EnrollDeleteArgs>(args: SelectSubset<T, EnrollDeleteArgs<ExtArgs>>): Prisma__EnrollClient<$Result.GetResult<Prisma.$EnrollPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enroll.
     * @param {EnrollUpdateArgs} args - Arguments to update one Enroll.
     * @example
     * // Update one Enroll
     * const enroll = await prisma.enroll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollUpdateArgs>(args: SelectSubset<T, EnrollUpdateArgs<ExtArgs>>): Prisma__EnrollClient<$Result.GetResult<Prisma.$EnrollPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrolls.
     * @param {EnrollDeleteManyArgs} args - Arguments to filter Enrolls to delete.
     * @example
     * // Delete a few Enrolls
     * const { count } = await prisma.enroll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollDeleteManyArgs>(args?: SelectSubset<T, EnrollDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrolls
     * const enroll = await prisma.enroll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollUpdateManyArgs>(args: SelectSubset<T, EnrollUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrolls and returns the data updated in the database.
     * @param {EnrollUpdateManyAndReturnArgs} args - Arguments to update many Enrolls.
     * @example
     * // Update many Enrolls
     * const enroll = await prisma.enroll.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrolls and only return the `id`
     * const enrollWithIdOnly = await prisma.enroll.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnrollUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enroll.
     * @param {EnrollUpsertArgs} args - Arguments to update or create a Enroll.
     * @example
     * // Update or create a Enroll
     * const enroll = await prisma.enroll.upsert({
     *   create: {
     *     // ... data to create a Enroll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enroll we want to update
     *   }
     * })
     */
    upsert<T extends EnrollUpsertArgs>(args: SelectSubset<T, EnrollUpsertArgs<ExtArgs>>): Prisma__EnrollClient<$Result.GetResult<Prisma.$EnrollPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollCountArgs} args - Arguments to filter Enrolls to count.
     * @example
     * // Count the number of Enrolls
     * const count = await prisma.enroll.count({
     *   where: {
     *     // ... the filter for the Enrolls we want to count
     *   }
     * })
    **/
    count<T extends EnrollCountArgs>(
      args?: Subset<T, EnrollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollAggregateArgs>(args: Subset<T, EnrollAggregateArgs>): Prisma.PrismaPromise<GetEnrollAggregateType<T>>

    /**
     * Group by Enroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnrollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollGroupByArgs['orderBy'] }
        : { orderBy?: EnrollGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnrollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enroll model
   */
  readonly fields: EnrollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enroll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    athletes<T extends Enroll$athletesArgs<ExtArgs> = {}>(args?: Subset<T, Enroll$athletesArgs<ExtArgs>>): Prisma__AthletesClient<$Result.GetResult<Prisma.$AthletesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    leaders<T extends Enroll$leadersArgs<ExtArgs> = {}>(args?: Subset<T, Enroll$leadersArgs<ExtArgs>>): Prisma__LeadersClient<$Result.GetResult<Prisma.$LeadersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Enroll model
   */
  interface EnrollFieldRefs {
    readonly id: FieldRef<"Enroll", 'Int'>
    readonly userID: FieldRef<"Enroll", 'Int'>
    readonly name: FieldRef<"Enroll", 'String'>
    readonly gender: FieldRef<"Enroll", 'String'>
    readonly nationality: FieldRef<"Enroll", 'String'>
    readonly dob: FieldRef<"Enroll", 'DateTime'>
    readonly idDocType: FieldRef<"Enroll", 'IdDocType'>
    readonly address: FieldRef<"Enroll", 'String'>
    readonly photoPath: FieldRef<"Enroll", 'String'>
    readonly DocumentsPath: FieldRef<"Enroll", 'String'>
    readonly createdAt: FieldRef<"Enroll", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enroll findUnique
   */
  export type EnrollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enroll
     */
    select?: EnrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enroll
     */
    omit?: EnrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollInclude<ExtArgs> | null
    /**
     * Filter, which Enroll to fetch.
     */
    where: EnrollWhereUniqueInput
  }

  /**
   * Enroll findUniqueOrThrow
   */
  export type EnrollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enroll
     */
    select?: EnrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enroll
     */
    omit?: EnrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollInclude<ExtArgs> | null
    /**
     * Filter, which Enroll to fetch.
     */
    where: EnrollWhereUniqueInput
  }

  /**
   * Enroll findFirst
   */
  export type EnrollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enroll
     */
    select?: EnrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enroll
     */
    omit?: EnrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollInclude<ExtArgs> | null
    /**
     * Filter, which Enroll to fetch.
     */
    where?: EnrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrolls to fetch.
     */
    orderBy?: EnrollOrderByWithRelationInput | EnrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrolls.
     */
    cursor?: EnrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrolls.
     */
    distinct?: EnrollScalarFieldEnum | EnrollScalarFieldEnum[]
  }

  /**
   * Enroll findFirstOrThrow
   */
  export type EnrollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enroll
     */
    select?: EnrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enroll
     */
    omit?: EnrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollInclude<ExtArgs> | null
    /**
     * Filter, which Enroll to fetch.
     */
    where?: EnrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrolls to fetch.
     */
    orderBy?: EnrollOrderByWithRelationInput | EnrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrolls.
     */
    cursor?: EnrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrolls.
     */
    distinct?: EnrollScalarFieldEnum | EnrollScalarFieldEnum[]
  }

  /**
   * Enroll findMany
   */
  export type EnrollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enroll
     */
    select?: EnrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enroll
     */
    omit?: EnrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollInclude<ExtArgs> | null
    /**
     * Filter, which Enrolls to fetch.
     */
    where?: EnrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrolls to fetch.
     */
    orderBy?: EnrollOrderByWithRelationInput | EnrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrolls.
     */
    cursor?: EnrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrolls.
     */
    skip?: number
    distinct?: EnrollScalarFieldEnum | EnrollScalarFieldEnum[]
  }

  /**
   * Enroll create
   */
  export type EnrollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enroll
     */
    select?: EnrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enroll
     */
    omit?: EnrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollInclude<ExtArgs> | null
    /**
     * The data needed to create a Enroll.
     */
    data: XOR<EnrollCreateInput, EnrollUncheckedCreateInput>
  }

  /**
   * Enroll createMany
   */
  export type EnrollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrolls.
     */
    data: EnrollCreateManyInput | EnrollCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enroll createManyAndReturn
   */
  export type EnrollCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enroll
     */
    select?: EnrollSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enroll
     */
    omit?: EnrollOmit<ExtArgs> | null
    /**
     * The data used to create many Enrolls.
     */
    data: EnrollCreateManyInput | EnrollCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enroll update
   */
  export type EnrollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enroll
     */
    select?: EnrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enroll
     */
    omit?: EnrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollInclude<ExtArgs> | null
    /**
     * The data needed to update a Enroll.
     */
    data: XOR<EnrollUpdateInput, EnrollUncheckedUpdateInput>
    /**
     * Choose, which Enroll to update.
     */
    where: EnrollWhereUniqueInput
  }

  /**
   * Enroll updateMany
   */
  export type EnrollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrolls.
     */
    data: XOR<EnrollUpdateManyMutationInput, EnrollUncheckedUpdateManyInput>
    /**
     * Filter which Enrolls to update
     */
    where?: EnrollWhereInput
    /**
     * Limit how many Enrolls to update.
     */
    limit?: number
  }

  /**
   * Enroll updateManyAndReturn
   */
  export type EnrollUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enroll
     */
    select?: EnrollSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enroll
     */
    omit?: EnrollOmit<ExtArgs> | null
    /**
     * The data used to update Enrolls.
     */
    data: XOR<EnrollUpdateManyMutationInput, EnrollUncheckedUpdateManyInput>
    /**
     * Filter which Enrolls to update
     */
    where?: EnrollWhereInput
    /**
     * Limit how many Enrolls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enroll upsert
   */
  export type EnrollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enroll
     */
    select?: EnrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enroll
     */
    omit?: EnrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollInclude<ExtArgs> | null
    /**
     * The filter to search for the Enroll to update in case it exists.
     */
    where: EnrollWhereUniqueInput
    /**
     * In case the Enroll found by the `where` argument doesn't exist, create a new Enroll with this data.
     */
    create: XOR<EnrollCreateInput, EnrollUncheckedCreateInput>
    /**
     * In case the Enroll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollUpdateInput, EnrollUncheckedUpdateInput>
  }

  /**
   * Enroll delete
   */
  export type EnrollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enroll
     */
    select?: EnrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enroll
     */
    omit?: EnrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollInclude<ExtArgs> | null
    /**
     * Filter which Enroll to delete.
     */
    where: EnrollWhereUniqueInput
  }

  /**
   * Enroll deleteMany
   */
  export type EnrollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrolls to delete
     */
    where?: EnrollWhereInput
    /**
     * Limit how many Enrolls to delete.
     */
    limit?: number
  }

  /**
   * Enroll.athletes
   */
  export type Enroll$athletesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athletes
     */
    select?: AthletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athletes
     */
    omit?: AthletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthletesInclude<ExtArgs> | null
    where?: AthletesWhereInput
  }

  /**
   * Enroll.leaders
   */
  export type Enroll$leadersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaders
     */
    select?: LeadersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaders
     */
    omit?: LeadersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersInclude<ExtArgs> | null
    where?: LeadersWhereInput
  }

  /**
   * Enroll without action
   */
  export type EnrollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enroll
     */
    select?: EnrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enroll
     */
    omit?: EnrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollInclude<ExtArgs> | null
  }


  /**
   * Model Athletes
   */

  export type AggregateAthletes = {
    _count: AthletesCountAggregateOutputType | null
    _avg: AthletesAvgAggregateOutputType | null
    _sum: AthletesSumAggregateOutputType | null
    _min: AthletesMinAggregateOutputType | null
    _max: AthletesMaxAggregateOutputType | null
  }

  export type AthletesAvgAggregateOutputType = {
    id: number | null
    enrollID: number | null
  }

  export type AthletesSumAggregateOutputType = {
    id: number | null
    enrollID: number | null
  }

  export type AthletesMinAggregateOutputType = {
    id: number | null
    enrollID: number | null
    class: string | null
    uniformSize: string | null
    createdAt: Date | null
  }

  export type AthletesMaxAggregateOutputType = {
    id: number | null
    enrollID: number | null
    class: string | null
    uniformSize: string | null
    createdAt: Date | null
  }

  export type AthletesCountAggregateOutputType = {
    id: number
    enrollID: number
    class: number
    uniformSize: number
    createdAt: number
    _all: number
  }


  export type AthletesAvgAggregateInputType = {
    id?: true
    enrollID?: true
  }

  export type AthletesSumAggregateInputType = {
    id?: true
    enrollID?: true
  }

  export type AthletesMinAggregateInputType = {
    id?: true
    enrollID?: true
    class?: true
    uniformSize?: true
    createdAt?: true
  }

  export type AthletesMaxAggregateInputType = {
    id?: true
    enrollID?: true
    class?: true
    uniformSize?: true
    createdAt?: true
  }

  export type AthletesCountAggregateInputType = {
    id?: true
    enrollID?: true
    class?: true
    uniformSize?: true
    createdAt?: true
    _all?: true
  }

  export type AthletesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Athletes to aggregate.
     */
    where?: AthletesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Athletes to fetch.
     */
    orderBy?: AthletesOrderByWithRelationInput | AthletesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AthletesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Athletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Athletes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Athletes
    **/
    _count?: true | AthletesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AthletesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AthletesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AthletesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AthletesMaxAggregateInputType
  }

  export type GetAthletesAggregateType<T extends AthletesAggregateArgs> = {
        [P in keyof T & keyof AggregateAthletes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAthletes[P]>
      : GetScalarType<T[P], AggregateAthletes[P]>
  }




  export type AthletesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AthletesWhereInput
    orderBy?: AthletesOrderByWithAggregationInput | AthletesOrderByWithAggregationInput[]
    by: AthletesScalarFieldEnum[] | AthletesScalarFieldEnum
    having?: AthletesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AthletesCountAggregateInputType | true
    _avg?: AthletesAvgAggregateInputType
    _sum?: AthletesSumAggregateInputType
    _min?: AthletesMinAggregateInputType
    _max?: AthletesMaxAggregateInputType
  }

  export type AthletesGroupByOutputType = {
    id: number
    enrollID: number
    class: string | null
    uniformSize: string | null
    createdAt: Date
    _count: AthletesCountAggregateOutputType | null
    _avg: AthletesAvgAggregateOutputType | null
    _sum: AthletesSumAggregateOutputType | null
    _min: AthletesMinAggregateOutputType | null
    _max: AthletesMaxAggregateOutputType | null
  }

  type GetAthletesGroupByPayload<T extends AthletesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AthletesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AthletesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AthletesGroupByOutputType[P]>
            : GetScalarType<T[P], AthletesGroupByOutputType[P]>
        }
      >
    >


  export type AthletesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollID?: boolean
    class?: boolean
    uniformSize?: boolean
    createdAt?: boolean
    enroll?: boolean | EnrollDefaultArgs<ExtArgs>
    AthleteParticipat?: boolean | Athletes$AthleteParticipatArgs<ExtArgs>
    _count?: boolean | AthletesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athletes"]>

  export type AthletesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollID?: boolean
    class?: boolean
    uniformSize?: boolean
    createdAt?: boolean
    enroll?: boolean | EnrollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athletes"]>

  export type AthletesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollID?: boolean
    class?: boolean
    uniformSize?: boolean
    createdAt?: boolean
    enroll?: boolean | EnrollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athletes"]>

  export type AthletesSelectScalar = {
    id?: boolean
    enrollID?: boolean
    class?: boolean
    uniformSize?: boolean
    createdAt?: boolean
  }

  export type AthletesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enrollID" | "class" | "uniformSize" | "createdAt", ExtArgs["result"]["athletes"]>
  export type AthletesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enroll?: boolean | EnrollDefaultArgs<ExtArgs>
    AthleteParticipat?: boolean | Athletes$AthleteParticipatArgs<ExtArgs>
    _count?: boolean | AthletesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AthletesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enroll?: boolean | EnrollDefaultArgs<ExtArgs>
  }
  export type AthletesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enroll?: boolean | EnrollDefaultArgs<ExtArgs>
  }

  export type $AthletesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Athletes"
    objects: {
      enroll: Prisma.$EnrollPayload<ExtArgs>
      AthleteParticipat: Prisma.$AthleteParticipatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enrollID: number
      class: string | null
      uniformSize: string | null
      createdAt: Date
    }, ExtArgs["result"]["athletes"]>
    composites: {}
  }

  type AthletesGetPayload<S extends boolean | null | undefined | AthletesDefaultArgs> = $Result.GetResult<Prisma.$AthletesPayload, S>

  type AthletesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AthletesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AthletesCountAggregateInputType | true
    }

  export interface AthletesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Athletes'], meta: { name: 'Athletes' } }
    /**
     * Find zero or one Athletes that matches the filter.
     * @param {AthletesFindUniqueArgs} args - Arguments to find a Athletes
     * @example
     * // Get one Athletes
     * const athletes = await prisma.athletes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AthletesFindUniqueArgs>(args: SelectSubset<T, AthletesFindUniqueArgs<ExtArgs>>): Prisma__AthletesClient<$Result.GetResult<Prisma.$AthletesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Athletes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AthletesFindUniqueOrThrowArgs} args - Arguments to find a Athletes
     * @example
     * // Get one Athletes
     * const athletes = await prisma.athletes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AthletesFindUniqueOrThrowArgs>(args: SelectSubset<T, AthletesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AthletesClient<$Result.GetResult<Prisma.$AthletesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Athletes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthletesFindFirstArgs} args - Arguments to find a Athletes
     * @example
     * // Get one Athletes
     * const athletes = await prisma.athletes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AthletesFindFirstArgs>(args?: SelectSubset<T, AthletesFindFirstArgs<ExtArgs>>): Prisma__AthletesClient<$Result.GetResult<Prisma.$AthletesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Athletes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthletesFindFirstOrThrowArgs} args - Arguments to find a Athletes
     * @example
     * // Get one Athletes
     * const athletes = await prisma.athletes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AthletesFindFirstOrThrowArgs>(args?: SelectSubset<T, AthletesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AthletesClient<$Result.GetResult<Prisma.$AthletesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Athletes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthletesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Athletes
     * const athletes = await prisma.athletes.findMany()
     * 
     * // Get first 10 Athletes
     * const athletes = await prisma.athletes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const athletesWithIdOnly = await prisma.athletes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AthletesFindManyArgs>(args?: SelectSubset<T, AthletesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthletesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Athletes.
     * @param {AthletesCreateArgs} args - Arguments to create a Athletes.
     * @example
     * // Create one Athletes
     * const Athletes = await prisma.athletes.create({
     *   data: {
     *     // ... data to create a Athletes
     *   }
     * })
     * 
     */
    create<T extends AthletesCreateArgs>(args: SelectSubset<T, AthletesCreateArgs<ExtArgs>>): Prisma__AthletesClient<$Result.GetResult<Prisma.$AthletesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Athletes.
     * @param {AthletesCreateManyArgs} args - Arguments to create many Athletes.
     * @example
     * // Create many Athletes
     * const athletes = await prisma.athletes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AthletesCreateManyArgs>(args?: SelectSubset<T, AthletesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Athletes and returns the data saved in the database.
     * @param {AthletesCreateManyAndReturnArgs} args - Arguments to create many Athletes.
     * @example
     * // Create many Athletes
     * const athletes = await prisma.athletes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Athletes and only return the `id`
     * const athletesWithIdOnly = await prisma.athletes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AthletesCreateManyAndReturnArgs>(args?: SelectSubset<T, AthletesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthletesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Athletes.
     * @param {AthletesDeleteArgs} args - Arguments to delete one Athletes.
     * @example
     * // Delete one Athletes
     * const Athletes = await prisma.athletes.delete({
     *   where: {
     *     // ... filter to delete one Athletes
     *   }
     * })
     * 
     */
    delete<T extends AthletesDeleteArgs>(args: SelectSubset<T, AthletesDeleteArgs<ExtArgs>>): Prisma__AthletesClient<$Result.GetResult<Prisma.$AthletesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Athletes.
     * @param {AthletesUpdateArgs} args - Arguments to update one Athletes.
     * @example
     * // Update one Athletes
     * const athletes = await prisma.athletes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AthletesUpdateArgs>(args: SelectSubset<T, AthletesUpdateArgs<ExtArgs>>): Prisma__AthletesClient<$Result.GetResult<Prisma.$AthletesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Athletes.
     * @param {AthletesDeleteManyArgs} args - Arguments to filter Athletes to delete.
     * @example
     * // Delete a few Athletes
     * const { count } = await prisma.athletes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AthletesDeleteManyArgs>(args?: SelectSubset<T, AthletesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Athletes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthletesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Athletes
     * const athletes = await prisma.athletes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AthletesUpdateManyArgs>(args: SelectSubset<T, AthletesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Athletes and returns the data updated in the database.
     * @param {AthletesUpdateManyAndReturnArgs} args - Arguments to update many Athletes.
     * @example
     * // Update many Athletes
     * const athletes = await prisma.athletes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Athletes and only return the `id`
     * const athletesWithIdOnly = await prisma.athletes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AthletesUpdateManyAndReturnArgs>(args: SelectSubset<T, AthletesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthletesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Athletes.
     * @param {AthletesUpsertArgs} args - Arguments to update or create a Athletes.
     * @example
     * // Update or create a Athletes
     * const athletes = await prisma.athletes.upsert({
     *   create: {
     *     // ... data to create a Athletes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Athletes we want to update
     *   }
     * })
     */
    upsert<T extends AthletesUpsertArgs>(args: SelectSubset<T, AthletesUpsertArgs<ExtArgs>>): Prisma__AthletesClient<$Result.GetResult<Prisma.$AthletesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Athletes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthletesCountArgs} args - Arguments to filter Athletes to count.
     * @example
     * // Count the number of Athletes
     * const count = await prisma.athletes.count({
     *   where: {
     *     // ... the filter for the Athletes we want to count
     *   }
     * })
    **/
    count<T extends AthletesCountArgs>(
      args?: Subset<T, AthletesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AthletesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Athletes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthletesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AthletesAggregateArgs>(args: Subset<T, AthletesAggregateArgs>): Prisma.PrismaPromise<GetAthletesAggregateType<T>>

    /**
     * Group by Athletes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthletesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AthletesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AthletesGroupByArgs['orderBy'] }
        : { orderBy?: AthletesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AthletesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAthletesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Athletes model
   */
  readonly fields: AthletesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Athletes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AthletesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enroll<T extends EnrollDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnrollDefaultArgs<ExtArgs>>): Prisma__EnrollClient<$Result.GetResult<Prisma.$EnrollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    AthleteParticipat<T extends Athletes$AthleteParticipatArgs<ExtArgs> = {}>(args?: Subset<T, Athletes$AthleteParticipatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Athletes model
   */
  interface AthletesFieldRefs {
    readonly id: FieldRef<"Athletes", 'Int'>
    readonly enrollID: FieldRef<"Athletes", 'Int'>
    readonly class: FieldRef<"Athletes", 'String'>
    readonly uniformSize: FieldRef<"Athletes", 'String'>
    readonly createdAt: FieldRef<"Athletes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Athletes findUnique
   */
  export type AthletesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athletes
     */
    select?: AthletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athletes
     */
    omit?: AthletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthletesInclude<ExtArgs> | null
    /**
     * Filter, which Athletes to fetch.
     */
    where: AthletesWhereUniqueInput
  }

  /**
   * Athletes findUniqueOrThrow
   */
  export type AthletesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athletes
     */
    select?: AthletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athletes
     */
    omit?: AthletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthletesInclude<ExtArgs> | null
    /**
     * Filter, which Athletes to fetch.
     */
    where: AthletesWhereUniqueInput
  }

  /**
   * Athletes findFirst
   */
  export type AthletesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athletes
     */
    select?: AthletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athletes
     */
    omit?: AthletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthletesInclude<ExtArgs> | null
    /**
     * Filter, which Athletes to fetch.
     */
    where?: AthletesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Athletes to fetch.
     */
    orderBy?: AthletesOrderByWithRelationInput | AthletesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Athletes.
     */
    cursor?: AthletesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Athletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Athletes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Athletes.
     */
    distinct?: AthletesScalarFieldEnum | AthletesScalarFieldEnum[]
  }

  /**
   * Athletes findFirstOrThrow
   */
  export type AthletesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athletes
     */
    select?: AthletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athletes
     */
    omit?: AthletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthletesInclude<ExtArgs> | null
    /**
     * Filter, which Athletes to fetch.
     */
    where?: AthletesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Athletes to fetch.
     */
    orderBy?: AthletesOrderByWithRelationInput | AthletesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Athletes.
     */
    cursor?: AthletesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Athletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Athletes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Athletes.
     */
    distinct?: AthletesScalarFieldEnum | AthletesScalarFieldEnum[]
  }

  /**
   * Athletes findMany
   */
  export type AthletesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athletes
     */
    select?: AthletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athletes
     */
    omit?: AthletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthletesInclude<ExtArgs> | null
    /**
     * Filter, which Athletes to fetch.
     */
    where?: AthletesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Athletes to fetch.
     */
    orderBy?: AthletesOrderByWithRelationInput | AthletesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Athletes.
     */
    cursor?: AthletesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Athletes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Athletes.
     */
    skip?: number
    distinct?: AthletesScalarFieldEnum | AthletesScalarFieldEnum[]
  }

  /**
   * Athletes create
   */
  export type AthletesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athletes
     */
    select?: AthletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athletes
     */
    omit?: AthletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthletesInclude<ExtArgs> | null
    /**
     * The data needed to create a Athletes.
     */
    data: XOR<AthletesCreateInput, AthletesUncheckedCreateInput>
  }

  /**
   * Athletes createMany
   */
  export type AthletesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Athletes.
     */
    data: AthletesCreateManyInput | AthletesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Athletes createManyAndReturn
   */
  export type AthletesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athletes
     */
    select?: AthletesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Athletes
     */
    omit?: AthletesOmit<ExtArgs> | null
    /**
     * The data used to create many Athletes.
     */
    data: AthletesCreateManyInput | AthletesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthletesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Athletes update
   */
  export type AthletesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athletes
     */
    select?: AthletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athletes
     */
    omit?: AthletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthletesInclude<ExtArgs> | null
    /**
     * The data needed to update a Athletes.
     */
    data: XOR<AthletesUpdateInput, AthletesUncheckedUpdateInput>
    /**
     * Choose, which Athletes to update.
     */
    where: AthletesWhereUniqueInput
  }

  /**
   * Athletes updateMany
   */
  export type AthletesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Athletes.
     */
    data: XOR<AthletesUpdateManyMutationInput, AthletesUncheckedUpdateManyInput>
    /**
     * Filter which Athletes to update
     */
    where?: AthletesWhereInput
    /**
     * Limit how many Athletes to update.
     */
    limit?: number
  }

  /**
   * Athletes updateManyAndReturn
   */
  export type AthletesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athletes
     */
    select?: AthletesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Athletes
     */
    omit?: AthletesOmit<ExtArgs> | null
    /**
     * The data used to update Athletes.
     */
    data: XOR<AthletesUpdateManyMutationInput, AthletesUncheckedUpdateManyInput>
    /**
     * Filter which Athletes to update
     */
    where?: AthletesWhereInput
    /**
     * Limit how many Athletes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthletesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Athletes upsert
   */
  export type AthletesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athletes
     */
    select?: AthletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athletes
     */
    omit?: AthletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthletesInclude<ExtArgs> | null
    /**
     * The filter to search for the Athletes to update in case it exists.
     */
    where: AthletesWhereUniqueInput
    /**
     * In case the Athletes found by the `where` argument doesn't exist, create a new Athletes with this data.
     */
    create: XOR<AthletesCreateInput, AthletesUncheckedCreateInput>
    /**
     * In case the Athletes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AthletesUpdateInput, AthletesUncheckedUpdateInput>
  }

  /**
   * Athletes delete
   */
  export type AthletesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athletes
     */
    select?: AthletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athletes
     */
    omit?: AthletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthletesInclude<ExtArgs> | null
    /**
     * Filter which Athletes to delete.
     */
    where: AthletesWhereUniqueInput
  }

  /**
   * Athletes deleteMany
   */
  export type AthletesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Athletes to delete
     */
    where?: AthletesWhereInput
    /**
     * Limit how many Athletes to delete.
     */
    limit?: number
  }

  /**
   * Athletes.AthleteParticipat
   */
  export type Athletes$AthleteParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatInclude<ExtArgs> | null
    where?: AthleteParticipatWhereInput
    orderBy?: AthleteParticipatOrderByWithRelationInput | AthleteParticipatOrderByWithRelationInput[]
    cursor?: AthleteParticipatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AthleteParticipatScalarFieldEnum | AthleteParticipatScalarFieldEnum[]
  }

  /**
   * Athletes without action
   */
  export type AthletesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Athletes
     */
    select?: AthletesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Athletes
     */
    omit?: AthletesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthletesInclude<ExtArgs> | null
  }


  /**
   * Model Leaders
   */

  export type AggregateLeaders = {
    _count: LeadersCountAggregateOutputType | null
    _avg: LeadersAvgAggregateOutputType | null
    _sum: LeadersSumAggregateOutputType | null
    _min: LeadersMinAggregateOutputType | null
    _max: LeadersMaxAggregateOutputType | null
  }

  export type LeadersAvgAggregateOutputType = {
    id: number | null
    enrollID: number | null
  }

  export type LeadersSumAggregateOutputType = {
    id: number | null
    enrollID: number | null
  }

  export type LeadersMinAggregateOutputType = {
    id: number | null
    enrollID: number | null
    roles: $Enums.LeaderRole | null
    phoneNumber: string | null
    createdAt: Date | null
  }

  export type LeadersMaxAggregateOutputType = {
    id: number | null
    enrollID: number | null
    roles: $Enums.LeaderRole | null
    phoneNumber: string | null
    createdAt: Date | null
  }

  export type LeadersCountAggregateOutputType = {
    id: number
    enrollID: number
    roles: number
    phoneNumber: number
    createdAt: number
    _all: number
  }


  export type LeadersAvgAggregateInputType = {
    id?: true
    enrollID?: true
  }

  export type LeadersSumAggregateInputType = {
    id?: true
    enrollID?: true
  }

  export type LeadersMinAggregateInputType = {
    id?: true
    enrollID?: true
    roles?: true
    phoneNumber?: true
    createdAt?: true
  }

  export type LeadersMaxAggregateInputType = {
    id?: true
    enrollID?: true
    roles?: true
    phoneNumber?: true
    createdAt?: true
  }

  export type LeadersCountAggregateInputType = {
    id?: true
    enrollID?: true
    roles?: true
    phoneNumber?: true
    createdAt?: true
    _all?: true
  }

  export type LeadersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaders to aggregate.
     */
    where?: LeadersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaders to fetch.
     */
    orderBy?: LeadersOrderByWithRelationInput | LeadersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leaders
    **/
    _count?: true | LeadersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadersMaxAggregateInputType
  }

  export type GetLeadersAggregateType<T extends LeadersAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaders[P]>
      : GetScalarType<T[P], AggregateLeaders[P]>
  }




  export type LeadersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadersWhereInput
    orderBy?: LeadersOrderByWithAggregationInput | LeadersOrderByWithAggregationInput[]
    by: LeadersScalarFieldEnum[] | LeadersScalarFieldEnum
    having?: LeadersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadersCountAggregateInputType | true
    _avg?: LeadersAvgAggregateInputType
    _sum?: LeadersSumAggregateInputType
    _min?: LeadersMinAggregateInputType
    _max?: LeadersMaxAggregateInputType
  }

  export type LeadersGroupByOutputType = {
    id: number
    enrollID: number
    roles: $Enums.LeaderRole
    phoneNumber: string
    createdAt: Date
    _count: LeadersCountAggregateOutputType | null
    _avg: LeadersAvgAggregateOutputType | null
    _sum: LeadersSumAggregateOutputType | null
    _min: LeadersMinAggregateOutputType | null
    _max: LeadersMaxAggregateOutputType | null
  }

  type GetLeadersGroupByPayload<T extends LeadersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadersGroupByOutputType[P]>
            : GetScalarType<T[P], LeadersGroupByOutputType[P]>
        }
      >
    >


  export type LeadersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollID?: boolean
    roles?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    enroll?: boolean | EnrollDefaultArgs<ExtArgs>
    LeaderParticipat?: boolean | Leaders$LeaderParticipatArgs<ExtArgs>
    _count?: boolean | LeadersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaders"]>

  export type LeadersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollID?: boolean
    roles?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    enroll?: boolean | EnrollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaders"]>

  export type LeadersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollID?: boolean
    roles?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    enroll?: boolean | EnrollDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaders"]>

  export type LeadersSelectScalar = {
    id?: boolean
    enrollID?: boolean
    roles?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
  }

  export type LeadersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enrollID" | "roles" | "phoneNumber" | "createdAt", ExtArgs["result"]["leaders"]>
  export type LeadersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enroll?: boolean | EnrollDefaultArgs<ExtArgs>
    LeaderParticipat?: boolean | Leaders$LeaderParticipatArgs<ExtArgs>
    _count?: boolean | LeadersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeadersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enroll?: boolean | EnrollDefaultArgs<ExtArgs>
  }
  export type LeadersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enroll?: boolean | EnrollDefaultArgs<ExtArgs>
  }

  export type $LeadersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leaders"
    objects: {
      enroll: Prisma.$EnrollPayload<ExtArgs>
      LeaderParticipat: Prisma.$LeaderParticipatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enrollID: number
      roles: $Enums.LeaderRole
      phoneNumber: string
      createdAt: Date
    }, ExtArgs["result"]["leaders"]>
    composites: {}
  }

  type LeadersGetPayload<S extends boolean | null | undefined | LeadersDefaultArgs> = $Result.GetResult<Prisma.$LeadersPayload, S>

  type LeadersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadersCountAggregateInputType | true
    }

  export interface LeadersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leaders'], meta: { name: 'Leaders' } }
    /**
     * Find zero or one Leaders that matches the filter.
     * @param {LeadersFindUniqueArgs} args - Arguments to find a Leaders
     * @example
     * // Get one Leaders
     * const leaders = await prisma.leaders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadersFindUniqueArgs>(args: SelectSubset<T, LeadersFindUniqueArgs<ExtArgs>>): Prisma__LeadersClient<$Result.GetResult<Prisma.$LeadersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leaders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadersFindUniqueOrThrowArgs} args - Arguments to find a Leaders
     * @example
     * // Get one Leaders
     * const leaders = await prisma.leaders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadersFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadersClient<$Result.GetResult<Prisma.$LeadersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leaders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadersFindFirstArgs} args - Arguments to find a Leaders
     * @example
     * // Get one Leaders
     * const leaders = await prisma.leaders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadersFindFirstArgs>(args?: SelectSubset<T, LeadersFindFirstArgs<ExtArgs>>): Prisma__LeadersClient<$Result.GetResult<Prisma.$LeadersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leaders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadersFindFirstOrThrowArgs} args - Arguments to find a Leaders
     * @example
     * // Get one Leaders
     * const leaders = await prisma.leaders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadersFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadersFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadersClient<$Result.GetResult<Prisma.$LeadersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leaders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leaders
     * const leaders = await prisma.leaders.findMany()
     * 
     * // Get first 10 Leaders
     * const leaders = await prisma.leaders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadersWithIdOnly = await prisma.leaders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadersFindManyArgs>(args?: SelectSubset<T, LeadersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leaders.
     * @param {LeadersCreateArgs} args - Arguments to create a Leaders.
     * @example
     * // Create one Leaders
     * const Leaders = await prisma.leaders.create({
     *   data: {
     *     // ... data to create a Leaders
     *   }
     * })
     * 
     */
    create<T extends LeadersCreateArgs>(args: SelectSubset<T, LeadersCreateArgs<ExtArgs>>): Prisma__LeadersClient<$Result.GetResult<Prisma.$LeadersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leaders.
     * @param {LeadersCreateManyArgs} args - Arguments to create many Leaders.
     * @example
     * // Create many Leaders
     * const leaders = await prisma.leaders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadersCreateManyArgs>(args?: SelectSubset<T, LeadersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leaders and returns the data saved in the database.
     * @param {LeadersCreateManyAndReturnArgs} args - Arguments to create many Leaders.
     * @example
     * // Create many Leaders
     * const leaders = await prisma.leaders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leaders and only return the `id`
     * const leadersWithIdOnly = await prisma.leaders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadersCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leaders.
     * @param {LeadersDeleteArgs} args - Arguments to delete one Leaders.
     * @example
     * // Delete one Leaders
     * const Leaders = await prisma.leaders.delete({
     *   where: {
     *     // ... filter to delete one Leaders
     *   }
     * })
     * 
     */
    delete<T extends LeadersDeleteArgs>(args: SelectSubset<T, LeadersDeleteArgs<ExtArgs>>): Prisma__LeadersClient<$Result.GetResult<Prisma.$LeadersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leaders.
     * @param {LeadersUpdateArgs} args - Arguments to update one Leaders.
     * @example
     * // Update one Leaders
     * const leaders = await prisma.leaders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadersUpdateArgs>(args: SelectSubset<T, LeadersUpdateArgs<ExtArgs>>): Prisma__LeadersClient<$Result.GetResult<Prisma.$LeadersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leaders.
     * @param {LeadersDeleteManyArgs} args - Arguments to filter Leaders to delete.
     * @example
     * // Delete a few Leaders
     * const { count } = await prisma.leaders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadersDeleteManyArgs>(args?: SelectSubset<T, LeadersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leaders
     * const leaders = await prisma.leaders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadersUpdateManyArgs>(args: SelectSubset<T, LeadersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaders and returns the data updated in the database.
     * @param {LeadersUpdateManyAndReturnArgs} args - Arguments to update many Leaders.
     * @example
     * // Update many Leaders
     * const leaders = await prisma.leaders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leaders and only return the `id`
     * const leadersWithIdOnly = await prisma.leaders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadersUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leaders.
     * @param {LeadersUpsertArgs} args - Arguments to update or create a Leaders.
     * @example
     * // Update or create a Leaders
     * const leaders = await prisma.leaders.upsert({
     *   create: {
     *     // ... data to create a Leaders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leaders we want to update
     *   }
     * })
     */
    upsert<T extends LeadersUpsertArgs>(args: SelectSubset<T, LeadersUpsertArgs<ExtArgs>>): Prisma__LeadersClient<$Result.GetResult<Prisma.$LeadersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leaders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadersCountArgs} args - Arguments to filter Leaders to count.
     * @example
     * // Count the number of Leaders
     * const count = await prisma.leaders.count({
     *   where: {
     *     // ... the filter for the Leaders we want to count
     *   }
     * })
    **/
    count<T extends LeadersCountArgs>(
      args?: Subset<T, LeadersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leaders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadersAggregateArgs>(args: Subset<T, LeadersAggregateArgs>): Prisma.PrismaPromise<GetLeadersAggregateType<T>>

    /**
     * Group by Leaders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadersGroupByArgs['orderBy'] }
        : { orderBy?: LeadersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leaders model
   */
  readonly fields: LeadersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leaders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enroll<T extends EnrollDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnrollDefaultArgs<ExtArgs>>): Prisma__EnrollClient<$Result.GetResult<Prisma.$EnrollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    LeaderParticipat<T extends Leaders$LeaderParticipatArgs<ExtArgs> = {}>(args?: Subset<T, Leaders$LeaderParticipatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderParticipatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Leaders model
   */
  interface LeadersFieldRefs {
    readonly id: FieldRef<"Leaders", 'Int'>
    readonly enrollID: FieldRef<"Leaders", 'Int'>
    readonly roles: FieldRef<"Leaders", 'LeaderRole'>
    readonly phoneNumber: FieldRef<"Leaders", 'String'>
    readonly createdAt: FieldRef<"Leaders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Leaders findUnique
   */
  export type LeadersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaders
     */
    select?: LeadersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaders
     */
    omit?: LeadersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersInclude<ExtArgs> | null
    /**
     * Filter, which Leaders to fetch.
     */
    where: LeadersWhereUniqueInput
  }

  /**
   * Leaders findUniqueOrThrow
   */
  export type LeadersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaders
     */
    select?: LeadersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaders
     */
    omit?: LeadersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersInclude<ExtArgs> | null
    /**
     * Filter, which Leaders to fetch.
     */
    where: LeadersWhereUniqueInput
  }

  /**
   * Leaders findFirst
   */
  export type LeadersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaders
     */
    select?: LeadersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaders
     */
    omit?: LeadersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersInclude<ExtArgs> | null
    /**
     * Filter, which Leaders to fetch.
     */
    where?: LeadersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaders to fetch.
     */
    orderBy?: LeadersOrderByWithRelationInput | LeadersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaders.
     */
    cursor?: LeadersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaders.
     */
    distinct?: LeadersScalarFieldEnum | LeadersScalarFieldEnum[]
  }

  /**
   * Leaders findFirstOrThrow
   */
  export type LeadersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaders
     */
    select?: LeadersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaders
     */
    omit?: LeadersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersInclude<ExtArgs> | null
    /**
     * Filter, which Leaders to fetch.
     */
    where?: LeadersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaders to fetch.
     */
    orderBy?: LeadersOrderByWithRelationInput | LeadersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaders.
     */
    cursor?: LeadersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaders.
     */
    distinct?: LeadersScalarFieldEnum | LeadersScalarFieldEnum[]
  }

  /**
   * Leaders findMany
   */
  export type LeadersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaders
     */
    select?: LeadersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaders
     */
    omit?: LeadersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersInclude<ExtArgs> | null
    /**
     * Filter, which Leaders to fetch.
     */
    where?: LeadersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaders to fetch.
     */
    orderBy?: LeadersOrderByWithRelationInput | LeadersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leaders.
     */
    cursor?: LeadersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaders.
     */
    skip?: number
    distinct?: LeadersScalarFieldEnum | LeadersScalarFieldEnum[]
  }

  /**
   * Leaders create
   */
  export type LeadersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaders
     */
    select?: LeadersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaders
     */
    omit?: LeadersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersInclude<ExtArgs> | null
    /**
     * The data needed to create a Leaders.
     */
    data: XOR<LeadersCreateInput, LeadersUncheckedCreateInput>
  }

  /**
   * Leaders createMany
   */
  export type LeadersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leaders.
     */
    data: LeadersCreateManyInput | LeadersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leaders createManyAndReturn
   */
  export type LeadersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaders
     */
    select?: LeadersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leaders
     */
    omit?: LeadersOmit<ExtArgs> | null
    /**
     * The data used to create many Leaders.
     */
    data: LeadersCreateManyInput | LeadersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leaders update
   */
  export type LeadersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaders
     */
    select?: LeadersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaders
     */
    omit?: LeadersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersInclude<ExtArgs> | null
    /**
     * The data needed to update a Leaders.
     */
    data: XOR<LeadersUpdateInput, LeadersUncheckedUpdateInput>
    /**
     * Choose, which Leaders to update.
     */
    where: LeadersWhereUniqueInput
  }

  /**
   * Leaders updateMany
   */
  export type LeadersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leaders.
     */
    data: XOR<LeadersUpdateManyMutationInput, LeadersUncheckedUpdateManyInput>
    /**
     * Filter which Leaders to update
     */
    where?: LeadersWhereInput
    /**
     * Limit how many Leaders to update.
     */
    limit?: number
  }

  /**
   * Leaders updateManyAndReturn
   */
  export type LeadersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaders
     */
    select?: LeadersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leaders
     */
    omit?: LeadersOmit<ExtArgs> | null
    /**
     * The data used to update Leaders.
     */
    data: XOR<LeadersUpdateManyMutationInput, LeadersUncheckedUpdateManyInput>
    /**
     * Filter which Leaders to update
     */
    where?: LeadersWhereInput
    /**
     * Limit how many Leaders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leaders upsert
   */
  export type LeadersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaders
     */
    select?: LeadersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaders
     */
    omit?: LeadersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersInclude<ExtArgs> | null
    /**
     * The filter to search for the Leaders to update in case it exists.
     */
    where: LeadersWhereUniqueInput
    /**
     * In case the Leaders found by the `where` argument doesn't exist, create a new Leaders with this data.
     */
    create: XOR<LeadersCreateInput, LeadersUncheckedCreateInput>
    /**
     * In case the Leaders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadersUpdateInput, LeadersUncheckedUpdateInput>
  }

  /**
   * Leaders delete
   */
  export type LeadersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaders
     */
    select?: LeadersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaders
     */
    omit?: LeadersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersInclude<ExtArgs> | null
    /**
     * Filter which Leaders to delete.
     */
    where: LeadersWhereUniqueInput
  }

  /**
   * Leaders deleteMany
   */
  export type LeadersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaders to delete
     */
    where?: LeadersWhereInput
    /**
     * Limit how many Leaders to delete.
     */
    limit?: number
  }

  /**
   * Leaders.LeaderParticipat
   */
  export type Leaders$LeaderParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderParticipat
     */
    select?: LeaderParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderParticipat
     */
    omit?: LeaderParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderParticipatInclude<ExtArgs> | null
    where?: LeaderParticipatWhereInput
    orderBy?: LeaderParticipatOrderByWithRelationInput | LeaderParticipatOrderByWithRelationInput[]
    cursor?: LeaderParticipatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaderParticipatScalarFieldEnum | LeaderParticipatScalarFieldEnum[]
  }

  /**
   * Leaders without action
   */
  export type LeadersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leaders
     */
    select?: LeadersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leaders
     */
    omit?: LeadersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadersInclude<ExtArgs> | null
  }


  /**
   * Model Events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
  }

  export type EventsSumAggregateOutputType = {
    id: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: number | null
    name: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type EventsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    name: number
    date: number
    createdAt: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    createdAt?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    createdAt?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to aggregate.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type EventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithAggregationInput | EventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: EventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: number
    name: string
    date: Date
    createdAt: Date
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends EventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type EventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    createdAt?: boolean
    categories?: boolean | Events$categoriesArgs<ExtArgs>
    AthleteParticipat?: boolean | Events$AthleteParticipatArgs<ExtArgs>
    LeaderParticipat?: boolean | Events$LeaderParticipatArgs<ExtArgs>
    Sports_event_org?: boolean | Events$Sports_event_orgArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["events"]>

  export type EventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["events"]>

  export type EventsSelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type EventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date" | "createdAt", ExtArgs["result"]["events"]>
  export type EventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Events$categoriesArgs<ExtArgs>
    AthleteParticipat?: boolean | Events$AthleteParticipatArgs<ExtArgs>
    LeaderParticipat?: boolean | Events$LeaderParticipatArgs<ExtArgs>
    Sports_event_org?: boolean | Events$Sports_event_orgArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Events"
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs>[]
      AthleteParticipat: Prisma.$AthleteParticipatPayload<ExtArgs>[]
      LeaderParticipat: Prisma.$LeaderParticipatPayload<ExtArgs>[]
      Sports_event_org: Prisma.$Sports_event_orgPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type EventsGetPayload<S extends boolean | null | undefined | EventsDefaultArgs> = $Result.GetResult<Prisma.$EventsPayload, S>

  type EventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface EventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Events'], meta: { name: 'Events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {EventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventsFindUniqueArgs>(args: SelectSubset<T, EventsFindUniqueArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventsFindUniqueOrThrowArgs>(args: SelectSubset<T, EventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventsFindFirstArgs>(args?: SelectSubset<T, EventsFindFirstArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventsFindFirstOrThrowArgs>(args?: SelectSubset<T, EventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventsFindManyArgs>(args?: SelectSubset<T, EventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {EventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends EventsCreateArgs>(args: SelectSubset<T, EventsCreateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventsCreateManyArgs>(args?: SelectSubset<T, EventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventsCreateManyAndReturnArgs>(args?: SelectSubset<T, EventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {EventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends EventsDeleteArgs>(args: SelectSubset<T, EventsDeleteArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {EventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventsUpdateArgs>(args: SelectSubset<T, EventsUpdateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventsDeleteManyArgs>(args?: SelectSubset<T, EventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventsUpdateManyArgs>(args: SelectSubset<T, EventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventsUpdateManyAndReturnArgs>(args: SelectSubset<T, EventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {EventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends EventsUpsertArgs>(args: SelectSubset<T, EventsUpsertArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventsCountArgs>(
      args?: Subset<T, EventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventsGroupByArgs['orderBy'] }
        : { orderBy?: EventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Events model
   */
  readonly fields: EventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Events$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Events$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AthleteParticipat<T extends Events$AthleteParticipatArgs<ExtArgs> = {}>(args?: Subset<T, Events$AthleteParticipatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LeaderParticipat<T extends Events$LeaderParticipatArgs<ExtArgs> = {}>(args?: Subset<T, Events$LeaderParticipatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderParticipatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Sports_event_org<T extends Events$Sports_event_orgArgs<ExtArgs> = {}>(args?: Subset<T, Events$Sports_event_orgArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sports_event_orgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Events model
   */
  interface EventsFieldRefs {
    readonly id: FieldRef<"Events", 'Int'>
    readonly name: FieldRef<"Events", 'String'>
    readonly date: FieldRef<"Events", 'DateTime'>
    readonly createdAt: FieldRef<"Events", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Events findUnique
   */
  export type EventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findUniqueOrThrow
   */
  export type EventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findFirst
   */
  export type EventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findFirstOrThrow
   */
  export type EventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findMany
   */
  export type EventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events create
   */
  export type EventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to create a Events.
     */
    data: XOR<EventsCreateInput, EventsUncheckedCreateInput>
  }

  /**
   * Events createMany
   */
  export type EventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Events createManyAndReturn
   */
  export type EventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Events update
   */
  export type EventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to update a Events.
     */
    data: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
    /**
     * Choose, which Events to update.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events updateMany
   */
  export type EventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Events updateManyAndReturn
   */
  export type EventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Events upsert
   */
  export type EventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The filter to search for the Events to update in case it exists.
     */
    where: EventsWhereUniqueInput
    /**
     * In case the Events found by the `where` argument doesn't exist, create a new Events with this data.
     */
    create: XOR<EventsCreateInput, EventsUncheckedCreateInput>
    /**
     * In case the Events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
  }

  /**
   * Events delete
   */
  export type EventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter which Events to delete.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events deleteMany
   */
  export type EventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Events.categories
   */
  export type Events$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    cursor?: categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Events.AthleteParticipat
   */
  export type Events$AthleteParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatInclude<ExtArgs> | null
    where?: AthleteParticipatWhereInput
    orderBy?: AthleteParticipatOrderByWithRelationInput | AthleteParticipatOrderByWithRelationInput[]
    cursor?: AthleteParticipatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AthleteParticipatScalarFieldEnum | AthleteParticipatScalarFieldEnum[]
  }

  /**
   * Events.LeaderParticipat
   */
  export type Events$LeaderParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderParticipat
     */
    select?: LeaderParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderParticipat
     */
    omit?: LeaderParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderParticipatInclude<ExtArgs> | null
    where?: LeaderParticipatWhereInput
    orderBy?: LeaderParticipatOrderByWithRelationInput | LeaderParticipatOrderByWithRelationInput[]
    cursor?: LeaderParticipatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaderParticipatScalarFieldEnum | LeaderParticipatScalarFieldEnum[]
  }

  /**
   * Events.Sports_event_org
   */
  export type Events$Sports_event_orgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports_event_org
     */
    select?: Sports_event_orgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports_event_org
     */
    omit?: Sports_event_orgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sports_event_orgInclude<ExtArgs> | null
    where?: Sports_event_orgWhereInput
    orderBy?: Sports_event_orgOrderByWithRelationInput | Sports_event_orgOrderByWithRelationInput[]
    cursor?: Sports_event_orgWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sports_event_orgScalarFieldEnum | Sports_event_orgScalarFieldEnum[]
  }

  /**
   * Events without action
   */
  export type EventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
  }


  /**
   * Model Sports
   */

  export type AggregateSports = {
    _count: SportsCountAggregateOutputType | null
    _avg: SportsAvgAggregateOutputType | null
    _sum: SportsSumAggregateOutputType | null
    _min: SportsMinAggregateOutputType | null
    _max: SportsMaxAggregateOutputType | null
  }

  export type SportsAvgAggregateOutputType = {
    id: number | null
  }

  export type SportsSumAggregateOutputType = {
    id: number | null
  }

  export type SportsMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type SportsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type SportsCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type SportsAvgAggregateInputType = {
    id?: true
  }

  export type SportsSumAggregateInputType = {
    id?: true
  }

  export type SportsMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type SportsMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type SportsCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type SportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sports to aggregate.
     */
    where?: SportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportsOrderByWithRelationInput | SportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sports
    **/
    _count?: true | SportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SportsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SportsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SportsMaxAggregateInputType
  }

  export type GetSportsAggregateType<T extends SportsAggregateArgs> = {
        [P in keyof T & keyof AggregateSports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSports[P]>
      : GetScalarType<T[P], AggregateSports[P]>
  }




  export type SportsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportsWhereInput
    orderBy?: SportsOrderByWithAggregationInput | SportsOrderByWithAggregationInput[]
    by: SportsScalarFieldEnum[] | SportsScalarFieldEnum
    having?: SportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SportsCountAggregateInputType | true
    _avg?: SportsAvgAggregateInputType
    _sum?: SportsSumAggregateInputType
    _min?: SportsMinAggregateInputType
    _max?: SportsMaxAggregateInputType
  }

  export type SportsGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: SportsCountAggregateOutputType | null
    _avg: SportsAvgAggregateOutputType | null
    _sum: SportsSumAggregateOutputType | null
    _min: SportsMinAggregateOutputType | null
    _max: SportsMaxAggregateOutputType | null
  }

  type GetSportsGroupByPayload<T extends SportsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SportsGroupByOutputType[P]>
            : GetScalarType<T[P], SportsGroupByOutputType[P]>
        }
      >
    >


  export type SportsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    categories?: boolean | Sports$categoriesArgs<ExtArgs>
    AthleteParticipat?: boolean | Sports$AthleteParticipatArgs<ExtArgs>
    LeaderParticipat?: boolean | Sports$LeaderParticipatArgs<ExtArgs>
    Sports_event_org?: boolean | Sports$Sports_event_orgArgs<ExtArgs>
    _count?: boolean | SportsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sports"]>

  export type SportsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sports"]>

  export type SportsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sports"]>

  export type SportsSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type SportsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["sports"]>
  export type SportsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Sports$categoriesArgs<ExtArgs>
    AthleteParticipat?: boolean | Sports$AthleteParticipatArgs<ExtArgs>
    LeaderParticipat?: boolean | Sports$LeaderParticipatArgs<ExtArgs>
    Sports_event_org?: boolean | Sports$Sports_event_orgArgs<ExtArgs>
    _count?: boolean | SportsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SportsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SportsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SportsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sports"
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs>[]
      AthleteParticipat: Prisma.$AthleteParticipatPayload<ExtArgs>[]
      LeaderParticipat: Prisma.$LeaderParticipatPayload<ExtArgs>[]
      Sports_event_org: Prisma.$Sports_event_orgPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["sports"]>
    composites: {}
  }

  type SportsGetPayload<S extends boolean | null | undefined | SportsDefaultArgs> = $Result.GetResult<Prisma.$SportsPayload, S>

  type SportsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SportsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SportsCountAggregateInputType | true
    }

  export interface SportsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sports'], meta: { name: 'Sports' } }
    /**
     * Find zero or one Sports that matches the filter.
     * @param {SportsFindUniqueArgs} args - Arguments to find a Sports
     * @example
     * // Get one Sports
     * const sports = await prisma.sports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SportsFindUniqueArgs>(args: SelectSubset<T, SportsFindUniqueArgs<ExtArgs>>): Prisma__SportsClient<$Result.GetResult<Prisma.$SportsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sports that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SportsFindUniqueOrThrowArgs} args - Arguments to find a Sports
     * @example
     * // Get one Sports
     * const sports = await prisma.sports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SportsFindUniqueOrThrowArgs>(args: SelectSubset<T, SportsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SportsClient<$Result.GetResult<Prisma.$SportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportsFindFirstArgs} args - Arguments to find a Sports
     * @example
     * // Get one Sports
     * const sports = await prisma.sports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SportsFindFirstArgs>(args?: SelectSubset<T, SportsFindFirstArgs<ExtArgs>>): Prisma__SportsClient<$Result.GetResult<Prisma.$SportsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportsFindFirstOrThrowArgs} args - Arguments to find a Sports
     * @example
     * // Get one Sports
     * const sports = await prisma.sports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SportsFindFirstOrThrowArgs>(args?: SelectSubset<T, SportsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SportsClient<$Result.GetResult<Prisma.$SportsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sports
     * const sports = await prisma.sports.findMany()
     * 
     * // Get first 10 Sports
     * const sports = await prisma.sports.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sportsWithIdOnly = await prisma.sports.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SportsFindManyArgs>(args?: SelectSubset<T, SportsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sports.
     * @param {SportsCreateArgs} args - Arguments to create a Sports.
     * @example
     * // Create one Sports
     * const Sports = await prisma.sports.create({
     *   data: {
     *     // ... data to create a Sports
     *   }
     * })
     * 
     */
    create<T extends SportsCreateArgs>(args: SelectSubset<T, SportsCreateArgs<ExtArgs>>): Prisma__SportsClient<$Result.GetResult<Prisma.$SportsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sports.
     * @param {SportsCreateManyArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sports = await prisma.sports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SportsCreateManyArgs>(args?: SelectSubset<T, SportsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sports and returns the data saved in the database.
     * @param {SportsCreateManyAndReturnArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sports = await prisma.sports.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sports and only return the `id`
     * const sportsWithIdOnly = await prisma.sports.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SportsCreateManyAndReturnArgs>(args?: SelectSubset<T, SportsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sports.
     * @param {SportsDeleteArgs} args - Arguments to delete one Sports.
     * @example
     * // Delete one Sports
     * const Sports = await prisma.sports.delete({
     *   where: {
     *     // ... filter to delete one Sports
     *   }
     * })
     * 
     */
    delete<T extends SportsDeleteArgs>(args: SelectSubset<T, SportsDeleteArgs<ExtArgs>>): Prisma__SportsClient<$Result.GetResult<Prisma.$SportsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sports.
     * @param {SportsUpdateArgs} args - Arguments to update one Sports.
     * @example
     * // Update one Sports
     * const sports = await prisma.sports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SportsUpdateArgs>(args: SelectSubset<T, SportsUpdateArgs<ExtArgs>>): Prisma__SportsClient<$Result.GetResult<Prisma.$SportsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sports.
     * @param {SportsDeleteManyArgs} args - Arguments to filter Sports to delete.
     * @example
     * // Delete a few Sports
     * const { count } = await prisma.sports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SportsDeleteManyArgs>(args?: SelectSubset<T, SportsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sports
     * const sports = await prisma.sports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SportsUpdateManyArgs>(args: SelectSubset<T, SportsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports and returns the data updated in the database.
     * @param {SportsUpdateManyAndReturnArgs} args - Arguments to update many Sports.
     * @example
     * // Update many Sports
     * const sports = await prisma.sports.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sports and only return the `id`
     * const sportsWithIdOnly = await prisma.sports.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SportsUpdateManyAndReturnArgs>(args: SelectSubset<T, SportsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sports.
     * @param {SportsUpsertArgs} args - Arguments to update or create a Sports.
     * @example
     * // Update or create a Sports
     * const sports = await prisma.sports.upsert({
     *   create: {
     *     // ... data to create a Sports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sports we want to update
     *   }
     * })
     */
    upsert<T extends SportsUpsertArgs>(args: SelectSubset<T, SportsUpsertArgs<ExtArgs>>): Prisma__SportsClient<$Result.GetResult<Prisma.$SportsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportsCountArgs} args - Arguments to filter Sports to count.
     * @example
     * // Count the number of Sports
     * const count = await prisma.sports.count({
     *   where: {
     *     // ... the filter for the Sports we want to count
     *   }
     * })
    **/
    count<T extends SportsCountArgs>(
      args?: Subset<T, SportsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SportsAggregateArgs>(args: Subset<T, SportsAggregateArgs>): Prisma.PrismaPromise<GetSportsAggregateType<T>>

    /**
     * Group by Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SportsGroupByArgs['orderBy'] }
        : { orderBy?: SportsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sports model
   */
  readonly fields: SportsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SportsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Sports$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Sports$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AthleteParticipat<T extends Sports$AthleteParticipatArgs<ExtArgs> = {}>(args?: Subset<T, Sports$AthleteParticipatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LeaderParticipat<T extends Sports$LeaderParticipatArgs<ExtArgs> = {}>(args?: Subset<T, Sports$LeaderParticipatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderParticipatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Sports_event_org<T extends Sports$Sports_event_orgArgs<ExtArgs> = {}>(args?: Subset<T, Sports$Sports_event_orgArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sports_event_orgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sports model
   */
  interface SportsFieldRefs {
    readonly id: FieldRef<"Sports", 'Int'>
    readonly name: FieldRef<"Sports", 'String'>
    readonly createdAt: FieldRef<"Sports", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sports findUnique
   */
  export type SportsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports
     */
    select?: SportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports
     */
    omit?: SportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsInclude<ExtArgs> | null
    /**
     * Filter, which Sports to fetch.
     */
    where: SportsWhereUniqueInput
  }

  /**
   * Sports findUniqueOrThrow
   */
  export type SportsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports
     */
    select?: SportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports
     */
    omit?: SportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsInclude<ExtArgs> | null
    /**
     * Filter, which Sports to fetch.
     */
    where: SportsWhereUniqueInput
  }

  /**
   * Sports findFirst
   */
  export type SportsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports
     */
    select?: SportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports
     */
    omit?: SportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsInclude<ExtArgs> | null
    /**
     * Filter, which Sports to fetch.
     */
    where?: SportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportsOrderByWithRelationInput | SportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports.
     */
    cursor?: SportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports.
     */
    distinct?: SportsScalarFieldEnum | SportsScalarFieldEnum[]
  }

  /**
   * Sports findFirstOrThrow
   */
  export type SportsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports
     */
    select?: SportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports
     */
    omit?: SportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsInclude<ExtArgs> | null
    /**
     * Filter, which Sports to fetch.
     */
    where?: SportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportsOrderByWithRelationInput | SportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports.
     */
    cursor?: SportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports.
     */
    distinct?: SportsScalarFieldEnum | SportsScalarFieldEnum[]
  }

  /**
   * Sports findMany
   */
  export type SportsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports
     */
    select?: SportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports
     */
    omit?: SportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsInclude<ExtArgs> | null
    /**
     * Filter, which Sports to fetch.
     */
    where?: SportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportsOrderByWithRelationInput | SportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sports.
     */
    cursor?: SportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    distinct?: SportsScalarFieldEnum | SportsScalarFieldEnum[]
  }

  /**
   * Sports create
   */
  export type SportsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports
     */
    select?: SportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports
     */
    omit?: SportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsInclude<ExtArgs> | null
    /**
     * The data needed to create a Sports.
     */
    data: XOR<SportsCreateInput, SportsUncheckedCreateInput>
  }

  /**
   * Sports createMany
   */
  export type SportsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sports.
     */
    data: SportsCreateManyInput | SportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sports createManyAndReturn
   */
  export type SportsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports
     */
    select?: SportsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sports
     */
    omit?: SportsOmit<ExtArgs> | null
    /**
     * The data used to create many Sports.
     */
    data: SportsCreateManyInput | SportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sports update
   */
  export type SportsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports
     */
    select?: SportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports
     */
    omit?: SportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsInclude<ExtArgs> | null
    /**
     * The data needed to update a Sports.
     */
    data: XOR<SportsUpdateInput, SportsUncheckedUpdateInput>
    /**
     * Choose, which Sports to update.
     */
    where: SportsWhereUniqueInput
  }

  /**
   * Sports updateMany
   */
  export type SportsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sports.
     */
    data: XOR<SportsUpdateManyMutationInput, SportsUncheckedUpdateManyInput>
    /**
     * Filter which Sports to update
     */
    where?: SportsWhereInput
    /**
     * Limit how many Sports to update.
     */
    limit?: number
  }

  /**
   * Sports updateManyAndReturn
   */
  export type SportsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports
     */
    select?: SportsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sports
     */
    omit?: SportsOmit<ExtArgs> | null
    /**
     * The data used to update Sports.
     */
    data: XOR<SportsUpdateManyMutationInput, SportsUncheckedUpdateManyInput>
    /**
     * Filter which Sports to update
     */
    where?: SportsWhereInput
    /**
     * Limit how many Sports to update.
     */
    limit?: number
  }

  /**
   * Sports upsert
   */
  export type SportsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports
     */
    select?: SportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports
     */
    omit?: SportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsInclude<ExtArgs> | null
    /**
     * The filter to search for the Sports to update in case it exists.
     */
    where: SportsWhereUniqueInput
    /**
     * In case the Sports found by the `where` argument doesn't exist, create a new Sports with this data.
     */
    create: XOR<SportsCreateInput, SportsUncheckedCreateInput>
    /**
     * In case the Sports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SportsUpdateInput, SportsUncheckedUpdateInput>
  }

  /**
   * Sports delete
   */
  export type SportsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports
     */
    select?: SportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports
     */
    omit?: SportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsInclude<ExtArgs> | null
    /**
     * Filter which Sports to delete.
     */
    where: SportsWhereUniqueInput
  }

  /**
   * Sports deleteMany
   */
  export type SportsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sports to delete
     */
    where?: SportsWhereInput
    /**
     * Limit how many Sports to delete.
     */
    limit?: number
  }

  /**
   * Sports.categories
   */
  export type Sports$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    cursor?: categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Sports.AthleteParticipat
   */
  export type Sports$AthleteParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatInclude<ExtArgs> | null
    where?: AthleteParticipatWhereInput
    orderBy?: AthleteParticipatOrderByWithRelationInput | AthleteParticipatOrderByWithRelationInput[]
    cursor?: AthleteParticipatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AthleteParticipatScalarFieldEnum | AthleteParticipatScalarFieldEnum[]
  }

  /**
   * Sports.LeaderParticipat
   */
  export type Sports$LeaderParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderParticipat
     */
    select?: LeaderParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderParticipat
     */
    omit?: LeaderParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderParticipatInclude<ExtArgs> | null
    where?: LeaderParticipatWhereInput
    orderBy?: LeaderParticipatOrderByWithRelationInput | LeaderParticipatOrderByWithRelationInput[]
    cursor?: LeaderParticipatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaderParticipatScalarFieldEnum | LeaderParticipatScalarFieldEnum[]
  }

  /**
   * Sports.Sports_event_org
   */
  export type Sports$Sports_event_orgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports_event_org
     */
    select?: Sports_event_orgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports_event_org
     */
    omit?: Sports_event_orgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sports_event_orgInclude<ExtArgs> | null
    where?: Sports_event_orgWhereInput
    orderBy?: Sports_event_orgOrderByWithRelationInput | Sports_event_orgOrderByWithRelationInput[]
    cursor?: Sports_event_orgWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sports_event_orgScalarFieldEnum | Sports_event_orgScalarFieldEnum[]
  }

  /**
   * Sports without action
   */
  export type SportsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports
     */
    select?: SportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports
     */
    omit?: SportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    AthleteParticipat?: boolean | Organization$AthleteParticipatArgs<ExtArgs>
    LeaderParticipat?: boolean | Organization$LeaderParticipatArgs<ExtArgs>
    Sports_event_org?: boolean | Organization$Sports_event_orgArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AthleteParticipat?: boolean | Organization$AthleteParticipatArgs<ExtArgs>
    LeaderParticipat?: boolean | Organization$LeaderParticipatArgs<ExtArgs>
    Sports_event_org?: boolean | Organization$Sports_event_orgArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      AthleteParticipat: Prisma.$AthleteParticipatPayload<ExtArgs>[]
      LeaderParticipat: Prisma.$LeaderParticipatPayload<ExtArgs>[]
      Sports_event_org: Prisma.$Sports_event_orgPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AthleteParticipat<T extends Organization$AthleteParticipatArgs<ExtArgs> = {}>(args?: Subset<T, Organization$AthleteParticipatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LeaderParticipat<T extends Organization$LeaderParticipatArgs<ExtArgs> = {}>(args?: Subset<T, Organization$LeaderParticipatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderParticipatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Sports_event_org<T extends Organization$Sports_event_orgArgs<ExtArgs> = {}>(args?: Subset<T, Organization$Sports_event_orgArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sports_event_orgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'Int'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.AthleteParticipat
   */
  export type Organization$AthleteParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatInclude<ExtArgs> | null
    where?: AthleteParticipatWhereInput
    orderBy?: AthleteParticipatOrderByWithRelationInput | AthleteParticipatOrderByWithRelationInput[]
    cursor?: AthleteParticipatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AthleteParticipatScalarFieldEnum | AthleteParticipatScalarFieldEnum[]
  }

  /**
   * Organization.LeaderParticipat
   */
  export type Organization$LeaderParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderParticipat
     */
    select?: LeaderParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderParticipat
     */
    omit?: LeaderParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderParticipatInclude<ExtArgs> | null
    where?: LeaderParticipatWhereInput
    orderBy?: LeaderParticipatOrderByWithRelationInput | LeaderParticipatOrderByWithRelationInput[]
    cursor?: LeaderParticipatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaderParticipatScalarFieldEnum | LeaderParticipatScalarFieldEnum[]
  }

  /**
   * Organization.Sports_event_org
   */
  export type Organization$Sports_event_orgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports_event_org
     */
    select?: Sports_event_orgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports_event_org
     */
    omit?: Sports_event_orgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sports_event_orgInclude<ExtArgs> | null
    where?: Sports_event_orgWhereInput
    orderBy?: Sports_event_orgOrderByWithRelationInput | Sports_event_orgOrderByWithRelationInput[]
    cursor?: Sports_event_orgWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sports_event_orgScalarFieldEnum | Sports_event_orgScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
    events_id: number | null
    sportsID: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
    events_id: number | null
    sportsID: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    events_id: number | null
    sportsID: number | null
    category: string | null
    createdAt: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    events_id: number | null
    sportsID: number | null
    category: string | null
    createdAt: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    events_id: number
    sportsID: number
    category: number
    createdAt: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
    events_id?: true
    sportsID?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
    events_id?: true
    sportsID?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    events_id?: true
    sportsID?: true
    category?: true
    createdAt?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    events_id?: true
    sportsID?: true
    category?: true
    createdAt?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    events_id?: true
    sportsID?: true
    category?: true
    createdAt?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    events_id: number
    sportsID: number
    category: string
    createdAt: Date
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    events_id?: boolean
    sportsID?: boolean
    category?: boolean
    createdAt?: boolean
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    AthleteParticipat?: boolean | categories$AthleteParticipatArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    events_id?: boolean
    sportsID?: boolean
    category?: boolean
    createdAt?: boolean
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    events_id?: boolean
    sportsID?: boolean
    category?: boolean
    createdAt?: boolean
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    events_id?: boolean
    sportsID?: boolean
    category?: boolean
    createdAt?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "events_id" | "sportsID" | "category" | "createdAt", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    AthleteParticipat?: boolean | categories$AthleteParticipatArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
  }

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      events: Prisma.$EventsPayload<ExtArgs>
      sports: Prisma.$SportsPayload<ExtArgs>
      AthleteParticipat: Prisma.$AthleteParticipatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      events_id: number
      sportsID: number
      category: string
      createdAt: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends EventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventsDefaultArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sports<T extends SportsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportsDefaultArgs<ExtArgs>>): Prisma__SportsClient<$Result.GetResult<Prisma.$SportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    AthleteParticipat<T extends categories$AthleteParticipatArgs<ExtArgs> = {}>(args?: Subset<T, categories$AthleteParticipatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly events_id: FieldRef<"categories", 'Int'>
    readonly sportsID: FieldRef<"categories", 'Int'>
    readonly category: FieldRef<"categories", 'String'>
    readonly createdAt: FieldRef<"categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.AthleteParticipat
   */
  export type categories$AthleteParticipatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatInclude<ExtArgs> | null
    where?: AthleteParticipatWhereInput
    orderBy?: AthleteParticipatOrderByWithRelationInput | AthleteParticipatOrderByWithRelationInput[]
    cursor?: AthleteParticipatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AthleteParticipatScalarFieldEnum | AthleteParticipatScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model Sports_event_org
   */

  export type AggregateSports_event_org = {
    _count: Sports_event_orgCountAggregateOutputType | null
    _avg: Sports_event_orgAvgAggregateOutputType | null
    _sum: Sports_event_orgSumAggregateOutputType | null
    _min: Sports_event_orgMinAggregateOutputType | null
    _max: Sports_event_orgMaxAggregateOutputType | null
  }

  export type Sports_event_orgAvgAggregateOutputType = {
    id: number | null
    events_id: number | null
    sports_id: number | null
    organization_id: number | null
  }

  export type Sports_event_orgSumAggregateOutputType = {
    id: number | null
    events_id: number | null
    sports_id: number | null
    organization_id: number | null
  }

  export type Sports_event_orgMinAggregateOutputType = {
    id: number | null
    events_id: number | null
    sports_id: number | null
    organization_id: number | null
    createdAt: Date | null
  }

  export type Sports_event_orgMaxAggregateOutputType = {
    id: number | null
    events_id: number | null
    sports_id: number | null
    organization_id: number | null
    createdAt: Date | null
  }

  export type Sports_event_orgCountAggregateOutputType = {
    id: number
    events_id: number
    sports_id: number
    organization_id: number
    createdAt: number
    _all: number
  }


  export type Sports_event_orgAvgAggregateInputType = {
    id?: true
    events_id?: true
    sports_id?: true
    organization_id?: true
  }

  export type Sports_event_orgSumAggregateInputType = {
    id?: true
    events_id?: true
    sports_id?: true
    organization_id?: true
  }

  export type Sports_event_orgMinAggregateInputType = {
    id?: true
    events_id?: true
    sports_id?: true
    organization_id?: true
    createdAt?: true
  }

  export type Sports_event_orgMaxAggregateInputType = {
    id?: true
    events_id?: true
    sports_id?: true
    organization_id?: true
    createdAt?: true
  }

  export type Sports_event_orgCountAggregateInputType = {
    id?: true
    events_id?: true
    sports_id?: true
    organization_id?: true
    createdAt?: true
    _all?: true
  }

  export type Sports_event_orgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sports_event_org to aggregate.
     */
    where?: Sports_event_orgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports_event_orgs to fetch.
     */
    orderBy?: Sports_event_orgOrderByWithRelationInput | Sports_event_orgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Sports_event_orgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports_event_orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports_event_orgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sports_event_orgs
    **/
    _count?: true | Sports_event_orgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sports_event_orgAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sports_event_orgSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sports_event_orgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sports_event_orgMaxAggregateInputType
  }

  export type GetSports_event_orgAggregateType<T extends Sports_event_orgAggregateArgs> = {
        [P in keyof T & keyof AggregateSports_event_org]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSports_event_org[P]>
      : GetScalarType<T[P], AggregateSports_event_org[P]>
  }




  export type Sports_event_orgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sports_event_orgWhereInput
    orderBy?: Sports_event_orgOrderByWithAggregationInput | Sports_event_orgOrderByWithAggregationInput[]
    by: Sports_event_orgScalarFieldEnum[] | Sports_event_orgScalarFieldEnum
    having?: Sports_event_orgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sports_event_orgCountAggregateInputType | true
    _avg?: Sports_event_orgAvgAggregateInputType
    _sum?: Sports_event_orgSumAggregateInputType
    _min?: Sports_event_orgMinAggregateInputType
    _max?: Sports_event_orgMaxAggregateInputType
  }

  export type Sports_event_orgGroupByOutputType = {
    id: number
    events_id: number
    sports_id: number
    organization_id: number
    createdAt: Date
    _count: Sports_event_orgCountAggregateOutputType | null
    _avg: Sports_event_orgAvgAggregateOutputType | null
    _sum: Sports_event_orgSumAggregateOutputType | null
    _min: Sports_event_orgMinAggregateOutputType | null
    _max: Sports_event_orgMaxAggregateOutputType | null
  }

  type GetSports_event_orgGroupByPayload<T extends Sports_event_orgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sports_event_orgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sports_event_orgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sports_event_orgGroupByOutputType[P]>
            : GetScalarType<T[P], Sports_event_orgGroupByOutputType[P]>
        }
      >
    >


  export type Sports_event_orgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    events_id?: boolean
    sports_id?: boolean
    organization_id?: boolean
    createdAt?: boolean
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sports_event_org"]>

  export type Sports_event_orgSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    events_id?: boolean
    sports_id?: boolean
    organization_id?: boolean
    createdAt?: boolean
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sports_event_org"]>

  export type Sports_event_orgSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    events_id?: boolean
    sports_id?: boolean
    organization_id?: boolean
    createdAt?: boolean
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sports_event_org"]>

  export type Sports_event_orgSelectScalar = {
    id?: boolean
    events_id?: boolean
    sports_id?: boolean
    organization_id?: boolean
    createdAt?: boolean
  }

  export type Sports_event_orgOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "events_id" | "sports_id" | "organization_id" | "createdAt", ExtArgs["result"]["sports_event_org"]>
  export type Sports_event_orgInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type Sports_event_orgIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type Sports_event_orgIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $Sports_event_orgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sports_event_org"
    objects: {
      events: Prisma.$EventsPayload<ExtArgs>
      sports: Prisma.$SportsPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      events_id: number
      sports_id: number
      organization_id: number
      createdAt: Date
    }, ExtArgs["result"]["sports_event_org"]>
    composites: {}
  }

  type Sports_event_orgGetPayload<S extends boolean | null | undefined | Sports_event_orgDefaultArgs> = $Result.GetResult<Prisma.$Sports_event_orgPayload, S>

  type Sports_event_orgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Sports_event_orgFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sports_event_orgCountAggregateInputType | true
    }

  export interface Sports_event_orgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sports_event_org'], meta: { name: 'Sports_event_org' } }
    /**
     * Find zero or one Sports_event_org that matches the filter.
     * @param {Sports_event_orgFindUniqueArgs} args - Arguments to find a Sports_event_org
     * @example
     * // Get one Sports_event_org
     * const sports_event_org = await prisma.sports_event_org.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Sports_event_orgFindUniqueArgs>(args: SelectSubset<T, Sports_event_orgFindUniqueArgs<ExtArgs>>): Prisma__Sports_event_orgClient<$Result.GetResult<Prisma.$Sports_event_orgPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sports_event_org that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Sports_event_orgFindUniqueOrThrowArgs} args - Arguments to find a Sports_event_org
     * @example
     * // Get one Sports_event_org
     * const sports_event_org = await prisma.sports_event_org.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Sports_event_orgFindUniqueOrThrowArgs>(args: SelectSubset<T, Sports_event_orgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Sports_event_orgClient<$Result.GetResult<Prisma.$Sports_event_orgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sports_event_org that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sports_event_orgFindFirstArgs} args - Arguments to find a Sports_event_org
     * @example
     * // Get one Sports_event_org
     * const sports_event_org = await prisma.sports_event_org.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Sports_event_orgFindFirstArgs>(args?: SelectSubset<T, Sports_event_orgFindFirstArgs<ExtArgs>>): Prisma__Sports_event_orgClient<$Result.GetResult<Prisma.$Sports_event_orgPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sports_event_org that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sports_event_orgFindFirstOrThrowArgs} args - Arguments to find a Sports_event_org
     * @example
     * // Get one Sports_event_org
     * const sports_event_org = await prisma.sports_event_org.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Sports_event_orgFindFirstOrThrowArgs>(args?: SelectSubset<T, Sports_event_orgFindFirstOrThrowArgs<ExtArgs>>): Prisma__Sports_event_orgClient<$Result.GetResult<Prisma.$Sports_event_orgPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sports_event_orgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sports_event_orgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sports_event_orgs
     * const sports_event_orgs = await prisma.sports_event_org.findMany()
     * 
     * // Get first 10 Sports_event_orgs
     * const sports_event_orgs = await prisma.sports_event_org.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sports_event_orgWithIdOnly = await prisma.sports_event_org.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Sports_event_orgFindManyArgs>(args?: SelectSubset<T, Sports_event_orgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sports_event_orgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sports_event_org.
     * @param {Sports_event_orgCreateArgs} args - Arguments to create a Sports_event_org.
     * @example
     * // Create one Sports_event_org
     * const Sports_event_org = await prisma.sports_event_org.create({
     *   data: {
     *     // ... data to create a Sports_event_org
     *   }
     * })
     * 
     */
    create<T extends Sports_event_orgCreateArgs>(args: SelectSubset<T, Sports_event_orgCreateArgs<ExtArgs>>): Prisma__Sports_event_orgClient<$Result.GetResult<Prisma.$Sports_event_orgPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sports_event_orgs.
     * @param {Sports_event_orgCreateManyArgs} args - Arguments to create many Sports_event_orgs.
     * @example
     * // Create many Sports_event_orgs
     * const sports_event_org = await prisma.sports_event_org.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Sports_event_orgCreateManyArgs>(args?: SelectSubset<T, Sports_event_orgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sports_event_orgs and returns the data saved in the database.
     * @param {Sports_event_orgCreateManyAndReturnArgs} args - Arguments to create many Sports_event_orgs.
     * @example
     * // Create many Sports_event_orgs
     * const sports_event_org = await prisma.sports_event_org.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sports_event_orgs and only return the `id`
     * const sports_event_orgWithIdOnly = await prisma.sports_event_org.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Sports_event_orgCreateManyAndReturnArgs>(args?: SelectSubset<T, Sports_event_orgCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sports_event_orgPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sports_event_org.
     * @param {Sports_event_orgDeleteArgs} args - Arguments to delete one Sports_event_org.
     * @example
     * // Delete one Sports_event_org
     * const Sports_event_org = await prisma.sports_event_org.delete({
     *   where: {
     *     // ... filter to delete one Sports_event_org
     *   }
     * })
     * 
     */
    delete<T extends Sports_event_orgDeleteArgs>(args: SelectSubset<T, Sports_event_orgDeleteArgs<ExtArgs>>): Prisma__Sports_event_orgClient<$Result.GetResult<Prisma.$Sports_event_orgPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sports_event_org.
     * @param {Sports_event_orgUpdateArgs} args - Arguments to update one Sports_event_org.
     * @example
     * // Update one Sports_event_org
     * const sports_event_org = await prisma.sports_event_org.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Sports_event_orgUpdateArgs>(args: SelectSubset<T, Sports_event_orgUpdateArgs<ExtArgs>>): Prisma__Sports_event_orgClient<$Result.GetResult<Prisma.$Sports_event_orgPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sports_event_orgs.
     * @param {Sports_event_orgDeleteManyArgs} args - Arguments to filter Sports_event_orgs to delete.
     * @example
     * // Delete a few Sports_event_orgs
     * const { count } = await prisma.sports_event_org.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Sports_event_orgDeleteManyArgs>(args?: SelectSubset<T, Sports_event_orgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports_event_orgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sports_event_orgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sports_event_orgs
     * const sports_event_org = await prisma.sports_event_org.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Sports_event_orgUpdateManyArgs>(args: SelectSubset<T, Sports_event_orgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports_event_orgs and returns the data updated in the database.
     * @param {Sports_event_orgUpdateManyAndReturnArgs} args - Arguments to update many Sports_event_orgs.
     * @example
     * // Update many Sports_event_orgs
     * const sports_event_org = await prisma.sports_event_org.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sports_event_orgs and only return the `id`
     * const sports_event_orgWithIdOnly = await prisma.sports_event_org.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Sports_event_orgUpdateManyAndReturnArgs>(args: SelectSubset<T, Sports_event_orgUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sports_event_orgPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sports_event_org.
     * @param {Sports_event_orgUpsertArgs} args - Arguments to update or create a Sports_event_org.
     * @example
     * // Update or create a Sports_event_org
     * const sports_event_org = await prisma.sports_event_org.upsert({
     *   create: {
     *     // ... data to create a Sports_event_org
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sports_event_org we want to update
     *   }
     * })
     */
    upsert<T extends Sports_event_orgUpsertArgs>(args: SelectSubset<T, Sports_event_orgUpsertArgs<ExtArgs>>): Prisma__Sports_event_orgClient<$Result.GetResult<Prisma.$Sports_event_orgPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sports_event_orgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sports_event_orgCountArgs} args - Arguments to filter Sports_event_orgs to count.
     * @example
     * // Count the number of Sports_event_orgs
     * const count = await prisma.sports_event_org.count({
     *   where: {
     *     // ... the filter for the Sports_event_orgs we want to count
     *   }
     * })
    **/
    count<T extends Sports_event_orgCountArgs>(
      args?: Subset<T, Sports_event_orgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sports_event_orgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sports_event_org.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sports_event_orgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sports_event_orgAggregateArgs>(args: Subset<T, Sports_event_orgAggregateArgs>): Prisma.PrismaPromise<GetSports_event_orgAggregateType<T>>

    /**
     * Group by Sports_event_org.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sports_event_orgGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Sports_event_orgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Sports_event_orgGroupByArgs['orderBy'] }
        : { orderBy?: Sports_event_orgGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Sports_event_orgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSports_event_orgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sports_event_org model
   */
  readonly fields: Sports_event_orgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sports_event_org.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Sports_event_orgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends EventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventsDefaultArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sports<T extends SportsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportsDefaultArgs<ExtArgs>>): Prisma__SportsClient<$Result.GetResult<Prisma.$SportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sports_event_org model
   */
  interface Sports_event_orgFieldRefs {
    readonly id: FieldRef<"Sports_event_org", 'Int'>
    readonly events_id: FieldRef<"Sports_event_org", 'Int'>
    readonly sports_id: FieldRef<"Sports_event_org", 'Int'>
    readonly organization_id: FieldRef<"Sports_event_org", 'Int'>
    readonly createdAt: FieldRef<"Sports_event_org", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sports_event_org findUnique
   */
  export type Sports_event_orgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports_event_org
     */
    select?: Sports_event_orgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports_event_org
     */
    omit?: Sports_event_orgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sports_event_orgInclude<ExtArgs> | null
    /**
     * Filter, which Sports_event_org to fetch.
     */
    where: Sports_event_orgWhereUniqueInput
  }

  /**
   * Sports_event_org findUniqueOrThrow
   */
  export type Sports_event_orgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports_event_org
     */
    select?: Sports_event_orgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports_event_org
     */
    omit?: Sports_event_orgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sports_event_orgInclude<ExtArgs> | null
    /**
     * Filter, which Sports_event_org to fetch.
     */
    where: Sports_event_orgWhereUniqueInput
  }

  /**
   * Sports_event_org findFirst
   */
  export type Sports_event_orgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports_event_org
     */
    select?: Sports_event_orgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports_event_org
     */
    omit?: Sports_event_orgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sports_event_orgInclude<ExtArgs> | null
    /**
     * Filter, which Sports_event_org to fetch.
     */
    where?: Sports_event_orgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports_event_orgs to fetch.
     */
    orderBy?: Sports_event_orgOrderByWithRelationInput | Sports_event_orgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports_event_orgs.
     */
    cursor?: Sports_event_orgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports_event_orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports_event_orgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports_event_orgs.
     */
    distinct?: Sports_event_orgScalarFieldEnum | Sports_event_orgScalarFieldEnum[]
  }

  /**
   * Sports_event_org findFirstOrThrow
   */
  export type Sports_event_orgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports_event_org
     */
    select?: Sports_event_orgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports_event_org
     */
    omit?: Sports_event_orgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sports_event_orgInclude<ExtArgs> | null
    /**
     * Filter, which Sports_event_org to fetch.
     */
    where?: Sports_event_orgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports_event_orgs to fetch.
     */
    orderBy?: Sports_event_orgOrderByWithRelationInput | Sports_event_orgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports_event_orgs.
     */
    cursor?: Sports_event_orgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports_event_orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports_event_orgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports_event_orgs.
     */
    distinct?: Sports_event_orgScalarFieldEnum | Sports_event_orgScalarFieldEnum[]
  }

  /**
   * Sports_event_org findMany
   */
  export type Sports_event_orgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports_event_org
     */
    select?: Sports_event_orgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports_event_org
     */
    omit?: Sports_event_orgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sports_event_orgInclude<ExtArgs> | null
    /**
     * Filter, which Sports_event_orgs to fetch.
     */
    where?: Sports_event_orgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports_event_orgs to fetch.
     */
    orderBy?: Sports_event_orgOrderByWithRelationInput | Sports_event_orgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sports_event_orgs.
     */
    cursor?: Sports_event_orgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports_event_orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports_event_orgs.
     */
    skip?: number
    distinct?: Sports_event_orgScalarFieldEnum | Sports_event_orgScalarFieldEnum[]
  }

  /**
   * Sports_event_org create
   */
  export type Sports_event_orgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports_event_org
     */
    select?: Sports_event_orgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports_event_org
     */
    omit?: Sports_event_orgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sports_event_orgInclude<ExtArgs> | null
    /**
     * The data needed to create a Sports_event_org.
     */
    data: XOR<Sports_event_orgCreateInput, Sports_event_orgUncheckedCreateInput>
  }

  /**
   * Sports_event_org createMany
   */
  export type Sports_event_orgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sports_event_orgs.
     */
    data: Sports_event_orgCreateManyInput | Sports_event_orgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sports_event_org createManyAndReturn
   */
  export type Sports_event_orgCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports_event_org
     */
    select?: Sports_event_orgSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sports_event_org
     */
    omit?: Sports_event_orgOmit<ExtArgs> | null
    /**
     * The data used to create many Sports_event_orgs.
     */
    data: Sports_event_orgCreateManyInput | Sports_event_orgCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sports_event_orgIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sports_event_org update
   */
  export type Sports_event_orgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports_event_org
     */
    select?: Sports_event_orgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports_event_org
     */
    omit?: Sports_event_orgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sports_event_orgInclude<ExtArgs> | null
    /**
     * The data needed to update a Sports_event_org.
     */
    data: XOR<Sports_event_orgUpdateInput, Sports_event_orgUncheckedUpdateInput>
    /**
     * Choose, which Sports_event_org to update.
     */
    where: Sports_event_orgWhereUniqueInput
  }

  /**
   * Sports_event_org updateMany
   */
  export type Sports_event_orgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sports_event_orgs.
     */
    data: XOR<Sports_event_orgUpdateManyMutationInput, Sports_event_orgUncheckedUpdateManyInput>
    /**
     * Filter which Sports_event_orgs to update
     */
    where?: Sports_event_orgWhereInput
    /**
     * Limit how many Sports_event_orgs to update.
     */
    limit?: number
  }

  /**
   * Sports_event_org updateManyAndReturn
   */
  export type Sports_event_orgUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports_event_org
     */
    select?: Sports_event_orgSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sports_event_org
     */
    omit?: Sports_event_orgOmit<ExtArgs> | null
    /**
     * The data used to update Sports_event_orgs.
     */
    data: XOR<Sports_event_orgUpdateManyMutationInput, Sports_event_orgUncheckedUpdateManyInput>
    /**
     * Filter which Sports_event_orgs to update
     */
    where?: Sports_event_orgWhereInput
    /**
     * Limit how many Sports_event_orgs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sports_event_orgIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sports_event_org upsert
   */
  export type Sports_event_orgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports_event_org
     */
    select?: Sports_event_orgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports_event_org
     */
    omit?: Sports_event_orgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sports_event_orgInclude<ExtArgs> | null
    /**
     * The filter to search for the Sports_event_org to update in case it exists.
     */
    where: Sports_event_orgWhereUniqueInput
    /**
     * In case the Sports_event_org found by the `where` argument doesn't exist, create a new Sports_event_org with this data.
     */
    create: XOR<Sports_event_orgCreateInput, Sports_event_orgUncheckedCreateInput>
    /**
     * In case the Sports_event_org was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Sports_event_orgUpdateInput, Sports_event_orgUncheckedUpdateInput>
  }

  /**
   * Sports_event_org delete
   */
  export type Sports_event_orgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports_event_org
     */
    select?: Sports_event_orgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports_event_org
     */
    omit?: Sports_event_orgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sports_event_orgInclude<ExtArgs> | null
    /**
     * Filter which Sports_event_org to delete.
     */
    where: Sports_event_orgWhereUniqueInput
  }

  /**
   * Sports_event_org deleteMany
   */
  export type Sports_event_orgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sports_event_orgs to delete
     */
    where?: Sports_event_orgWhereInput
    /**
     * Limit how many Sports_event_orgs to delete.
     */
    limit?: number
  }

  /**
   * Sports_event_org without action
   */
  export type Sports_event_orgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sports_event_org
     */
    select?: Sports_event_orgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sports_event_org
     */
    omit?: Sports_event_orgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sports_event_orgInclude<ExtArgs> | null
  }


  /**
   * Model AthleteParticipat
   */

  export type AggregateAthleteParticipat = {
    _count: AthleteParticipatCountAggregateOutputType | null
    _avg: AthleteParticipatAvgAggregateOutputType | null
    _sum: AthleteParticipatSumAggregateOutputType | null
    _min: AthleteParticipatMinAggregateOutputType | null
    _max: AthleteParticipatMaxAggregateOutputType | null
  }

  export type AthleteParticipatAvgAggregateOutputType = {
    id: number | null
    athletesID: number | null
    eventsID: number | null
    categoriesID: number | null
    sportsID: number | null
    organizationID: number | null
  }

  export type AthleteParticipatSumAggregateOutputType = {
    id: number | null
    athletesID: number | null
    eventsID: number | null
    categoriesID: number | null
    sportsID: number | null
    organizationID: number | null
  }

  export type AthleteParticipatMinAggregateOutputType = {
    id: number | null
    athletesID: number | null
    eventsID: number | null
    categoriesID: number | null
    sportsID: number | null
    organizationID: number | null
    createdAt: Date | null
  }

  export type AthleteParticipatMaxAggregateOutputType = {
    id: number | null
    athletesID: number | null
    eventsID: number | null
    categoriesID: number | null
    sportsID: number | null
    organizationID: number | null
    createdAt: Date | null
  }

  export type AthleteParticipatCountAggregateOutputType = {
    id: number
    athletesID: number
    eventsID: number
    categoriesID: number
    sportsID: number
    organizationID: number
    createdAt: number
    _all: number
  }


  export type AthleteParticipatAvgAggregateInputType = {
    id?: true
    athletesID?: true
    eventsID?: true
    categoriesID?: true
    sportsID?: true
    organizationID?: true
  }

  export type AthleteParticipatSumAggregateInputType = {
    id?: true
    athletesID?: true
    eventsID?: true
    categoriesID?: true
    sportsID?: true
    organizationID?: true
  }

  export type AthleteParticipatMinAggregateInputType = {
    id?: true
    athletesID?: true
    eventsID?: true
    categoriesID?: true
    sportsID?: true
    organizationID?: true
    createdAt?: true
  }

  export type AthleteParticipatMaxAggregateInputType = {
    id?: true
    athletesID?: true
    eventsID?: true
    categoriesID?: true
    sportsID?: true
    organizationID?: true
    createdAt?: true
  }

  export type AthleteParticipatCountAggregateInputType = {
    id?: true
    athletesID?: true
    eventsID?: true
    categoriesID?: true
    sportsID?: true
    organizationID?: true
    createdAt?: true
    _all?: true
  }

  export type AthleteParticipatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AthleteParticipat to aggregate.
     */
    where?: AthleteParticipatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AthleteParticipats to fetch.
     */
    orderBy?: AthleteParticipatOrderByWithRelationInput | AthleteParticipatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AthleteParticipatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AthleteParticipats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AthleteParticipats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AthleteParticipats
    **/
    _count?: true | AthleteParticipatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AthleteParticipatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AthleteParticipatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AthleteParticipatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AthleteParticipatMaxAggregateInputType
  }

  export type GetAthleteParticipatAggregateType<T extends AthleteParticipatAggregateArgs> = {
        [P in keyof T & keyof AggregateAthleteParticipat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAthleteParticipat[P]>
      : GetScalarType<T[P], AggregateAthleteParticipat[P]>
  }




  export type AthleteParticipatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AthleteParticipatWhereInput
    orderBy?: AthleteParticipatOrderByWithAggregationInput | AthleteParticipatOrderByWithAggregationInput[]
    by: AthleteParticipatScalarFieldEnum[] | AthleteParticipatScalarFieldEnum
    having?: AthleteParticipatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AthleteParticipatCountAggregateInputType | true
    _avg?: AthleteParticipatAvgAggregateInputType
    _sum?: AthleteParticipatSumAggregateInputType
    _min?: AthleteParticipatMinAggregateInputType
    _max?: AthleteParticipatMaxAggregateInputType
  }

  export type AthleteParticipatGroupByOutputType = {
    id: number
    athletesID: number
    eventsID: number
    categoriesID: number
    sportsID: number
    organizationID: number
    createdAt: Date
    _count: AthleteParticipatCountAggregateOutputType | null
    _avg: AthleteParticipatAvgAggregateOutputType | null
    _sum: AthleteParticipatSumAggregateOutputType | null
    _min: AthleteParticipatMinAggregateOutputType | null
    _max: AthleteParticipatMaxAggregateOutputType | null
  }

  type GetAthleteParticipatGroupByPayload<T extends AthleteParticipatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AthleteParticipatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AthleteParticipatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AthleteParticipatGroupByOutputType[P]>
            : GetScalarType<T[P], AthleteParticipatGroupByOutputType[P]>
        }
      >
    >


  export type AthleteParticipatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athletesID?: boolean
    eventsID?: boolean
    categoriesID?: boolean
    sportsID?: boolean
    organizationID?: boolean
    createdAt?: boolean
    athletes?: boolean | AthletesDefaultArgs<ExtArgs>
    events?: boolean | EventsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    Medals?: boolean | AthleteParticipat$MedalsArgs<ExtArgs>
    _count?: boolean | AthleteParticipatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athleteParticipat"]>

  export type AthleteParticipatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athletesID?: boolean
    eventsID?: boolean
    categoriesID?: boolean
    sportsID?: boolean
    organizationID?: boolean
    createdAt?: boolean
    athletes?: boolean | AthletesDefaultArgs<ExtArgs>
    events?: boolean | EventsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athleteParticipat"]>

  export type AthleteParticipatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athletesID?: boolean
    eventsID?: boolean
    categoriesID?: boolean
    sportsID?: boolean
    organizationID?: boolean
    createdAt?: boolean
    athletes?: boolean | AthletesDefaultArgs<ExtArgs>
    events?: boolean | EventsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athleteParticipat"]>

  export type AthleteParticipatSelectScalar = {
    id?: boolean
    athletesID?: boolean
    eventsID?: boolean
    categoriesID?: boolean
    sportsID?: boolean
    organizationID?: boolean
    createdAt?: boolean
  }

  export type AthleteParticipatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "athletesID" | "eventsID" | "categoriesID" | "sportsID" | "organizationID" | "createdAt", ExtArgs["result"]["athleteParticipat"]>
  export type AthleteParticipatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athletes?: boolean | AthletesDefaultArgs<ExtArgs>
    events?: boolean | EventsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    Medals?: boolean | AthleteParticipat$MedalsArgs<ExtArgs>
    _count?: boolean | AthleteParticipatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AthleteParticipatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athletes?: boolean | AthletesDefaultArgs<ExtArgs>
    events?: boolean | EventsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type AthleteParticipatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athletes?: boolean | AthletesDefaultArgs<ExtArgs>
    events?: boolean | EventsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $AthleteParticipatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AthleteParticipat"
    objects: {
      athletes: Prisma.$AthletesPayload<ExtArgs>
      events: Prisma.$EventsPayload<ExtArgs>
      categories: Prisma.$categoriesPayload<ExtArgs>
      sports: Prisma.$SportsPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
      Medals: Prisma.$MedalsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      athletesID: number
      eventsID: number
      categoriesID: number
      sportsID: number
      organizationID: number
      createdAt: Date
    }, ExtArgs["result"]["athleteParticipat"]>
    composites: {}
  }

  type AthleteParticipatGetPayload<S extends boolean | null | undefined | AthleteParticipatDefaultArgs> = $Result.GetResult<Prisma.$AthleteParticipatPayload, S>

  type AthleteParticipatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AthleteParticipatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AthleteParticipatCountAggregateInputType | true
    }

  export interface AthleteParticipatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AthleteParticipat'], meta: { name: 'AthleteParticipat' } }
    /**
     * Find zero or one AthleteParticipat that matches the filter.
     * @param {AthleteParticipatFindUniqueArgs} args - Arguments to find a AthleteParticipat
     * @example
     * // Get one AthleteParticipat
     * const athleteParticipat = await prisma.athleteParticipat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AthleteParticipatFindUniqueArgs>(args: SelectSubset<T, AthleteParticipatFindUniqueArgs<ExtArgs>>): Prisma__AthleteParticipatClient<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AthleteParticipat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AthleteParticipatFindUniqueOrThrowArgs} args - Arguments to find a AthleteParticipat
     * @example
     * // Get one AthleteParticipat
     * const athleteParticipat = await prisma.athleteParticipat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AthleteParticipatFindUniqueOrThrowArgs>(args: SelectSubset<T, AthleteParticipatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AthleteParticipatClient<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AthleteParticipat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteParticipatFindFirstArgs} args - Arguments to find a AthleteParticipat
     * @example
     * // Get one AthleteParticipat
     * const athleteParticipat = await prisma.athleteParticipat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AthleteParticipatFindFirstArgs>(args?: SelectSubset<T, AthleteParticipatFindFirstArgs<ExtArgs>>): Prisma__AthleteParticipatClient<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AthleteParticipat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteParticipatFindFirstOrThrowArgs} args - Arguments to find a AthleteParticipat
     * @example
     * // Get one AthleteParticipat
     * const athleteParticipat = await prisma.athleteParticipat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AthleteParticipatFindFirstOrThrowArgs>(args?: SelectSubset<T, AthleteParticipatFindFirstOrThrowArgs<ExtArgs>>): Prisma__AthleteParticipatClient<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AthleteParticipats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteParticipatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AthleteParticipats
     * const athleteParticipats = await prisma.athleteParticipat.findMany()
     * 
     * // Get first 10 AthleteParticipats
     * const athleteParticipats = await prisma.athleteParticipat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const athleteParticipatWithIdOnly = await prisma.athleteParticipat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AthleteParticipatFindManyArgs>(args?: SelectSubset<T, AthleteParticipatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AthleteParticipat.
     * @param {AthleteParticipatCreateArgs} args - Arguments to create a AthleteParticipat.
     * @example
     * // Create one AthleteParticipat
     * const AthleteParticipat = await prisma.athleteParticipat.create({
     *   data: {
     *     // ... data to create a AthleteParticipat
     *   }
     * })
     * 
     */
    create<T extends AthleteParticipatCreateArgs>(args: SelectSubset<T, AthleteParticipatCreateArgs<ExtArgs>>): Prisma__AthleteParticipatClient<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AthleteParticipats.
     * @param {AthleteParticipatCreateManyArgs} args - Arguments to create many AthleteParticipats.
     * @example
     * // Create many AthleteParticipats
     * const athleteParticipat = await prisma.athleteParticipat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AthleteParticipatCreateManyArgs>(args?: SelectSubset<T, AthleteParticipatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AthleteParticipats and returns the data saved in the database.
     * @param {AthleteParticipatCreateManyAndReturnArgs} args - Arguments to create many AthleteParticipats.
     * @example
     * // Create many AthleteParticipats
     * const athleteParticipat = await prisma.athleteParticipat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AthleteParticipats and only return the `id`
     * const athleteParticipatWithIdOnly = await prisma.athleteParticipat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AthleteParticipatCreateManyAndReturnArgs>(args?: SelectSubset<T, AthleteParticipatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AthleteParticipat.
     * @param {AthleteParticipatDeleteArgs} args - Arguments to delete one AthleteParticipat.
     * @example
     * // Delete one AthleteParticipat
     * const AthleteParticipat = await prisma.athleteParticipat.delete({
     *   where: {
     *     // ... filter to delete one AthleteParticipat
     *   }
     * })
     * 
     */
    delete<T extends AthleteParticipatDeleteArgs>(args: SelectSubset<T, AthleteParticipatDeleteArgs<ExtArgs>>): Prisma__AthleteParticipatClient<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AthleteParticipat.
     * @param {AthleteParticipatUpdateArgs} args - Arguments to update one AthleteParticipat.
     * @example
     * // Update one AthleteParticipat
     * const athleteParticipat = await prisma.athleteParticipat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AthleteParticipatUpdateArgs>(args: SelectSubset<T, AthleteParticipatUpdateArgs<ExtArgs>>): Prisma__AthleteParticipatClient<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AthleteParticipats.
     * @param {AthleteParticipatDeleteManyArgs} args - Arguments to filter AthleteParticipats to delete.
     * @example
     * // Delete a few AthleteParticipats
     * const { count } = await prisma.athleteParticipat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AthleteParticipatDeleteManyArgs>(args?: SelectSubset<T, AthleteParticipatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AthleteParticipats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteParticipatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AthleteParticipats
     * const athleteParticipat = await prisma.athleteParticipat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AthleteParticipatUpdateManyArgs>(args: SelectSubset<T, AthleteParticipatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AthleteParticipats and returns the data updated in the database.
     * @param {AthleteParticipatUpdateManyAndReturnArgs} args - Arguments to update many AthleteParticipats.
     * @example
     * // Update many AthleteParticipats
     * const athleteParticipat = await prisma.athleteParticipat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AthleteParticipats and only return the `id`
     * const athleteParticipatWithIdOnly = await prisma.athleteParticipat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AthleteParticipatUpdateManyAndReturnArgs>(args: SelectSubset<T, AthleteParticipatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AthleteParticipat.
     * @param {AthleteParticipatUpsertArgs} args - Arguments to update or create a AthleteParticipat.
     * @example
     * // Update or create a AthleteParticipat
     * const athleteParticipat = await prisma.athleteParticipat.upsert({
     *   create: {
     *     // ... data to create a AthleteParticipat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AthleteParticipat we want to update
     *   }
     * })
     */
    upsert<T extends AthleteParticipatUpsertArgs>(args: SelectSubset<T, AthleteParticipatUpsertArgs<ExtArgs>>): Prisma__AthleteParticipatClient<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AthleteParticipats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteParticipatCountArgs} args - Arguments to filter AthleteParticipats to count.
     * @example
     * // Count the number of AthleteParticipats
     * const count = await prisma.athleteParticipat.count({
     *   where: {
     *     // ... the filter for the AthleteParticipats we want to count
     *   }
     * })
    **/
    count<T extends AthleteParticipatCountArgs>(
      args?: Subset<T, AthleteParticipatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AthleteParticipatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AthleteParticipat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteParticipatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AthleteParticipatAggregateArgs>(args: Subset<T, AthleteParticipatAggregateArgs>): Prisma.PrismaPromise<GetAthleteParticipatAggregateType<T>>

    /**
     * Group by AthleteParticipat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteParticipatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AthleteParticipatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AthleteParticipatGroupByArgs['orderBy'] }
        : { orderBy?: AthleteParticipatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AthleteParticipatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAthleteParticipatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AthleteParticipat model
   */
  readonly fields: AthleteParticipatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AthleteParticipat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AthleteParticipatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    athletes<T extends AthletesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AthletesDefaultArgs<ExtArgs>>): Prisma__AthletesClient<$Result.GetResult<Prisma.$AthletesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends EventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventsDefaultArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sports<T extends SportsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportsDefaultArgs<ExtArgs>>): Prisma__SportsClient<$Result.GetResult<Prisma.$SportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Medals<T extends AthleteParticipat$MedalsArgs<ExtArgs> = {}>(args?: Subset<T, AthleteParticipat$MedalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AthleteParticipat model
   */
  interface AthleteParticipatFieldRefs {
    readonly id: FieldRef<"AthleteParticipat", 'Int'>
    readonly athletesID: FieldRef<"AthleteParticipat", 'Int'>
    readonly eventsID: FieldRef<"AthleteParticipat", 'Int'>
    readonly categoriesID: FieldRef<"AthleteParticipat", 'Int'>
    readonly sportsID: FieldRef<"AthleteParticipat", 'Int'>
    readonly organizationID: FieldRef<"AthleteParticipat", 'Int'>
    readonly createdAt: FieldRef<"AthleteParticipat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AthleteParticipat findUnique
   */
  export type AthleteParticipatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatInclude<ExtArgs> | null
    /**
     * Filter, which AthleteParticipat to fetch.
     */
    where: AthleteParticipatWhereUniqueInput
  }

  /**
   * AthleteParticipat findUniqueOrThrow
   */
  export type AthleteParticipatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatInclude<ExtArgs> | null
    /**
     * Filter, which AthleteParticipat to fetch.
     */
    where: AthleteParticipatWhereUniqueInput
  }

  /**
   * AthleteParticipat findFirst
   */
  export type AthleteParticipatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatInclude<ExtArgs> | null
    /**
     * Filter, which AthleteParticipat to fetch.
     */
    where?: AthleteParticipatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AthleteParticipats to fetch.
     */
    orderBy?: AthleteParticipatOrderByWithRelationInput | AthleteParticipatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AthleteParticipats.
     */
    cursor?: AthleteParticipatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AthleteParticipats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AthleteParticipats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AthleteParticipats.
     */
    distinct?: AthleteParticipatScalarFieldEnum | AthleteParticipatScalarFieldEnum[]
  }

  /**
   * AthleteParticipat findFirstOrThrow
   */
  export type AthleteParticipatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatInclude<ExtArgs> | null
    /**
     * Filter, which AthleteParticipat to fetch.
     */
    where?: AthleteParticipatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AthleteParticipats to fetch.
     */
    orderBy?: AthleteParticipatOrderByWithRelationInput | AthleteParticipatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AthleteParticipats.
     */
    cursor?: AthleteParticipatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AthleteParticipats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AthleteParticipats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AthleteParticipats.
     */
    distinct?: AthleteParticipatScalarFieldEnum | AthleteParticipatScalarFieldEnum[]
  }

  /**
   * AthleteParticipat findMany
   */
  export type AthleteParticipatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatInclude<ExtArgs> | null
    /**
     * Filter, which AthleteParticipats to fetch.
     */
    where?: AthleteParticipatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AthleteParticipats to fetch.
     */
    orderBy?: AthleteParticipatOrderByWithRelationInput | AthleteParticipatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AthleteParticipats.
     */
    cursor?: AthleteParticipatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AthleteParticipats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AthleteParticipats.
     */
    skip?: number
    distinct?: AthleteParticipatScalarFieldEnum | AthleteParticipatScalarFieldEnum[]
  }

  /**
   * AthleteParticipat create
   */
  export type AthleteParticipatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatInclude<ExtArgs> | null
    /**
     * The data needed to create a AthleteParticipat.
     */
    data: XOR<AthleteParticipatCreateInput, AthleteParticipatUncheckedCreateInput>
  }

  /**
   * AthleteParticipat createMany
   */
  export type AthleteParticipatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AthleteParticipats.
     */
    data: AthleteParticipatCreateManyInput | AthleteParticipatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AthleteParticipat createManyAndReturn
   */
  export type AthleteParticipatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * The data used to create many AthleteParticipats.
     */
    data: AthleteParticipatCreateManyInput | AthleteParticipatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AthleteParticipat update
   */
  export type AthleteParticipatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatInclude<ExtArgs> | null
    /**
     * The data needed to update a AthleteParticipat.
     */
    data: XOR<AthleteParticipatUpdateInput, AthleteParticipatUncheckedUpdateInput>
    /**
     * Choose, which AthleteParticipat to update.
     */
    where: AthleteParticipatWhereUniqueInput
  }

  /**
   * AthleteParticipat updateMany
   */
  export type AthleteParticipatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AthleteParticipats.
     */
    data: XOR<AthleteParticipatUpdateManyMutationInput, AthleteParticipatUncheckedUpdateManyInput>
    /**
     * Filter which AthleteParticipats to update
     */
    where?: AthleteParticipatWhereInput
    /**
     * Limit how many AthleteParticipats to update.
     */
    limit?: number
  }

  /**
   * AthleteParticipat updateManyAndReturn
   */
  export type AthleteParticipatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * The data used to update AthleteParticipats.
     */
    data: XOR<AthleteParticipatUpdateManyMutationInput, AthleteParticipatUncheckedUpdateManyInput>
    /**
     * Filter which AthleteParticipats to update
     */
    where?: AthleteParticipatWhereInput
    /**
     * Limit how many AthleteParticipats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AthleteParticipat upsert
   */
  export type AthleteParticipatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatInclude<ExtArgs> | null
    /**
     * The filter to search for the AthleteParticipat to update in case it exists.
     */
    where: AthleteParticipatWhereUniqueInput
    /**
     * In case the AthleteParticipat found by the `where` argument doesn't exist, create a new AthleteParticipat with this data.
     */
    create: XOR<AthleteParticipatCreateInput, AthleteParticipatUncheckedCreateInput>
    /**
     * In case the AthleteParticipat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AthleteParticipatUpdateInput, AthleteParticipatUncheckedUpdateInput>
  }

  /**
   * AthleteParticipat delete
   */
  export type AthleteParticipatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatInclude<ExtArgs> | null
    /**
     * Filter which AthleteParticipat to delete.
     */
    where: AthleteParticipatWhereUniqueInput
  }

  /**
   * AthleteParticipat deleteMany
   */
  export type AthleteParticipatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AthleteParticipats to delete
     */
    where?: AthleteParticipatWhereInput
    /**
     * Limit how many AthleteParticipats to delete.
     */
    limit?: number
  }

  /**
   * AthleteParticipat.Medals
   */
  export type AthleteParticipat$MedalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medals
     */
    select?: MedalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medals
     */
    omit?: MedalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalsInclude<ExtArgs> | null
    where?: MedalsWhereInput
    orderBy?: MedalsOrderByWithRelationInput | MedalsOrderByWithRelationInput[]
    cursor?: MedalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedalsScalarFieldEnum | MedalsScalarFieldEnum[]
  }

  /**
   * AthleteParticipat without action
   */
  export type AthleteParticipatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteParticipat
     */
    select?: AthleteParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteParticipat
     */
    omit?: AthleteParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteParticipatInclude<ExtArgs> | null
  }


  /**
   * Model LeaderParticipat
   */

  export type AggregateLeaderParticipat = {
    _count: LeaderParticipatCountAggregateOutputType | null
    _avg: LeaderParticipatAvgAggregateOutputType | null
    _sum: LeaderParticipatSumAggregateOutputType | null
    _min: LeaderParticipatMinAggregateOutputType | null
    _max: LeaderParticipatMaxAggregateOutputType | null
  }

  export type LeaderParticipatAvgAggregateOutputType = {
    id: number | null
    leadersID: number | null
    eventsID: number | null
    sportsID: number | null
    organizationID: number | null
  }

  export type LeaderParticipatSumAggregateOutputType = {
    id: number | null
    leadersID: number | null
    eventsID: number | null
    sportsID: number | null
    organizationID: number | null
  }

  export type LeaderParticipatMinAggregateOutputType = {
    id: number | null
    leadersID: number | null
    eventsID: number | null
    sportsID: number | null
    organizationID: number | null
    createdAt: Date | null
  }

  export type LeaderParticipatMaxAggregateOutputType = {
    id: number | null
    leadersID: number | null
    eventsID: number | null
    sportsID: number | null
    organizationID: number | null
    createdAt: Date | null
  }

  export type LeaderParticipatCountAggregateOutputType = {
    id: number
    leadersID: number
    eventsID: number
    sportsID: number
    organizationID: number
    createdAt: number
    _all: number
  }


  export type LeaderParticipatAvgAggregateInputType = {
    id?: true
    leadersID?: true
    eventsID?: true
    sportsID?: true
    organizationID?: true
  }

  export type LeaderParticipatSumAggregateInputType = {
    id?: true
    leadersID?: true
    eventsID?: true
    sportsID?: true
    organizationID?: true
  }

  export type LeaderParticipatMinAggregateInputType = {
    id?: true
    leadersID?: true
    eventsID?: true
    sportsID?: true
    organizationID?: true
    createdAt?: true
  }

  export type LeaderParticipatMaxAggregateInputType = {
    id?: true
    leadersID?: true
    eventsID?: true
    sportsID?: true
    organizationID?: true
    createdAt?: true
  }

  export type LeaderParticipatCountAggregateInputType = {
    id?: true
    leadersID?: true
    eventsID?: true
    sportsID?: true
    organizationID?: true
    createdAt?: true
    _all?: true
  }

  export type LeaderParticipatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaderParticipat to aggregate.
     */
    where?: LeaderParticipatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderParticipats to fetch.
     */
    orderBy?: LeaderParticipatOrderByWithRelationInput | LeaderParticipatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaderParticipatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderParticipats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderParticipats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaderParticipats
    **/
    _count?: true | LeaderParticipatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaderParticipatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaderParticipatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaderParticipatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaderParticipatMaxAggregateInputType
  }

  export type GetLeaderParticipatAggregateType<T extends LeaderParticipatAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaderParticipat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaderParticipat[P]>
      : GetScalarType<T[P], AggregateLeaderParticipat[P]>
  }




  export type LeaderParticipatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderParticipatWhereInput
    orderBy?: LeaderParticipatOrderByWithAggregationInput | LeaderParticipatOrderByWithAggregationInput[]
    by: LeaderParticipatScalarFieldEnum[] | LeaderParticipatScalarFieldEnum
    having?: LeaderParticipatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaderParticipatCountAggregateInputType | true
    _avg?: LeaderParticipatAvgAggregateInputType
    _sum?: LeaderParticipatSumAggregateInputType
    _min?: LeaderParticipatMinAggregateInputType
    _max?: LeaderParticipatMaxAggregateInputType
  }

  export type LeaderParticipatGroupByOutputType = {
    id: number
    leadersID: number
    eventsID: number
    sportsID: number
    organizationID: number
    createdAt: Date
    _count: LeaderParticipatCountAggregateOutputType | null
    _avg: LeaderParticipatAvgAggregateOutputType | null
    _sum: LeaderParticipatSumAggregateOutputType | null
    _min: LeaderParticipatMinAggregateOutputType | null
    _max: LeaderParticipatMaxAggregateOutputType | null
  }

  type GetLeaderParticipatGroupByPayload<T extends LeaderParticipatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaderParticipatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaderParticipatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaderParticipatGroupByOutputType[P]>
            : GetScalarType<T[P], LeaderParticipatGroupByOutputType[P]>
        }
      >
    >


  export type LeaderParticipatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadersID?: boolean
    eventsID?: boolean
    sportsID?: boolean
    organizationID?: boolean
    createdAt?: boolean
    leaders?: boolean | LeadersDefaultArgs<ExtArgs>
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderParticipat"]>

  export type LeaderParticipatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadersID?: boolean
    eventsID?: boolean
    sportsID?: boolean
    organizationID?: boolean
    createdAt?: boolean
    leaders?: boolean | LeadersDefaultArgs<ExtArgs>
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderParticipat"]>

  export type LeaderParticipatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadersID?: boolean
    eventsID?: boolean
    sportsID?: boolean
    organizationID?: boolean
    createdAt?: boolean
    leaders?: boolean | LeadersDefaultArgs<ExtArgs>
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderParticipat"]>

  export type LeaderParticipatSelectScalar = {
    id?: boolean
    leadersID?: boolean
    eventsID?: boolean
    sportsID?: boolean
    organizationID?: boolean
    createdAt?: boolean
  }

  export type LeaderParticipatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadersID" | "eventsID" | "sportsID" | "organizationID" | "createdAt", ExtArgs["result"]["leaderParticipat"]>
  export type LeaderParticipatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leaders?: boolean | LeadersDefaultArgs<ExtArgs>
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type LeaderParticipatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leaders?: boolean | LeadersDefaultArgs<ExtArgs>
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type LeaderParticipatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leaders?: boolean | LeadersDefaultArgs<ExtArgs>
    events?: boolean | EventsDefaultArgs<ExtArgs>
    sports?: boolean | SportsDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $LeaderParticipatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaderParticipat"
    objects: {
      leaders: Prisma.$LeadersPayload<ExtArgs>
      events: Prisma.$EventsPayload<ExtArgs>
      sports: Prisma.$SportsPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      leadersID: number
      eventsID: number
      sportsID: number
      organizationID: number
      createdAt: Date
    }, ExtArgs["result"]["leaderParticipat"]>
    composites: {}
  }

  type LeaderParticipatGetPayload<S extends boolean | null | undefined | LeaderParticipatDefaultArgs> = $Result.GetResult<Prisma.$LeaderParticipatPayload, S>

  type LeaderParticipatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaderParticipatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaderParticipatCountAggregateInputType | true
    }

  export interface LeaderParticipatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaderParticipat'], meta: { name: 'LeaderParticipat' } }
    /**
     * Find zero or one LeaderParticipat that matches the filter.
     * @param {LeaderParticipatFindUniqueArgs} args - Arguments to find a LeaderParticipat
     * @example
     * // Get one LeaderParticipat
     * const leaderParticipat = await prisma.leaderParticipat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaderParticipatFindUniqueArgs>(args: SelectSubset<T, LeaderParticipatFindUniqueArgs<ExtArgs>>): Prisma__LeaderParticipatClient<$Result.GetResult<Prisma.$LeaderParticipatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaderParticipat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaderParticipatFindUniqueOrThrowArgs} args - Arguments to find a LeaderParticipat
     * @example
     * // Get one LeaderParticipat
     * const leaderParticipat = await prisma.leaderParticipat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaderParticipatFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaderParticipatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaderParticipatClient<$Result.GetResult<Prisma.$LeaderParticipatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaderParticipat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderParticipatFindFirstArgs} args - Arguments to find a LeaderParticipat
     * @example
     * // Get one LeaderParticipat
     * const leaderParticipat = await prisma.leaderParticipat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaderParticipatFindFirstArgs>(args?: SelectSubset<T, LeaderParticipatFindFirstArgs<ExtArgs>>): Prisma__LeaderParticipatClient<$Result.GetResult<Prisma.$LeaderParticipatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaderParticipat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderParticipatFindFirstOrThrowArgs} args - Arguments to find a LeaderParticipat
     * @example
     * // Get one LeaderParticipat
     * const leaderParticipat = await prisma.leaderParticipat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaderParticipatFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaderParticipatFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaderParticipatClient<$Result.GetResult<Prisma.$LeaderParticipatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaderParticipats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderParticipatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaderParticipats
     * const leaderParticipats = await prisma.leaderParticipat.findMany()
     * 
     * // Get first 10 LeaderParticipats
     * const leaderParticipats = await prisma.leaderParticipat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaderParticipatWithIdOnly = await prisma.leaderParticipat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaderParticipatFindManyArgs>(args?: SelectSubset<T, LeaderParticipatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderParticipatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaderParticipat.
     * @param {LeaderParticipatCreateArgs} args - Arguments to create a LeaderParticipat.
     * @example
     * // Create one LeaderParticipat
     * const LeaderParticipat = await prisma.leaderParticipat.create({
     *   data: {
     *     // ... data to create a LeaderParticipat
     *   }
     * })
     * 
     */
    create<T extends LeaderParticipatCreateArgs>(args: SelectSubset<T, LeaderParticipatCreateArgs<ExtArgs>>): Prisma__LeaderParticipatClient<$Result.GetResult<Prisma.$LeaderParticipatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaderParticipats.
     * @param {LeaderParticipatCreateManyArgs} args - Arguments to create many LeaderParticipats.
     * @example
     * // Create many LeaderParticipats
     * const leaderParticipat = await prisma.leaderParticipat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaderParticipatCreateManyArgs>(args?: SelectSubset<T, LeaderParticipatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaderParticipats and returns the data saved in the database.
     * @param {LeaderParticipatCreateManyAndReturnArgs} args - Arguments to create many LeaderParticipats.
     * @example
     * // Create many LeaderParticipats
     * const leaderParticipat = await prisma.leaderParticipat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaderParticipats and only return the `id`
     * const leaderParticipatWithIdOnly = await prisma.leaderParticipat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaderParticipatCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaderParticipatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderParticipatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaderParticipat.
     * @param {LeaderParticipatDeleteArgs} args - Arguments to delete one LeaderParticipat.
     * @example
     * // Delete one LeaderParticipat
     * const LeaderParticipat = await prisma.leaderParticipat.delete({
     *   where: {
     *     // ... filter to delete one LeaderParticipat
     *   }
     * })
     * 
     */
    delete<T extends LeaderParticipatDeleteArgs>(args: SelectSubset<T, LeaderParticipatDeleteArgs<ExtArgs>>): Prisma__LeaderParticipatClient<$Result.GetResult<Prisma.$LeaderParticipatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaderParticipat.
     * @param {LeaderParticipatUpdateArgs} args - Arguments to update one LeaderParticipat.
     * @example
     * // Update one LeaderParticipat
     * const leaderParticipat = await prisma.leaderParticipat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaderParticipatUpdateArgs>(args: SelectSubset<T, LeaderParticipatUpdateArgs<ExtArgs>>): Prisma__LeaderParticipatClient<$Result.GetResult<Prisma.$LeaderParticipatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaderParticipats.
     * @param {LeaderParticipatDeleteManyArgs} args - Arguments to filter LeaderParticipats to delete.
     * @example
     * // Delete a few LeaderParticipats
     * const { count } = await prisma.leaderParticipat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaderParticipatDeleteManyArgs>(args?: SelectSubset<T, LeaderParticipatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaderParticipats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderParticipatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaderParticipats
     * const leaderParticipat = await prisma.leaderParticipat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaderParticipatUpdateManyArgs>(args: SelectSubset<T, LeaderParticipatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaderParticipats and returns the data updated in the database.
     * @param {LeaderParticipatUpdateManyAndReturnArgs} args - Arguments to update many LeaderParticipats.
     * @example
     * // Update many LeaderParticipats
     * const leaderParticipat = await prisma.leaderParticipat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaderParticipats and only return the `id`
     * const leaderParticipatWithIdOnly = await prisma.leaderParticipat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaderParticipatUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaderParticipatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderParticipatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaderParticipat.
     * @param {LeaderParticipatUpsertArgs} args - Arguments to update or create a LeaderParticipat.
     * @example
     * // Update or create a LeaderParticipat
     * const leaderParticipat = await prisma.leaderParticipat.upsert({
     *   create: {
     *     // ... data to create a LeaderParticipat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaderParticipat we want to update
     *   }
     * })
     */
    upsert<T extends LeaderParticipatUpsertArgs>(args: SelectSubset<T, LeaderParticipatUpsertArgs<ExtArgs>>): Prisma__LeaderParticipatClient<$Result.GetResult<Prisma.$LeaderParticipatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaderParticipats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderParticipatCountArgs} args - Arguments to filter LeaderParticipats to count.
     * @example
     * // Count the number of LeaderParticipats
     * const count = await prisma.leaderParticipat.count({
     *   where: {
     *     // ... the filter for the LeaderParticipats we want to count
     *   }
     * })
    **/
    count<T extends LeaderParticipatCountArgs>(
      args?: Subset<T, LeaderParticipatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaderParticipatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaderParticipat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderParticipatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaderParticipatAggregateArgs>(args: Subset<T, LeaderParticipatAggregateArgs>): Prisma.PrismaPromise<GetLeaderParticipatAggregateType<T>>

    /**
     * Group by LeaderParticipat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderParticipatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaderParticipatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaderParticipatGroupByArgs['orderBy'] }
        : { orderBy?: LeaderParticipatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaderParticipatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderParticipatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaderParticipat model
   */
  readonly fields: LeaderParticipatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaderParticipat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaderParticipatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leaders<T extends LeadersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadersDefaultArgs<ExtArgs>>): Prisma__LeadersClient<$Result.GetResult<Prisma.$LeadersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends EventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventsDefaultArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sports<T extends SportsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportsDefaultArgs<ExtArgs>>): Prisma__SportsClient<$Result.GetResult<Prisma.$SportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeaderParticipat model
   */
  interface LeaderParticipatFieldRefs {
    readonly id: FieldRef<"LeaderParticipat", 'Int'>
    readonly leadersID: FieldRef<"LeaderParticipat", 'Int'>
    readonly eventsID: FieldRef<"LeaderParticipat", 'Int'>
    readonly sportsID: FieldRef<"LeaderParticipat", 'Int'>
    readonly organizationID: FieldRef<"LeaderParticipat", 'Int'>
    readonly createdAt: FieldRef<"LeaderParticipat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeaderParticipat findUnique
   */
  export type LeaderParticipatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderParticipat
     */
    select?: LeaderParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderParticipat
     */
    omit?: LeaderParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderParticipatInclude<ExtArgs> | null
    /**
     * Filter, which LeaderParticipat to fetch.
     */
    where: LeaderParticipatWhereUniqueInput
  }

  /**
   * LeaderParticipat findUniqueOrThrow
   */
  export type LeaderParticipatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderParticipat
     */
    select?: LeaderParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderParticipat
     */
    omit?: LeaderParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderParticipatInclude<ExtArgs> | null
    /**
     * Filter, which LeaderParticipat to fetch.
     */
    where: LeaderParticipatWhereUniqueInput
  }

  /**
   * LeaderParticipat findFirst
   */
  export type LeaderParticipatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderParticipat
     */
    select?: LeaderParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderParticipat
     */
    omit?: LeaderParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderParticipatInclude<ExtArgs> | null
    /**
     * Filter, which LeaderParticipat to fetch.
     */
    where?: LeaderParticipatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderParticipats to fetch.
     */
    orderBy?: LeaderParticipatOrderByWithRelationInput | LeaderParticipatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaderParticipats.
     */
    cursor?: LeaderParticipatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderParticipats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderParticipats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderParticipats.
     */
    distinct?: LeaderParticipatScalarFieldEnum | LeaderParticipatScalarFieldEnum[]
  }

  /**
   * LeaderParticipat findFirstOrThrow
   */
  export type LeaderParticipatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderParticipat
     */
    select?: LeaderParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderParticipat
     */
    omit?: LeaderParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderParticipatInclude<ExtArgs> | null
    /**
     * Filter, which LeaderParticipat to fetch.
     */
    where?: LeaderParticipatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderParticipats to fetch.
     */
    orderBy?: LeaderParticipatOrderByWithRelationInput | LeaderParticipatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaderParticipats.
     */
    cursor?: LeaderParticipatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderParticipats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderParticipats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderParticipats.
     */
    distinct?: LeaderParticipatScalarFieldEnum | LeaderParticipatScalarFieldEnum[]
  }

  /**
   * LeaderParticipat findMany
   */
  export type LeaderParticipatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderParticipat
     */
    select?: LeaderParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderParticipat
     */
    omit?: LeaderParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderParticipatInclude<ExtArgs> | null
    /**
     * Filter, which LeaderParticipats to fetch.
     */
    where?: LeaderParticipatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderParticipats to fetch.
     */
    orderBy?: LeaderParticipatOrderByWithRelationInput | LeaderParticipatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaderParticipats.
     */
    cursor?: LeaderParticipatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderParticipats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderParticipats.
     */
    skip?: number
    distinct?: LeaderParticipatScalarFieldEnum | LeaderParticipatScalarFieldEnum[]
  }

  /**
   * LeaderParticipat create
   */
  export type LeaderParticipatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderParticipat
     */
    select?: LeaderParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderParticipat
     */
    omit?: LeaderParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderParticipatInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaderParticipat.
     */
    data: XOR<LeaderParticipatCreateInput, LeaderParticipatUncheckedCreateInput>
  }

  /**
   * LeaderParticipat createMany
   */
  export type LeaderParticipatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaderParticipats.
     */
    data: LeaderParticipatCreateManyInput | LeaderParticipatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaderParticipat createManyAndReturn
   */
  export type LeaderParticipatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderParticipat
     */
    select?: LeaderParticipatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderParticipat
     */
    omit?: LeaderParticipatOmit<ExtArgs> | null
    /**
     * The data used to create many LeaderParticipats.
     */
    data: LeaderParticipatCreateManyInput | LeaderParticipatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderParticipatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaderParticipat update
   */
  export type LeaderParticipatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderParticipat
     */
    select?: LeaderParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderParticipat
     */
    omit?: LeaderParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderParticipatInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaderParticipat.
     */
    data: XOR<LeaderParticipatUpdateInput, LeaderParticipatUncheckedUpdateInput>
    /**
     * Choose, which LeaderParticipat to update.
     */
    where: LeaderParticipatWhereUniqueInput
  }

  /**
   * LeaderParticipat updateMany
   */
  export type LeaderParticipatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaderParticipats.
     */
    data: XOR<LeaderParticipatUpdateManyMutationInput, LeaderParticipatUncheckedUpdateManyInput>
    /**
     * Filter which LeaderParticipats to update
     */
    where?: LeaderParticipatWhereInput
    /**
     * Limit how many LeaderParticipats to update.
     */
    limit?: number
  }

  /**
   * LeaderParticipat updateManyAndReturn
   */
  export type LeaderParticipatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderParticipat
     */
    select?: LeaderParticipatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderParticipat
     */
    omit?: LeaderParticipatOmit<ExtArgs> | null
    /**
     * The data used to update LeaderParticipats.
     */
    data: XOR<LeaderParticipatUpdateManyMutationInput, LeaderParticipatUncheckedUpdateManyInput>
    /**
     * Filter which LeaderParticipats to update
     */
    where?: LeaderParticipatWhereInput
    /**
     * Limit how many LeaderParticipats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderParticipatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaderParticipat upsert
   */
  export type LeaderParticipatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderParticipat
     */
    select?: LeaderParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderParticipat
     */
    omit?: LeaderParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderParticipatInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaderParticipat to update in case it exists.
     */
    where: LeaderParticipatWhereUniqueInput
    /**
     * In case the LeaderParticipat found by the `where` argument doesn't exist, create a new LeaderParticipat with this data.
     */
    create: XOR<LeaderParticipatCreateInput, LeaderParticipatUncheckedCreateInput>
    /**
     * In case the LeaderParticipat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaderParticipatUpdateInput, LeaderParticipatUncheckedUpdateInput>
  }

  /**
   * LeaderParticipat delete
   */
  export type LeaderParticipatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderParticipat
     */
    select?: LeaderParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderParticipat
     */
    omit?: LeaderParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderParticipatInclude<ExtArgs> | null
    /**
     * Filter which LeaderParticipat to delete.
     */
    where: LeaderParticipatWhereUniqueInput
  }

  /**
   * LeaderParticipat deleteMany
   */
  export type LeaderParticipatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaderParticipats to delete
     */
    where?: LeaderParticipatWhereInput
    /**
     * Limit how many LeaderParticipats to delete.
     */
    limit?: number
  }

  /**
   * LeaderParticipat without action
   */
  export type LeaderParticipatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderParticipat
     */
    select?: LeaderParticipatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderParticipat
     */
    omit?: LeaderParticipatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderParticipatInclude<ExtArgs> | null
  }


  /**
   * Model Medals
   */

  export type AggregateMedals = {
    _count: MedalsCountAggregateOutputType | null
    _avg: MedalsAvgAggregateOutputType | null
    _sum: MedalsSumAggregateOutputType | null
    _min: MedalsMinAggregateOutputType | null
    _max: MedalsMaxAggregateOutputType | null
  }

  export type MedalsAvgAggregateOutputType = {
    id: number | null
    athletesParticipID: number | null
  }

  export type MedalsSumAggregateOutputType = {
    id: number | null
    athletesParticipID: number | null
  }

  export type MedalsMinAggregateOutputType = {
    id: number | null
    athletesParticipID: number | null
    medals_type: $Enums.MedalType | null
    key_performance: string | null
    createdAt: Date | null
  }

  export type MedalsMaxAggregateOutputType = {
    id: number | null
    athletesParticipID: number | null
    medals_type: $Enums.MedalType | null
    key_performance: string | null
    createdAt: Date | null
  }

  export type MedalsCountAggregateOutputType = {
    id: number
    athletesParticipID: number
    medals_type: number
    key_performance: number
    createdAt: number
    _all: number
  }


  export type MedalsAvgAggregateInputType = {
    id?: true
    athletesParticipID?: true
  }

  export type MedalsSumAggregateInputType = {
    id?: true
    athletesParticipID?: true
  }

  export type MedalsMinAggregateInputType = {
    id?: true
    athletesParticipID?: true
    medals_type?: true
    key_performance?: true
    createdAt?: true
  }

  export type MedalsMaxAggregateInputType = {
    id?: true
    athletesParticipID?: true
    medals_type?: true
    key_performance?: true
    createdAt?: true
  }

  export type MedalsCountAggregateInputType = {
    id?: true
    athletesParticipID?: true
    medals_type?: true
    key_performance?: true
    createdAt?: true
    _all?: true
  }

  export type MedalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medals to aggregate.
     */
    where?: MedalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medals to fetch.
     */
    orderBy?: MedalsOrderByWithRelationInput | MedalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medals
    **/
    _count?: true | MedalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedalsMaxAggregateInputType
  }

  export type GetMedalsAggregateType<T extends MedalsAggregateArgs> = {
        [P in keyof T & keyof AggregateMedals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedals[P]>
      : GetScalarType<T[P], AggregateMedals[P]>
  }




  export type MedalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedalsWhereInput
    orderBy?: MedalsOrderByWithAggregationInput | MedalsOrderByWithAggregationInput[]
    by: MedalsScalarFieldEnum[] | MedalsScalarFieldEnum
    having?: MedalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedalsCountAggregateInputType | true
    _avg?: MedalsAvgAggregateInputType
    _sum?: MedalsSumAggregateInputType
    _min?: MedalsMinAggregateInputType
    _max?: MedalsMaxAggregateInputType
  }

  export type MedalsGroupByOutputType = {
    id: number
    athletesParticipID: number
    medals_type: $Enums.MedalType
    key_performance: string | null
    createdAt: Date
    _count: MedalsCountAggregateOutputType | null
    _avg: MedalsAvgAggregateOutputType | null
    _sum: MedalsSumAggregateOutputType | null
    _min: MedalsMinAggregateOutputType | null
    _max: MedalsMaxAggregateOutputType | null
  }

  type GetMedalsGroupByPayload<T extends MedalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedalsGroupByOutputType[P]>
            : GetScalarType<T[P], MedalsGroupByOutputType[P]>
        }
      >
    >


  export type MedalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athletesParticipID?: boolean
    medals_type?: boolean
    key_performance?: boolean
    createdAt?: boolean
    athleteParticipat?: boolean | AthleteParticipatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medals"]>

  export type MedalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athletesParticipID?: boolean
    medals_type?: boolean
    key_performance?: boolean
    createdAt?: boolean
    athleteParticipat?: boolean | AthleteParticipatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medals"]>

  export type MedalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athletesParticipID?: boolean
    medals_type?: boolean
    key_performance?: boolean
    createdAt?: boolean
    athleteParticipat?: boolean | AthleteParticipatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medals"]>

  export type MedalsSelectScalar = {
    id?: boolean
    athletesParticipID?: boolean
    medals_type?: boolean
    key_performance?: boolean
    createdAt?: boolean
  }

  export type MedalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "athletesParticipID" | "medals_type" | "key_performance" | "createdAt", ExtArgs["result"]["medals"]>
  export type MedalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athleteParticipat?: boolean | AthleteParticipatDefaultArgs<ExtArgs>
  }
  export type MedalsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athleteParticipat?: boolean | AthleteParticipatDefaultArgs<ExtArgs>
  }
  export type MedalsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    athleteParticipat?: boolean | AthleteParticipatDefaultArgs<ExtArgs>
  }

  export type $MedalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medals"
    objects: {
      athleteParticipat: Prisma.$AthleteParticipatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      athletesParticipID: number
      medals_type: $Enums.MedalType
      key_performance: string | null
      createdAt: Date
    }, ExtArgs["result"]["medals"]>
    composites: {}
  }

  type MedalsGetPayload<S extends boolean | null | undefined | MedalsDefaultArgs> = $Result.GetResult<Prisma.$MedalsPayload, S>

  type MedalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedalsCountAggregateInputType | true
    }

  export interface MedalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medals'], meta: { name: 'Medals' } }
    /**
     * Find zero or one Medals that matches the filter.
     * @param {MedalsFindUniqueArgs} args - Arguments to find a Medals
     * @example
     * // Get one Medals
     * const medals = await prisma.medals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedalsFindUniqueArgs>(args: SelectSubset<T, MedalsFindUniqueArgs<ExtArgs>>): Prisma__MedalsClient<$Result.GetResult<Prisma.$MedalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedalsFindUniqueOrThrowArgs} args - Arguments to find a Medals
     * @example
     * // Get one Medals
     * const medals = await prisma.medals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedalsFindUniqueOrThrowArgs>(args: SelectSubset<T, MedalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedalsClient<$Result.GetResult<Prisma.$MedalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedalsFindFirstArgs} args - Arguments to find a Medals
     * @example
     * // Get one Medals
     * const medals = await prisma.medals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedalsFindFirstArgs>(args?: SelectSubset<T, MedalsFindFirstArgs<ExtArgs>>): Prisma__MedalsClient<$Result.GetResult<Prisma.$MedalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedalsFindFirstOrThrowArgs} args - Arguments to find a Medals
     * @example
     * // Get one Medals
     * const medals = await prisma.medals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedalsFindFirstOrThrowArgs>(args?: SelectSubset<T, MedalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedalsClient<$Result.GetResult<Prisma.$MedalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medals
     * const medals = await prisma.medals.findMany()
     * 
     * // Get first 10 Medals
     * const medals = await prisma.medals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medalsWithIdOnly = await prisma.medals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedalsFindManyArgs>(args?: SelectSubset<T, MedalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medals.
     * @param {MedalsCreateArgs} args - Arguments to create a Medals.
     * @example
     * // Create one Medals
     * const Medals = await prisma.medals.create({
     *   data: {
     *     // ... data to create a Medals
     *   }
     * })
     * 
     */
    create<T extends MedalsCreateArgs>(args: SelectSubset<T, MedalsCreateArgs<ExtArgs>>): Prisma__MedalsClient<$Result.GetResult<Prisma.$MedalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medals.
     * @param {MedalsCreateManyArgs} args - Arguments to create many Medals.
     * @example
     * // Create many Medals
     * const medals = await prisma.medals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedalsCreateManyArgs>(args?: SelectSubset<T, MedalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medals and returns the data saved in the database.
     * @param {MedalsCreateManyAndReturnArgs} args - Arguments to create many Medals.
     * @example
     * // Create many Medals
     * const medals = await prisma.medals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medals and only return the `id`
     * const medalsWithIdOnly = await prisma.medals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedalsCreateManyAndReturnArgs>(args?: SelectSubset<T, MedalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medals.
     * @param {MedalsDeleteArgs} args - Arguments to delete one Medals.
     * @example
     * // Delete one Medals
     * const Medals = await prisma.medals.delete({
     *   where: {
     *     // ... filter to delete one Medals
     *   }
     * })
     * 
     */
    delete<T extends MedalsDeleteArgs>(args: SelectSubset<T, MedalsDeleteArgs<ExtArgs>>): Prisma__MedalsClient<$Result.GetResult<Prisma.$MedalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medals.
     * @param {MedalsUpdateArgs} args - Arguments to update one Medals.
     * @example
     * // Update one Medals
     * const medals = await prisma.medals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedalsUpdateArgs>(args: SelectSubset<T, MedalsUpdateArgs<ExtArgs>>): Prisma__MedalsClient<$Result.GetResult<Prisma.$MedalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medals.
     * @param {MedalsDeleteManyArgs} args - Arguments to filter Medals to delete.
     * @example
     * // Delete a few Medals
     * const { count } = await prisma.medals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedalsDeleteManyArgs>(args?: SelectSubset<T, MedalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medals
     * const medals = await prisma.medals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedalsUpdateManyArgs>(args: SelectSubset<T, MedalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medals and returns the data updated in the database.
     * @param {MedalsUpdateManyAndReturnArgs} args - Arguments to update many Medals.
     * @example
     * // Update many Medals
     * const medals = await prisma.medals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medals and only return the `id`
     * const medalsWithIdOnly = await prisma.medals.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedalsUpdateManyAndReturnArgs>(args: SelectSubset<T, MedalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medals.
     * @param {MedalsUpsertArgs} args - Arguments to update or create a Medals.
     * @example
     * // Update or create a Medals
     * const medals = await prisma.medals.upsert({
     *   create: {
     *     // ... data to create a Medals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medals we want to update
     *   }
     * })
     */
    upsert<T extends MedalsUpsertArgs>(args: SelectSubset<T, MedalsUpsertArgs<ExtArgs>>): Prisma__MedalsClient<$Result.GetResult<Prisma.$MedalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedalsCountArgs} args - Arguments to filter Medals to count.
     * @example
     * // Count the number of Medals
     * const count = await prisma.medals.count({
     *   where: {
     *     // ... the filter for the Medals we want to count
     *   }
     * })
    **/
    count<T extends MedalsCountArgs>(
      args?: Subset<T, MedalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedalsAggregateArgs>(args: Subset<T, MedalsAggregateArgs>): Prisma.PrismaPromise<GetMedalsAggregateType<T>>

    /**
     * Group by Medals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedalsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedalsGroupByArgs['orderBy'] }
        : { orderBy?: MedalsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medals model
   */
  readonly fields: MedalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    athleteParticipat<T extends AthleteParticipatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AthleteParticipatDefaultArgs<ExtArgs>>): Prisma__AthleteParticipatClient<$Result.GetResult<Prisma.$AthleteParticipatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medals model
   */
  interface MedalsFieldRefs {
    readonly id: FieldRef<"Medals", 'Int'>
    readonly athletesParticipID: FieldRef<"Medals", 'Int'>
    readonly medals_type: FieldRef<"Medals", 'MedalType'>
    readonly key_performance: FieldRef<"Medals", 'String'>
    readonly createdAt: FieldRef<"Medals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Medals findUnique
   */
  export type MedalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medals
     */
    select?: MedalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medals
     */
    omit?: MedalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalsInclude<ExtArgs> | null
    /**
     * Filter, which Medals to fetch.
     */
    where: MedalsWhereUniqueInput
  }

  /**
   * Medals findUniqueOrThrow
   */
  export type MedalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medals
     */
    select?: MedalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medals
     */
    omit?: MedalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalsInclude<ExtArgs> | null
    /**
     * Filter, which Medals to fetch.
     */
    where: MedalsWhereUniqueInput
  }

  /**
   * Medals findFirst
   */
  export type MedalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medals
     */
    select?: MedalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medals
     */
    omit?: MedalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalsInclude<ExtArgs> | null
    /**
     * Filter, which Medals to fetch.
     */
    where?: MedalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medals to fetch.
     */
    orderBy?: MedalsOrderByWithRelationInput | MedalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medals.
     */
    cursor?: MedalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medals.
     */
    distinct?: MedalsScalarFieldEnum | MedalsScalarFieldEnum[]
  }

  /**
   * Medals findFirstOrThrow
   */
  export type MedalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medals
     */
    select?: MedalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medals
     */
    omit?: MedalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalsInclude<ExtArgs> | null
    /**
     * Filter, which Medals to fetch.
     */
    where?: MedalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medals to fetch.
     */
    orderBy?: MedalsOrderByWithRelationInput | MedalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medals.
     */
    cursor?: MedalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medals.
     */
    distinct?: MedalsScalarFieldEnum | MedalsScalarFieldEnum[]
  }

  /**
   * Medals findMany
   */
  export type MedalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medals
     */
    select?: MedalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medals
     */
    omit?: MedalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalsInclude<ExtArgs> | null
    /**
     * Filter, which Medals to fetch.
     */
    where?: MedalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medals to fetch.
     */
    orderBy?: MedalsOrderByWithRelationInput | MedalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medals.
     */
    cursor?: MedalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medals.
     */
    skip?: number
    distinct?: MedalsScalarFieldEnum | MedalsScalarFieldEnum[]
  }

  /**
   * Medals create
   */
  export type MedalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medals
     */
    select?: MedalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medals
     */
    omit?: MedalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalsInclude<ExtArgs> | null
    /**
     * The data needed to create a Medals.
     */
    data: XOR<MedalsCreateInput, MedalsUncheckedCreateInput>
  }

  /**
   * Medals createMany
   */
  export type MedalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medals.
     */
    data: MedalsCreateManyInput | MedalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medals createManyAndReturn
   */
  export type MedalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medals
     */
    select?: MedalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medals
     */
    omit?: MedalsOmit<ExtArgs> | null
    /**
     * The data used to create many Medals.
     */
    data: MedalsCreateManyInput | MedalsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medals update
   */
  export type MedalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medals
     */
    select?: MedalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medals
     */
    omit?: MedalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalsInclude<ExtArgs> | null
    /**
     * The data needed to update a Medals.
     */
    data: XOR<MedalsUpdateInput, MedalsUncheckedUpdateInput>
    /**
     * Choose, which Medals to update.
     */
    where: MedalsWhereUniqueInput
  }

  /**
   * Medals updateMany
   */
  export type MedalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medals.
     */
    data: XOR<MedalsUpdateManyMutationInput, MedalsUncheckedUpdateManyInput>
    /**
     * Filter which Medals to update
     */
    where?: MedalsWhereInput
    /**
     * Limit how many Medals to update.
     */
    limit?: number
  }

  /**
   * Medals updateManyAndReturn
   */
  export type MedalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medals
     */
    select?: MedalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medals
     */
    omit?: MedalsOmit<ExtArgs> | null
    /**
     * The data used to update Medals.
     */
    data: XOR<MedalsUpdateManyMutationInput, MedalsUncheckedUpdateManyInput>
    /**
     * Filter which Medals to update
     */
    where?: MedalsWhereInput
    /**
     * Limit how many Medals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medals upsert
   */
  export type MedalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medals
     */
    select?: MedalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medals
     */
    omit?: MedalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalsInclude<ExtArgs> | null
    /**
     * The filter to search for the Medals to update in case it exists.
     */
    where: MedalsWhereUniqueInput
    /**
     * In case the Medals found by the `where` argument doesn't exist, create a new Medals with this data.
     */
    create: XOR<MedalsCreateInput, MedalsUncheckedCreateInput>
    /**
     * In case the Medals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedalsUpdateInput, MedalsUncheckedUpdateInput>
  }

  /**
   * Medals delete
   */
  export type MedalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medals
     */
    select?: MedalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medals
     */
    omit?: MedalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalsInclude<ExtArgs> | null
    /**
     * Filter which Medals to delete.
     */
    where: MedalsWhereUniqueInput
  }

  /**
   * Medals deleteMany
   */
  export type MedalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medals to delete
     */
    where?: MedalsWhereInput
    /**
     * Limit how many Medals to delete.
     */
    limit?: number
  }

  /**
   * Medals without action
   */
  export type MedalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medals
     */
    select?: MedalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medals
     */
    omit?: MedalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    userID: 'userID',
    username: 'username',
    password: 'password',
    userLevel: 'userLevel',
    photoPath: 'photoPath',
    createdAt: 'createdAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const EnrollScalarFieldEnum: {
    id: 'id',
    userID: 'userID',
    name: 'name',
    gender: 'gender',
    nationality: 'nationality',
    dob: 'dob',
    idDocType: 'idDocType',
    address: 'address',
    photoPath: 'photoPath',
    DocumentsPath: 'DocumentsPath',
    createdAt: 'createdAt'
  };

  export type EnrollScalarFieldEnum = (typeof EnrollScalarFieldEnum)[keyof typeof EnrollScalarFieldEnum]


  export const AthletesScalarFieldEnum: {
    id: 'id',
    enrollID: 'enrollID',
    class: 'class',
    uniformSize: 'uniformSize',
    createdAt: 'createdAt'
  };

  export type AthletesScalarFieldEnum = (typeof AthletesScalarFieldEnum)[keyof typeof AthletesScalarFieldEnum]


  export const LeadersScalarFieldEnum: {
    id: 'id',
    enrollID: 'enrollID',
    roles: 'roles',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt'
  };

  export type LeadersScalarFieldEnum = (typeof LeadersScalarFieldEnum)[keyof typeof LeadersScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const SportsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type SportsScalarFieldEnum = (typeof SportsScalarFieldEnum)[keyof typeof SportsScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    events_id: 'events_id',
    sportsID: 'sportsID',
    category: 'category',
    createdAt: 'createdAt'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const Sports_event_orgScalarFieldEnum: {
    id: 'id',
    events_id: 'events_id',
    sports_id: 'sports_id',
    organization_id: 'organization_id',
    createdAt: 'createdAt'
  };

  export type Sports_event_orgScalarFieldEnum = (typeof Sports_event_orgScalarFieldEnum)[keyof typeof Sports_event_orgScalarFieldEnum]


  export const AthleteParticipatScalarFieldEnum: {
    id: 'id',
    athletesID: 'athletesID',
    eventsID: 'eventsID',
    categoriesID: 'categoriesID',
    sportsID: 'sportsID',
    organizationID: 'organizationID',
    createdAt: 'createdAt'
  };

  export type AthleteParticipatScalarFieldEnum = (typeof AthleteParticipatScalarFieldEnum)[keyof typeof AthleteParticipatScalarFieldEnum]


  export const LeaderParticipatScalarFieldEnum: {
    id: 'id',
    leadersID: 'leadersID',
    eventsID: 'eventsID',
    sportsID: 'sportsID',
    organizationID: 'organizationID',
    createdAt: 'createdAt'
  };

  export type LeaderParticipatScalarFieldEnum = (typeof LeaderParticipatScalarFieldEnum)[keyof typeof LeaderParticipatScalarFieldEnum]


  export const MedalsScalarFieldEnum: {
    id: 'id',
    athletesParticipID: 'athletesParticipID',
    medals_type: 'medals_type',
    key_performance: 'key_performance',
    createdAt: 'createdAt'
  };

  export type MedalsScalarFieldEnum = (typeof MedalsScalarFieldEnum)[keyof typeof MedalsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'IdDocType'
   */
  export type EnumIdDocTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IdDocType'>
    


  /**
   * Reference to a field of type 'IdDocType[]'
   */
  export type ListEnumIdDocTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IdDocType[]'>
    


  /**
   * Reference to a field of type 'LeaderRole'
   */
  export type EnumLeaderRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaderRole'>
    


  /**
   * Reference to a field of type 'LeaderRole[]'
   */
  export type ListEnumLeaderRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaderRole[]'>
    


  /**
   * Reference to a field of type 'MedalType'
   */
  export type EnumMedalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MedalType'>
    


  /**
   * Reference to a field of type 'MedalType[]'
   */
  export type ListEnumMedalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MedalType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    userID?: IntFilter<"Users"> | number
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    userLevel?: IntFilter<"Users"> | number
    photoPath?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    Enroll?: EnrollListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    userID?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userLevel?: SortOrder
    photoPath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    Enroll?: EnrollOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    userID?: number
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    userLevel?: IntFilter<"Users"> | number
    photoPath?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    Enroll?: EnrollListRelationFilter
  }, "userID" | "username">

  export type UsersOrderByWithAggregationInput = {
    userID?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userLevel?: SortOrder
    photoPath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    userID?: IntWithAggregatesFilter<"Users"> | number
    username?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    userLevel?: IntWithAggregatesFilter<"Users"> | number
    photoPath?: StringNullableWithAggregatesFilter<"Users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type EnrollWhereInput = {
    AND?: EnrollWhereInput | EnrollWhereInput[]
    OR?: EnrollWhereInput[]
    NOT?: EnrollWhereInput | EnrollWhereInput[]
    id?: IntFilter<"Enroll"> | number
    userID?: IntFilter<"Enroll"> | number
    name?: StringFilter<"Enroll"> | string
    gender?: StringFilter<"Enroll"> | string
    nationality?: StringFilter<"Enroll"> | string
    dob?: DateTimeFilter<"Enroll"> | Date | string
    idDocType?: EnumIdDocTypeFilter<"Enroll"> | $Enums.IdDocType
    address?: StringNullableFilter<"Enroll"> | string | null
    photoPath?: StringNullableFilter<"Enroll"> | string | null
    DocumentsPath?: StringNullableFilter<"Enroll"> | string | null
    createdAt?: DateTimeFilter<"Enroll"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    athletes?: XOR<AthletesNullableScalarRelationFilter, AthletesWhereInput> | null
    leaders?: XOR<LeadersNullableScalarRelationFilter, LeadersWhereInput> | null
  }

  export type EnrollOrderByWithRelationInput = {
    id?: SortOrder
    userID?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    dob?: SortOrder
    idDocType?: SortOrder
    address?: SortOrderInput | SortOrder
    photoPath?: SortOrderInput | SortOrder
    DocumentsPath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    athletes?: AthletesOrderByWithRelationInput
    leaders?: LeadersOrderByWithRelationInput
  }

  export type EnrollWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EnrollWhereInput | EnrollWhereInput[]
    OR?: EnrollWhereInput[]
    NOT?: EnrollWhereInput | EnrollWhereInput[]
    userID?: IntFilter<"Enroll"> | number
    name?: StringFilter<"Enroll"> | string
    gender?: StringFilter<"Enroll"> | string
    nationality?: StringFilter<"Enroll"> | string
    dob?: DateTimeFilter<"Enroll"> | Date | string
    idDocType?: EnumIdDocTypeFilter<"Enroll"> | $Enums.IdDocType
    address?: StringNullableFilter<"Enroll"> | string | null
    photoPath?: StringNullableFilter<"Enroll"> | string | null
    DocumentsPath?: StringNullableFilter<"Enroll"> | string | null
    createdAt?: DateTimeFilter<"Enroll"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    athletes?: XOR<AthletesNullableScalarRelationFilter, AthletesWhereInput> | null
    leaders?: XOR<LeadersNullableScalarRelationFilter, LeadersWhereInput> | null
  }, "id">

  export type EnrollOrderByWithAggregationInput = {
    id?: SortOrder
    userID?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    dob?: SortOrder
    idDocType?: SortOrder
    address?: SortOrderInput | SortOrder
    photoPath?: SortOrderInput | SortOrder
    DocumentsPath?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EnrollCountOrderByAggregateInput
    _avg?: EnrollAvgOrderByAggregateInput
    _max?: EnrollMaxOrderByAggregateInput
    _min?: EnrollMinOrderByAggregateInput
    _sum?: EnrollSumOrderByAggregateInput
  }

  export type EnrollScalarWhereWithAggregatesInput = {
    AND?: EnrollScalarWhereWithAggregatesInput | EnrollScalarWhereWithAggregatesInput[]
    OR?: EnrollScalarWhereWithAggregatesInput[]
    NOT?: EnrollScalarWhereWithAggregatesInput | EnrollScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Enroll"> | number
    userID?: IntWithAggregatesFilter<"Enroll"> | number
    name?: StringWithAggregatesFilter<"Enroll"> | string
    gender?: StringWithAggregatesFilter<"Enroll"> | string
    nationality?: StringWithAggregatesFilter<"Enroll"> | string
    dob?: DateTimeWithAggregatesFilter<"Enroll"> | Date | string
    idDocType?: EnumIdDocTypeWithAggregatesFilter<"Enroll"> | $Enums.IdDocType
    address?: StringNullableWithAggregatesFilter<"Enroll"> | string | null
    photoPath?: StringNullableWithAggregatesFilter<"Enroll"> | string | null
    DocumentsPath?: StringNullableWithAggregatesFilter<"Enroll"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Enroll"> | Date | string
  }

  export type AthletesWhereInput = {
    AND?: AthletesWhereInput | AthletesWhereInput[]
    OR?: AthletesWhereInput[]
    NOT?: AthletesWhereInput | AthletesWhereInput[]
    id?: IntFilter<"Athletes"> | number
    enrollID?: IntFilter<"Athletes"> | number
    class?: StringNullableFilter<"Athletes"> | string | null
    uniformSize?: StringNullableFilter<"Athletes"> | string | null
    createdAt?: DateTimeFilter<"Athletes"> | Date | string
    enroll?: XOR<EnrollScalarRelationFilter, EnrollWhereInput>
    AthleteParticipat?: AthleteParticipatListRelationFilter
  }

  export type AthletesOrderByWithRelationInput = {
    id?: SortOrder
    enrollID?: SortOrder
    class?: SortOrderInput | SortOrder
    uniformSize?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    enroll?: EnrollOrderByWithRelationInput
    AthleteParticipat?: AthleteParticipatOrderByRelationAggregateInput
  }

  export type AthletesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    enrollID?: number
    AND?: AthletesWhereInput | AthletesWhereInput[]
    OR?: AthletesWhereInput[]
    NOT?: AthletesWhereInput | AthletesWhereInput[]
    class?: StringNullableFilter<"Athletes"> | string | null
    uniformSize?: StringNullableFilter<"Athletes"> | string | null
    createdAt?: DateTimeFilter<"Athletes"> | Date | string
    enroll?: XOR<EnrollScalarRelationFilter, EnrollWhereInput>
    AthleteParticipat?: AthleteParticipatListRelationFilter
  }, "id" | "enrollID">

  export type AthletesOrderByWithAggregationInput = {
    id?: SortOrder
    enrollID?: SortOrder
    class?: SortOrderInput | SortOrder
    uniformSize?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AthletesCountOrderByAggregateInput
    _avg?: AthletesAvgOrderByAggregateInput
    _max?: AthletesMaxOrderByAggregateInput
    _min?: AthletesMinOrderByAggregateInput
    _sum?: AthletesSumOrderByAggregateInput
  }

  export type AthletesScalarWhereWithAggregatesInput = {
    AND?: AthletesScalarWhereWithAggregatesInput | AthletesScalarWhereWithAggregatesInput[]
    OR?: AthletesScalarWhereWithAggregatesInput[]
    NOT?: AthletesScalarWhereWithAggregatesInput | AthletesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Athletes"> | number
    enrollID?: IntWithAggregatesFilter<"Athletes"> | number
    class?: StringNullableWithAggregatesFilter<"Athletes"> | string | null
    uniformSize?: StringNullableWithAggregatesFilter<"Athletes"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Athletes"> | Date | string
  }

  export type LeadersWhereInput = {
    AND?: LeadersWhereInput | LeadersWhereInput[]
    OR?: LeadersWhereInput[]
    NOT?: LeadersWhereInput | LeadersWhereInput[]
    id?: IntFilter<"Leaders"> | number
    enrollID?: IntFilter<"Leaders"> | number
    roles?: EnumLeaderRoleFilter<"Leaders"> | $Enums.LeaderRole
    phoneNumber?: StringFilter<"Leaders"> | string
    createdAt?: DateTimeFilter<"Leaders"> | Date | string
    enroll?: XOR<EnrollScalarRelationFilter, EnrollWhereInput>
    LeaderParticipat?: LeaderParticipatListRelationFilter
  }

  export type LeadersOrderByWithRelationInput = {
    id?: SortOrder
    enrollID?: SortOrder
    roles?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    enroll?: EnrollOrderByWithRelationInput
    LeaderParticipat?: LeaderParticipatOrderByRelationAggregateInput
  }

  export type LeadersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    enrollID?: number
    phoneNumber?: string
    AND?: LeadersWhereInput | LeadersWhereInput[]
    OR?: LeadersWhereInput[]
    NOT?: LeadersWhereInput | LeadersWhereInput[]
    roles?: EnumLeaderRoleFilter<"Leaders"> | $Enums.LeaderRole
    createdAt?: DateTimeFilter<"Leaders"> | Date | string
    enroll?: XOR<EnrollScalarRelationFilter, EnrollWhereInput>
    LeaderParticipat?: LeaderParticipatListRelationFilter
  }, "id" | "enrollID" | "phoneNumber">

  export type LeadersOrderByWithAggregationInput = {
    id?: SortOrder
    enrollID?: SortOrder
    roles?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    _count?: LeadersCountOrderByAggregateInput
    _avg?: LeadersAvgOrderByAggregateInput
    _max?: LeadersMaxOrderByAggregateInput
    _min?: LeadersMinOrderByAggregateInput
    _sum?: LeadersSumOrderByAggregateInput
  }

  export type LeadersScalarWhereWithAggregatesInput = {
    AND?: LeadersScalarWhereWithAggregatesInput | LeadersScalarWhereWithAggregatesInput[]
    OR?: LeadersScalarWhereWithAggregatesInput[]
    NOT?: LeadersScalarWhereWithAggregatesInput | LeadersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Leaders"> | number
    enrollID?: IntWithAggregatesFilter<"Leaders"> | number
    roles?: EnumLeaderRoleWithAggregatesFilter<"Leaders"> | $Enums.LeaderRole
    phoneNumber?: StringWithAggregatesFilter<"Leaders"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Leaders"> | Date | string
  }

  export type EventsWhereInput = {
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    id?: IntFilter<"Events"> | number
    name?: StringFilter<"Events"> | string
    date?: DateTimeFilter<"Events"> | Date | string
    createdAt?: DateTimeFilter<"Events"> | Date | string
    categories?: CategoriesListRelationFilter
    AthleteParticipat?: AthleteParticipatListRelationFilter
    LeaderParticipat?: LeaderParticipatListRelationFilter
    Sports_event_org?: Sports_event_orgListRelationFilter
  }

  export type EventsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    categories?: categoriesOrderByRelationAggregateInput
    AthleteParticipat?: AthleteParticipatOrderByRelationAggregateInput
    LeaderParticipat?: LeaderParticipatOrderByRelationAggregateInput
    Sports_event_org?: Sports_event_orgOrderByRelationAggregateInput
  }

  export type EventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    name?: StringFilter<"Events"> | string
    date?: DateTimeFilter<"Events"> | Date | string
    createdAt?: DateTimeFilter<"Events"> | Date | string
    categories?: CategoriesListRelationFilter
    AthleteParticipat?: AthleteParticipatListRelationFilter
    LeaderParticipat?: LeaderParticipatListRelationFilter
    Sports_event_org?: Sports_event_orgListRelationFilter
  }, "id">

  export type EventsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: EventsCountOrderByAggregateInput
    _avg?: EventsAvgOrderByAggregateInput
    _max?: EventsMaxOrderByAggregateInput
    _min?: EventsMinOrderByAggregateInput
    _sum?: EventsSumOrderByAggregateInput
  }

  export type EventsScalarWhereWithAggregatesInput = {
    AND?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    OR?: EventsScalarWhereWithAggregatesInput[]
    NOT?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Events"> | number
    name?: StringWithAggregatesFilter<"Events"> | string
    date?: DateTimeWithAggregatesFilter<"Events"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Events"> | Date | string
  }

  export type SportsWhereInput = {
    AND?: SportsWhereInput | SportsWhereInput[]
    OR?: SportsWhereInput[]
    NOT?: SportsWhereInput | SportsWhereInput[]
    id?: IntFilter<"Sports"> | number
    name?: StringFilter<"Sports"> | string
    createdAt?: DateTimeFilter<"Sports"> | Date | string
    categories?: CategoriesListRelationFilter
    AthleteParticipat?: AthleteParticipatListRelationFilter
    LeaderParticipat?: LeaderParticipatListRelationFilter
    Sports_event_org?: Sports_event_orgListRelationFilter
  }

  export type SportsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    categories?: categoriesOrderByRelationAggregateInput
    AthleteParticipat?: AthleteParticipatOrderByRelationAggregateInput
    LeaderParticipat?: LeaderParticipatOrderByRelationAggregateInput
    Sports_event_org?: Sports_event_orgOrderByRelationAggregateInput
  }

  export type SportsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SportsWhereInput | SportsWhereInput[]
    OR?: SportsWhereInput[]
    NOT?: SportsWhereInput | SportsWhereInput[]
    name?: StringFilter<"Sports"> | string
    createdAt?: DateTimeFilter<"Sports"> | Date | string
    categories?: CategoriesListRelationFilter
    AthleteParticipat?: AthleteParticipatListRelationFilter
    LeaderParticipat?: LeaderParticipatListRelationFilter
    Sports_event_org?: Sports_event_orgListRelationFilter
  }, "id">

  export type SportsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: SportsCountOrderByAggregateInput
    _avg?: SportsAvgOrderByAggregateInput
    _max?: SportsMaxOrderByAggregateInput
    _min?: SportsMinOrderByAggregateInput
    _sum?: SportsSumOrderByAggregateInput
  }

  export type SportsScalarWhereWithAggregatesInput = {
    AND?: SportsScalarWhereWithAggregatesInput | SportsScalarWhereWithAggregatesInput[]
    OR?: SportsScalarWhereWithAggregatesInput[]
    NOT?: SportsScalarWhereWithAggregatesInput | SportsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sports"> | number
    name?: StringWithAggregatesFilter<"Sports"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sports"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: IntFilter<"Organization"> | number
    name?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    AthleteParticipat?: AthleteParticipatListRelationFilter
    LeaderParticipat?: LeaderParticipatListRelationFilter
    Sports_event_org?: Sports_event_orgListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    AthleteParticipat?: AthleteParticipatOrderByRelationAggregateInput
    LeaderParticipat?: LeaderParticipatOrderByRelationAggregateInput
    Sports_event_org?: Sports_event_orgOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    AthleteParticipat?: AthleteParticipatListRelationFilter
    LeaderParticipat?: LeaderParticipatListRelationFilter
    Sports_event_org?: Sports_event_orgListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organization"> | number
    name?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    events_id?: IntFilter<"categories"> | number
    sportsID?: IntFilter<"categories"> | number
    category?: StringFilter<"categories"> | string
    createdAt?: DateTimeFilter<"categories"> | Date | string
    events?: XOR<EventsScalarRelationFilter, EventsWhereInput>
    sports?: XOR<SportsScalarRelationFilter, SportsWhereInput>
    AthleteParticipat?: AthleteParticipatListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    events_id?: SortOrder
    sportsID?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    events?: EventsOrderByWithRelationInput
    sports?: SportsOrderByWithRelationInput
    AthleteParticipat?: AthleteParticipatOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    events_id?: IntFilter<"categories"> | number
    sportsID?: IntFilter<"categories"> | number
    category?: StringFilter<"categories"> | string
    createdAt?: DateTimeFilter<"categories"> | Date | string
    events?: XOR<EventsScalarRelationFilter, EventsWhereInput>
    sports?: XOR<SportsScalarRelationFilter, SportsWhereInput>
    AthleteParticipat?: AthleteParticipatListRelationFilter
  }, "id">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    events_id?: SortOrder
    sportsID?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    events_id?: IntWithAggregatesFilter<"categories"> | number
    sportsID?: IntWithAggregatesFilter<"categories"> | number
    category?: StringWithAggregatesFilter<"categories"> | string
    createdAt?: DateTimeWithAggregatesFilter<"categories"> | Date | string
  }

  export type Sports_event_orgWhereInput = {
    AND?: Sports_event_orgWhereInput | Sports_event_orgWhereInput[]
    OR?: Sports_event_orgWhereInput[]
    NOT?: Sports_event_orgWhereInput | Sports_event_orgWhereInput[]
    id?: IntFilter<"Sports_event_org"> | number
    events_id?: IntFilter<"Sports_event_org"> | number
    sports_id?: IntFilter<"Sports_event_org"> | number
    organization_id?: IntFilter<"Sports_event_org"> | number
    createdAt?: DateTimeFilter<"Sports_event_org"> | Date | string
    events?: XOR<EventsScalarRelationFilter, EventsWhereInput>
    sports?: XOR<SportsScalarRelationFilter, SportsWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type Sports_event_orgOrderByWithRelationInput = {
    id?: SortOrder
    events_id?: SortOrder
    sports_id?: SortOrder
    organization_id?: SortOrder
    createdAt?: SortOrder
    events?: EventsOrderByWithRelationInput
    sports?: SportsOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type Sports_event_orgWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Sports_event_orgWhereInput | Sports_event_orgWhereInput[]
    OR?: Sports_event_orgWhereInput[]
    NOT?: Sports_event_orgWhereInput | Sports_event_orgWhereInput[]
    events_id?: IntFilter<"Sports_event_org"> | number
    sports_id?: IntFilter<"Sports_event_org"> | number
    organization_id?: IntFilter<"Sports_event_org"> | number
    createdAt?: DateTimeFilter<"Sports_event_org"> | Date | string
    events?: XOR<EventsScalarRelationFilter, EventsWhereInput>
    sports?: XOR<SportsScalarRelationFilter, SportsWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id">

  export type Sports_event_orgOrderByWithAggregationInput = {
    id?: SortOrder
    events_id?: SortOrder
    sports_id?: SortOrder
    organization_id?: SortOrder
    createdAt?: SortOrder
    _count?: Sports_event_orgCountOrderByAggregateInput
    _avg?: Sports_event_orgAvgOrderByAggregateInput
    _max?: Sports_event_orgMaxOrderByAggregateInput
    _min?: Sports_event_orgMinOrderByAggregateInput
    _sum?: Sports_event_orgSumOrderByAggregateInput
  }

  export type Sports_event_orgScalarWhereWithAggregatesInput = {
    AND?: Sports_event_orgScalarWhereWithAggregatesInput | Sports_event_orgScalarWhereWithAggregatesInput[]
    OR?: Sports_event_orgScalarWhereWithAggregatesInput[]
    NOT?: Sports_event_orgScalarWhereWithAggregatesInput | Sports_event_orgScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sports_event_org"> | number
    events_id?: IntWithAggregatesFilter<"Sports_event_org"> | number
    sports_id?: IntWithAggregatesFilter<"Sports_event_org"> | number
    organization_id?: IntWithAggregatesFilter<"Sports_event_org"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Sports_event_org"> | Date | string
  }

  export type AthleteParticipatWhereInput = {
    AND?: AthleteParticipatWhereInput | AthleteParticipatWhereInput[]
    OR?: AthleteParticipatWhereInput[]
    NOT?: AthleteParticipatWhereInput | AthleteParticipatWhereInput[]
    id?: IntFilter<"AthleteParticipat"> | number
    athletesID?: IntFilter<"AthleteParticipat"> | number
    eventsID?: IntFilter<"AthleteParticipat"> | number
    categoriesID?: IntFilter<"AthleteParticipat"> | number
    sportsID?: IntFilter<"AthleteParticipat"> | number
    organizationID?: IntFilter<"AthleteParticipat"> | number
    createdAt?: DateTimeFilter<"AthleteParticipat"> | Date | string
    athletes?: XOR<AthletesScalarRelationFilter, AthletesWhereInput>
    events?: XOR<EventsScalarRelationFilter, EventsWhereInput>
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    sports?: XOR<SportsScalarRelationFilter, SportsWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    Medals?: MedalsListRelationFilter
  }

  export type AthleteParticipatOrderByWithRelationInput = {
    id?: SortOrder
    athletesID?: SortOrder
    eventsID?: SortOrder
    categoriesID?: SortOrder
    sportsID?: SortOrder
    organizationID?: SortOrder
    createdAt?: SortOrder
    athletes?: AthletesOrderByWithRelationInput
    events?: EventsOrderByWithRelationInput
    categories?: categoriesOrderByWithRelationInput
    sports?: SportsOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
    Medals?: MedalsOrderByRelationAggregateInput
  }

  export type AthleteParticipatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AthleteParticipatWhereInput | AthleteParticipatWhereInput[]
    OR?: AthleteParticipatWhereInput[]
    NOT?: AthleteParticipatWhereInput | AthleteParticipatWhereInput[]
    athletesID?: IntFilter<"AthleteParticipat"> | number
    eventsID?: IntFilter<"AthleteParticipat"> | number
    categoriesID?: IntFilter<"AthleteParticipat"> | number
    sportsID?: IntFilter<"AthleteParticipat"> | number
    organizationID?: IntFilter<"AthleteParticipat"> | number
    createdAt?: DateTimeFilter<"AthleteParticipat"> | Date | string
    athletes?: XOR<AthletesScalarRelationFilter, AthletesWhereInput>
    events?: XOR<EventsScalarRelationFilter, EventsWhereInput>
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    sports?: XOR<SportsScalarRelationFilter, SportsWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    Medals?: MedalsListRelationFilter
  }, "id">

  export type AthleteParticipatOrderByWithAggregationInput = {
    id?: SortOrder
    athletesID?: SortOrder
    eventsID?: SortOrder
    categoriesID?: SortOrder
    sportsID?: SortOrder
    organizationID?: SortOrder
    createdAt?: SortOrder
    _count?: AthleteParticipatCountOrderByAggregateInput
    _avg?: AthleteParticipatAvgOrderByAggregateInput
    _max?: AthleteParticipatMaxOrderByAggregateInput
    _min?: AthleteParticipatMinOrderByAggregateInput
    _sum?: AthleteParticipatSumOrderByAggregateInput
  }

  export type AthleteParticipatScalarWhereWithAggregatesInput = {
    AND?: AthleteParticipatScalarWhereWithAggregatesInput | AthleteParticipatScalarWhereWithAggregatesInput[]
    OR?: AthleteParticipatScalarWhereWithAggregatesInput[]
    NOT?: AthleteParticipatScalarWhereWithAggregatesInput | AthleteParticipatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AthleteParticipat"> | number
    athletesID?: IntWithAggregatesFilter<"AthleteParticipat"> | number
    eventsID?: IntWithAggregatesFilter<"AthleteParticipat"> | number
    categoriesID?: IntWithAggregatesFilter<"AthleteParticipat"> | number
    sportsID?: IntWithAggregatesFilter<"AthleteParticipat"> | number
    organizationID?: IntWithAggregatesFilter<"AthleteParticipat"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AthleteParticipat"> | Date | string
  }

  export type LeaderParticipatWhereInput = {
    AND?: LeaderParticipatWhereInput | LeaderParticipatWhereInput[]
    OR?: LeaderParticipatWhereInput[]
    NOT?: LeaderParticipatWhereInput | LeaderParticipatWhereInput[]
    id?: IntFilter<"LeaderParticipat"> | number
    leadersID?: IntFilter<"LeaderParticipat"> | number
    eventsID?: IntFilter<"LeaderParticipat"> | number
    sportsID?: IntFilter<"LeaderParticipat"> | number
    organizationID?: IntFilter<"LeaderParticipat"> | number
    createdAt?: DateTimeFilter<"LeaderParticipat"> | Date | string
    leaders?: XOR<LeadersScalarRelationFilter, LeadersWhereInput>
    events?: XOR<EventsScalarRelationFilter, EventsWhereInput>
    sports?: XOR<SportsScalarRelationFilter, SportsWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type LeaderParticipatOrderByWithRelationInput = {
    id?: SortOrder
    leadersID?: SortOrder
    eventsID?: SortOrder
    sportsID?: SortOrder
    organizationID?: SortOrder
    createdAt?: SortOrder
    leaders?: LeadersOrderByWithRelationInput
    events?: EventsOrderByWithRelationInput
    sports?: SportsOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type LeaderParticipatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LeaderParticipatWhereInput | LeaderParticipatWhereInput[]
    OR?: LeaderParticipatWhereInput[]
    NOT?: LeaderParticipatWhereInput | LeaderParticipatWhereInput[]
    leadersID?: IntFilter<"LeaderParticipat"> | number
    eventsID?: IntFilter<"LeaderParticipat"> | number
    sportsID?: IntFilter<"LeaderParticipat"> | number
    organizationID?: IntFilter<"LeaderParticipat"> | number
    createdAt?: DateTimeFilter<"LeaderParticipat"> | Date | string
    leaders?: XOR<LeadersScalarRelationFilter, LeadersWhereInput>
    events?: XOR<EventsScalarRelationFilter, EventsWhereInput>
    sports?: XOR<SportsScalarRelationFilter, SportsWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id">

  export type LeaderParticipatOrderByWithAggregationInput = {
    id?: SortOrder
    leadersID?: SortOrder
    eventsID?: SortOrder
    sportsID?: SortOrder
    organizationID?: SortOrder
    createdAt?: SortOrder
    _count?: LeaderParticipatCountOrderByAggregateInput
    _avg?: LeaderParticipatAvgOrderByAggregateInput
    _max?: LeaderParticipatMaxOrderByAggregateInput
    _min?: LeaderParticipatMinOrderByAggregateInput
    _sum?: LeaderParticipatSumOrderByAggregateInput
  }

  export type LeaderParticipatScalarWhereWithAggregatesInput = {
    AND?: LeaderParticipatScalarWhereWithAggregatesInput | LeaderParticipatScalarWhereWithAggregatesInput[]
    OR?: LeaderParticipatScalarWhereWithAggregatesInput[]
    NOT?: LeaderParticipatScalarWhereWithAggregatesInput | LeaderParticipatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LeaderParticipat"> | number
    leadersID?: IntWithAggregatesFilter<"LeaderParticipat"> | number
    eventsID?: IntWithAggregatesFilter<"LeaderParticipat"> | number
    sportsID?: IntWithAggregatesFilter<"LeaderParticipat"> | number
    organizationID?: IntWithAggregatesFilter<"LeaderParticipat"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LeaderParticipat"> | Date | string
  }

  export type MedalsWhereInput = {
    AND?: MedalsWhereInput | MedalsWhereInput[]
    OR?: MedalsWhereInput[]
    NOT?: MedalsWhereInput | MedalsWhereInput[]
    id?: IntFilter<"Medals"> | number
    athletesParticipID?: IntFilter<"Medals"> | number
    medals_type?: EnumMedalTypeFilter<"Medals"> | $Enums.MedalType
    key_performance?: StringNullableFilter<"Medals"> | string | null
    createdAt?: DateTimeFilter<"Medals"> | Date | string
    athleteParticipat?: XOR<AthleteParticipatScalarRelationFilter, AthleteParticipatWhereInput>
  }

  export type MedalsOrderByWithRelationInput = {
    id?: SortOrder
    athletesParticipID?: SortOrder
    medals_type?: SortOrder
    key_performance?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    athleteParticipat?: AthleteParticipatOrderByWithRelationInput
  }

  export type MedalsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedalsWhereInput | MedalsWhereInput[]
    OR?: MedalsWhereInput[]
    NOT?: MedalsWhereInput | MedalsWhereInput[]
    athletesParticipID?: IntFilter<"Medals"> | number
    medals_type?: EnumMedalTypeFilter<"Medals"> | $Enums.MedalType
    key_performance?: StringNullableFilter<"Medals"> | string | null
    createdAt?: DateTimeFilter<"Medals"> | Date | string
    athleteParticipat?: XOR<AthleteParticipatScalarRelationFilter, AthleteParticipatWhereInput>
  }, "id">

  export type MedalsOrderByWithAggregationInput = {
    id?: SortOrder
    athletesParticipID?: SortOrder
    medals_type?: SortOrder
    key_performance?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MedalsCountOrderByAggregateInput
    _avg?: MedalsAvgOrderByAggregateInput
    _max?: MedalsMaxOrderByAggregateInput
    _min?: MedalsMinOrderByAggregateInput
    _sum?: MedalsSumOrderByAggregateInput
  }

  export type MedalsScalarWhereWithAggregatesInput = {
    AND?: MedalsScalarWhereWithAggregatesInput | MedalsScalarWhereWithAggregatesInput[]
    OR?: MedalsScalarWhereWithAggregatesInput[]
    NOT?: MedalsScalarWhereWithAggregatesInput | MedalsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Medals"> | number
    athletesParticipID?: IntWithAggregatesFilter<"Medals"> | number
    medals_type?: EnumMedalTypeWithAggregatesFilter<"Medals"> | $Enums.MedalType
    key_performance?: StringNullableWithAggregatesFilter<"Medals"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Medals"> | Date | string
  }

  export type UsersCreateInput = {
    username: string
    password: string
    userLevel?: number
    photoPath?: string | null
    createdAt?: Date | string
    Enroll?: EnrollCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    userID?: number
    username: string
    password: string
    userLevel?: number
    photoPath?: string | null
    createdAt?: Date | string
    Enroll?: EnrollUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userLevel?: IntFieldUpdateOperationsInput | number
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Enroll?: EnrollUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    userID?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userLevel?: IntFieldUpdateOperationsInput | number
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Enroll?: EnrollUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    userID?: number
    username: string
    password: string
    userLevel?: number
    photoPath?: string | null
    createdAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userLevel?: IntFieldUpdateOperationsInput | number
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    userID?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userLevel?: IntFieldUpdateOperationsInput | number
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollCreateInput = {
    name: string
    gender: string
    nationality: string
    dob: Date | string
    idDocType: $Enums.IdDocType
    address?: string | null
    photoPath?: string | null
    DocumentsPath?: string | null
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutEnrollInput
    athletes?: AthletesCreateNestedOneWithoutEnrollInput
    leaders?: LeadersCreateNestedOneWithoutEnrollInput
  }

  export type EnrollUncheckedCreateInput = {
    id?: number
    userID: number
    name: string
    gender: string
    nationality: string
    dob: Date | string
    idDocType: $Enums.IdDocType
    address?: string | null
    photoPath?: string | null
    DocumentsPath?: string | null
    createdAt?: Date | string
    athletes?: AthletesUncheckedCreateNestedOneWithoutEnrollInput
    leaders?: LeadersUncheckedCreateNestedOneWithoutEnrollInput
  }

  export type EnrollUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocType?: EnumIdDocTypeFieldUpdateOperationsInput | $Enums.IdDocType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutEnrollNestedInput
    athletes?: AthletesUpdateOneWithoutEnrollNestedInput
    leaders?: LeadersUpdateOneWithoutEnrollNestedInput
  }

  export type EnrollUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocType?: EnumIdDocTypeFieldUpdateOperationsInput | $Enums.IdDocType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    athletes?: AthletesUncheckedUpdateOneWithoutEnrollNestedInput
    leaders?: LeadersUncheckedUpdateOneWithoutEnrollNestedInput
  }

  export type EnrollCreateManyInput = {
    id?: number
    userID: number
    name: string
    gender: string
    nationality: string
    dob: Date | string
    idDocType: $Enums.IdDocType
    address?: string | null
    photoPath?: string | null
    DocumentsPath?: string | null
    createdAt?: Date | string
  }

  export type EnrollUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocType?: EnumIdDocTypeFieldUpdateOperationsInput | $Enums.IdDocType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocType?: EnumIdDocTypeFieldUpdateOperationsInput | $Enums.IdDocType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AthletesCreateInput = {
    class?: string | null
    uniformSize?: string | null
    createdAt?: Date | string
    enroll: EnrollCreateNestedOneWithoutAthletesInput
    AthleteParticipat?: AthleteParticipatCreateNestedManyWithoutAthletesInput
  }

  export type AthletesUncheckedCreateInput = {
    id?: number
    enrollID: number
    class?: string | null
    uniformSize?: string | null
    createdAt?: Date | string
    AthleteParticipat?: AthleteParticipatUncheckedCreateNestedManyWithoutAthletesInput
  }

  export type AthletesUpdateInput = {
    class?: NullableStringFieldUpdateOperationsInput | string | null
    uniformSize?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enroll?: EnrollUpdateOneRequiredWithoutAthletesNestedInput
    AthleteParticipat?: AthleteParticipatUpdateManyWithoutAthletesNestedInput
  }

  export type AthletesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollID?: IntFieldUpdateOperationsInput | number
    class?: NullableStringFieldUpdateOperationsInput | string | null
    uniformSize?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AthleteParticipat?: AthleteParticipatUncheckedUpdateManyWithoutAthletesNestedInput
  }

  export type AthletesCreateManyInput = {
    id?: number
    enrollID: number
    class?: string | null
    uniformSize?: string | null
    createdAt?: Date | string
  }

  export type AthletesUpdateManyMutationInput = {
    class?: NullableStringFieldUpdateOperationsInput | string | null
    uniformSize?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AthletesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollID?: IntFieldUpdateOperationsInput | number
    class?: NullableStringFieldUpdateOperationsInput | string | null
    uniformSize?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadersCreateInput = {
    roles: $Enums.LeaderRole
    phoneNumber: string
    createdAt?: Date | string
    enroll: EnrollCreateNestedOneWithoutLeadersInput
    LeaderParticipat?: LeaderParticipatCreateNestedManyWithoutLeadersInput
  }

  export type LeadersUncheckedCreateInput = {
    id?: number
    enrollID: number
    roles: $Enums.LeaderRole
    phoneNumber: string
    createdAt?: Date | string
    LeaderParticipat?: LeaderParticipatUncheckedCreateNestedManyWithoutLeadersInput
  }

  export type LeadersUpdateInput = {
    roles?: EnumLeaderRoleFieldUpdateOperationsInput | $Enums.LeaderRole
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enroll?: EnrollUpdateOneRequiredWithoutLeadersNestedInput
    LeaderParticipat?: LeaderParticipatUpdateManyWithoutLeadersNestedInput
  }

  export type LeadersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollID?: IntFieldUpdateOperationsInput | number
    roles?: EnumLeaderRoleFieldUpdateOperationsInput | $Enums.LeaderRole
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    LeaderParticipat?: LeaderParticipatUncheckedUpdateManyWithoutLeadersNestedInput
  }

  export type LeadersCreateManyInput = {
    id?: number
    enrollID: number
    roles: $Enums.LeaderRole
    phoneNumber: string
    createdAt?: Date | string
  }

  export type LeadersUpdateManyMutationInput = {
    roles?: EnumLeaderRoleFieldUpdateOperationsInput | $Enums.LeaderRole
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollID?: IntFieldUpdateOperationsInput | number
    roles?: EnumLeaderRoleFieldUpdateOperationsInput | $Enums.LeaderRole
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsCreateInput = {
    name: string
    date: Date | string
    createdAt?: Date | string
    categories?: categoriesCreateNestedManyWithoutEventsInput
    AthleteParticipat?: AthleteParticipatCreateNestedManyWithoutEventsInput
    LeaderParticipat?: LeaderParticipatCreateNestedManyWithoutEventsInput
    Sports_event_org?: Sports_event_orgCreateNestedManyWithoutEventsInput
  }

  export type EventsUncheckedCreateInput = {
    id?: number
    name: string
    date: Date | string
    createdAt?: Date | string
    categories?: categoriesUncheckedCreateNestedManyWithoutEventsInput
    AthleteParticipat?: AthleteParticipatUncheckedCreateNestedManyWithoutEventsInput
    LeaderParticipat?: LeaderParticipatUncheckedCreateNestedManyWithoutEventsInput
    Sports_event_org?: Sports_event_orgUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateManyWithoutEventsNestedInput
    AthleteParticipat?: AthleteParticipatUpdateManyWithoutEventsNestedInput
    LeaderParticipat?: LeaderParticipatUpdateManyWithoutEventsNestedInput
    Sports_event_org?: Sports_event_orgUpdateManyWithoutEventsNestedInput
  }

  export type EventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUncheckedUpdateManyWithoutEventsNestedInput
    AthleteParticipat?: AthleteParticipatUncheckedUpdateManyWithoutEventsNestedInput
    LeaderParticipat?: LeaderParticipatUncheckedUpdateManyWithoutEventsNestedInput
    Sports_event_org?: Sports_event_orgUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type EventsCreateManyInput = {
    id?: number
    name: string
    date: Date | string
    createdAt?: Date | string
  }

  export type EventsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SportsCreateInput = {
    name: string
    createdAt?: Date | string
    categories?: categoriesCreateNestedManyWithoutSportsInput
    AthleteParticipat?: AthleteParticipatCreateNestedManyWithoutSportsInput
    LeaderParticipat?: LeaderParticipatCreateNestedManyWithoutSportsInput
    Sports_event_org?: Sports_event_orgCreateNestedManyWithoutSportsInput
  }

  export type SportsUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    categories?: categoriesUncheckedCreateNestedManyWithoutSportsInput
    AthleteParticipat?: AthleteParticipatUncheckedCreateNestedManyWithoutSportsInput
    LeaderParticipat?: LeaderParticipatUncheckedCreateNestedManyWithoutSportsInput
    Sports_event_org?: Sports_event_orgUncheckedCreateNestedManyWithoutSportsInput
  }

  export type SportsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateManyWithoutSportsNestedInput
    AthleteParticipat?: AthleteParticipatUpdateManyWithoutSportsNestedInput
    LeaderParticipat?: LeaderParticipatUpdateManyWithoutSportsNestedInput
    Sports_event_org?: Sports_event_orgUpdateManyWithoutSportsNestedInput
  }

  export type SportsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUncheckedUpdateManyWithoutSportsNestedInput
    AthleteParticipat?: AthleteParticipatUncheckedUpdateManyWithoutSportsNestedInput
    LeaderParticipat?: LeaderParticipatUncheckedUpdateManyWithoutSportsNestedInput
    Sports_event_org?: Sports_event_orgUncheckedUpdateManyWithoutSportsNestedInput
  }

  export type SportsCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type SportsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SportsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    name: string
    createdAt?: Date | string
    AthleteParticipat?: AthleteParticipatCreateNestedManyWithoutOrganizationInput
    LeaderParticipat?: LeaderParticipatCreateNestedManyWithoutOrganizationInput
    Sports_event_org?: Sports_event_orgCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    AthleteParticipat?: AthleteParticipatUncheckedCreateNestedManyWithoutOrganizationInput
    LeaderParticipat?: LeaderParticipatUncheckedCreateNestedManyWithoutOrganizationInput
    Sports_event_org?: Sports_event_orgUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AthleteParticipat?: AthleteParticipatUpdateManyWithoutOrganizationNestedInput
    LeaderParticipat?: LeaderParticipatUpdateManyWithoutOrganizationNestedInput
    Sports_event_org?: Sports_event_orgUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AthleteParticipat?: AthleteParticipatUncheckedUpdateManyWithoutOrganizationNestedInput
    LeaderParticipat?: LeaderParticipatUncheckedUpdateManyWithoutOrganizationNestedInput
    Sports_event_org?: Sports_event_orgUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesCreateInput = {
    category: string
    createdAt?: Date | string
    events: EventsCreateNestedOneWithoutCategoriesInput
    sports: SportsCreateNestedOneWithoutCategoriesInput
    AthleteParticipat?: AthleteParticipatCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    events_id: number
    sportsID: number
    category: string
    createdAt?: Date | string
    AthleteParticipat?: AthleteParticipatUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateOneRequiredWithoutCategoriesNestedInput
    sports?: SportsUpdateOneRequiredWithoutCategoriesNestedInput
    AthleteParticipat?: AthleteParticipatUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    events_id?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AthleteParticipat?: AthleteParticipatUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    events_id: number
    sportsID: number
    category: string
    createdAt?: Date | string
  }

  export type categoriesUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    events_id?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sports_event_orgCreateInput = {
    createdAt?: Date | string
    events: EventsCreateNestedOneWithoutSports_event_orgInput
    sports: SportsCreateNestedOneWithoutSports_event_orgInput
    organization: OrganizationCreateNestedOneWithoutSports_event_orgInput
  }

  export type Sports_event_orgUncheckedCreateInput = {
    id?: number
    events_id: number
    sports_id: number
    organization_id: number
    createdAt?: Date | string
  }

  export type Sports_event_orgUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateOneRequiredWithoutSports_event_orgNestedInput
    sports?: SportsUpdateOneRequiredWithoutSports_event_orgNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutSports_event_orgNestedInput
  }

  export type Sports_event_orgUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    events_id?: IntFieldUpdateOperationsInput | number
    sports_id?: IntFieldUpdateOperationsInput | number
    organization_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sports_event_orgCreateManyInput = {
    id?: number
    events_id: number
    sports_id: number
    organization_id: number
    createdAt?: Date | string
  }

  export type Sports_event_orgUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sports_event_orgUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    events_id?: IntFieldUpdateOperationsInput | number
    sports_id?: IntFieldUpdateOperationsInput | number
    organization_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AthleteParticipatCreateInput = {
    createdAt?: Date | string
    athletes: AthletesCreateNestedOneWithoutAthleteParticipatInput
    events: EventsCreateNestedOneWithoutAthleteParticipatInput
    categories: categoriesCreateNestedOneWithoutAthleteParticipatInput
    sports: SportsCreateNestedOneWithoutAthleteParticipatInput
    organization: OrganizationCreateNestedOneWithoutAthleteParticipatInput
    Medals?: MedalsCreateNestedManyWithoutAthleteParticipatInput
  }

  export type AthleteParticipatUncheckedCreateInput = {
    id?: number
    athletesID: number
    eventsID: number
    categoriesID: number
    sportsID: number
    organizationID: number
    createdAt?: Date | string
    Medals?: MedalsUncheckedCreateNestedManyWithoutAthleteParticipatInput
  }

  export type AthleteParticipatUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    athletes?: AthletesUpdateOneRequiredWithoutAthleteParticipatNestedInput
    events?: EventsUpdateOneRequiredWithoutAthleteParticipatNestedInput
    categories?: categoriesUpdateOneRequiredWithoutAthleteParticipatNestedInput
    sports?: SportsUpdateOneRequiredWithoutAthleteParticipatNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutAthleteParticipatNestedInput
    Medals?: MedalsUpdateManyWithoutAthleteParticipatNestedInput
  }

  export type AthleteParticipatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    athletesID?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    categoriesID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Medals?: MedalsUncheckedUpdateManyWithoutAthleteParticipatNestedInput
  }

  export type AthleteParticipatCreateManyInput = {
    id?: number
    athletesID: number
    eventsID: number
    categoriesID: number
    sportsID: number
    organizationID: number
    createdAt?: Date | string
  }

  export type AthleteParticipatUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AthleteParticipatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    athletesID?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    categoriesID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderParticipatCreateInput = {
    createdAt?: Date | string
    leaders: LeadersCreateNestedOneWithoutLeaderParticipatInput
    events: EventsCreateNestedOneWithoutLeaderParticipatInput
    sports: SportsCreateNestedOneWithoutLeaderParticipatInput
    organization: OrganizationCreateNestedOneWithoutLeaderParticipatInput
  }

  export type LeaderParticipatUncheckedCreateInput = {
    id?: number
    leadersID: number
    eventsID: number
    sportsID: number
    organizationID: number
    createdAt?: Date | string
  }

  export type LeaderParticipatUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaders?: LeadersUpdateOneRequiredWithoutLeaderParticipatNestedInput
    events?: EventsUpdateOneRequiredWithoutLeaderParticipatNestedInput
    sports?: SportsUpdateOneRequiredWithoutLeaderParticipatNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutLeaderParticipatNestedInput
  }

  export type LeaderParticipatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadersID?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderParticipatCreateManyInput = {
    id?: number
    leadersID: number
    eventsID: number
    sportsID: number
    organizationID: number
    createdAt?: Date | string
  }

  export type LeaderParticipatUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderParticipatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadersID?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedalsCreateInput = {
    medals_type: $Enums.MedalType
    key_performance?: string | null
    createdAt?: Date | string
    athleteParticipat: AthleteParticipatCreateNestedOneWithoutMedalsInput
  }

  export type MedalsUncheckedCreateInput = {
    id?: number
    athletesParticipID: number
    medals_type: $Enums.MedalType
    key_performance?: string | null
    createdAt?: Date | string
  }

  export type MedalsUpdateInput = {
    medals_type?: EnumMedalTypeFieldUpdateOperationsInput | $Enums.MedalType
    key_performance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    athleteParticipat?: AthleteParticipatUpdateOneRequiredWithoutMedalsNestedInput
  }

  export type MedalsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    athletesParticipID?: IntFieldUpdateOperationsInput | number
    medals_type?: EnumMedalTypeFieldUpdateOperationsInput | $Enums.MedalType
    key_performance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedalsCreateManyInput = {
    id?: number
    athletesParticipID: number
    medals_type: $Enums.MedalType
    key_performance?: string | null
    createdAt?: Date | string
  }

  export type MedalsUpdateManyMutationInput = {
    medals_type?: EnumMedalTypeFieldUpdateOperationsInput | $Enums.MedalType
    key_performance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedalsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    athletesParticipID?: IntFieldUpdateOperationsInput | number
    medals_type?: EnumMedalTypeFieldUpdateOperationsInput | $Enums.MedalType
    key_performance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnrollListRelationFilter = {
    every?: EnrollWhereInput
    some?: EnrollWhereInput
    none?: EnrollWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EnrollOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    userID?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userLevel?: SortOrder
    photoPath?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    userID?: SortOrder
    userLevel?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    userID?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userLevel?: SortOrder
    photoPath?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    userID?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userLevel?: SortOrder
    photoPath?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    userID?: SortOrder
    userLevel?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumIdDocTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IdDocType | EnumIdDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IdDocType[] | ListEnumIdDocTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IdDocType[] | ListEnumIdDocTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIdDocTypeFilter<$PrismaModel> | $Enums.IdDocType
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type AthletesNullableScalarRelationFilter = {
    is?: AthletesWhereInput | null
    isNot?: AthletesWhereInput | null
  }

  export type LeadersNullableScalarRelationFilter = {
    is?: LeadersWhereInput | null
    isNot?: LeadersWhereInput | null
  }

  export type EnrollCountOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    dob?: SortOrder
    idDocType?: SortOrder
    address?: SortOrder
    photoPath?: SortOrder
    DocumentsPath?: SortOrder
    createdAt?: SortOrder
  }

  export type EnrollAvgOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
  }

  export type EnrollMaxOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    dob?: SortOrder
    idDocType?: SortOrder
    address?: SortOrder
    photoPath?: SortOrder
    DocumentsPath?: SortOrder
    createdAt?: SortOrder
  }

  export type EnrollMinOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    dob?: SortOrder
    idDocType?: SortOrder
    address?: SortOrder
    photoPath?: SortOrder
    DocumentsPath?: SortOrder
    createdAt?: SortOrder
  }

  export type EnrollSumOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
  }

  export type EnumIdDocTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IdDocType | EnumIdDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IdDocType[] | ListEnumIdDocTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IdDocType[] | ListEnumIdDocTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIdDocTypeWithAggregatesFilter<$PrismaModel> | $Enums.IdDocType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIdDocTypeFilter<$PrismaModel>
    _max?: NestedEnumIdDocTypeFilter<$PrismaModel>
  }

  export type EnrollScalarRelationFilter = {
    is?: EnrollWhereInput
    isNot?: EnrollWhereInput
  }

  export type AthleteParticipatListRelationFilter = {
    every?: AthleteParticipatWhereInput
    some?: AthleteParticipatWhereInput
    none?: AthleteParticipatWhereInput
  }

  export type AthleteParticipatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AthletesCountOrderByAggregateInput = {
    id?: SortOrder
    enrollID?: SortOrder
    class?: SortOrder
    uniformSize?: SortOrder
    createdAt?: SortOrder
  }

  export type AthletesAvgOrderByAggregateInput = {
    id?: SortOrder
    enrollID?: SortOrder
  }

  export type AthletesMaxOrderByAggregateInput = {
    id?: SortOrder
    enrollID?: SortOrder
    class?: SortOrder
    uniformSize?: SortOrder
    createdAt?: SortOrder
  }

  export type AthletesMinOrderByAggregateInput = {
    id?: SortOrder
    enrollID?: SortOrder
    class?: SortOrder
    uniformSize?: SortOrder
    createdAt?: SortOrder
  }

  export type AthletesSumOrderByAggregateInput = {
    id?: SortOrder
    enrollID?: SortOrder
  }

  export type EnumLeaderRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaderRole | EnumLeaderRoleFieldRefInput<$PrismaModel>
    in?: $Enums.LeaderRole[] | ListEnumLeaderRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaderRole[] | ListEnumLeaderRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaderRoleFilter<$PrismaModel> | $Enums.LeaderRole
  }

  export type LeaderParticipatListRelationFilter = {
    every?: LeaderParticipatWhereInput
    some?: LeaderParticipatWhereInput
    none?: LeaderParticipatWhereInput
  }

  export type LeaderParticipatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadersCountOrderByAggregateInput = {
    id?: SortOrder
    enrollID?: SortOrder
    roles?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadersAvgOrderByAggregateInput = {
    id?: SortOrder
    enrollID?: SortOrder
  }

  export type LeadersMaxOrderByAggregateInput = {
    id?: SortOrder
    enrollID?: SortOrder
    roles?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadersMinOrderByAggregateInput = {
    id?: SortOrder
    enrollID?: SortOrder
    roles?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadersSumOrderByAggregateInput = {
    id?: SortOrder
    enrollID?: SortOrder
  }

  export type EnumLeaderRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaderRole | EnumLeaderRoleFieldRefInput<$PrismaModel>
    in?: $Enums.LeaderRole[] | ListEnumLeaderRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaderRole[] | ListEnumLeaderRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaderRoleWithAggregatesFilter<$PrismaModel> | $Enums.LeaderRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaderRoleFilter<$PrismaModel>
    _max?: NestedEnumLeaderRoleFilter<$PrismaModel>
  }

  export type CategoriesListRelationFilter = {
    every?: categoriesWhereInput
    some?: categoriesWhereInput
    none?: categoriesWhereInput
  }

  export type Sports_event_orgListRelationFilter = {
    every?: Sports_event_orgWhereInput
    some?: Sports_event_orgWhereInput
    none?: Sports_event_orgWhereInput
  }

  export type categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Sports_event_orgOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type EventsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type EventsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type EventsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SportsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SportsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SportsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SportsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SportsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventsScalarRelationFilter = {
    is?: EventsWhereInput
    isNot?: EventsWhereInput
  }

  export type SportsScalarRelationFilter = {
    is?: SportsWhereInput
    isNot?: SportsWhereInput
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    events_id?: SortOrder
    sportsID?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    events_id?: SortOrder
    sportsID?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    events_id?: SortOrder
    sportsID?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    events_id?: SortOrder
    sportsID?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
    events_id?: SortOrder
    sportsID?: SortOrder
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type Sports_event_orgCountOrderByAggregateInput = {
    id?: SortOrder
    events_id?: SortOrder
    sports_id?: SortOrder
    organization_id?: SortOrder
    createdAt?: SortOrder
  }

  export type Sports_event_orgAvgOrderByAggregateInput = {
    id?: SortOrder
    events_id?: SortOrder
    sports_id?: SortOrder
    organization_id?: SortOrder
  }

  export type Sports_event_orgMaxOrderByAggregateInput = {
    id?: SortOrder
    events_id?: SortOrder
    sports_id?: SortOrder
    organization_id?: SortOrder
    createdAt?: SortOrder
  }

  export type Sports_event_orgMinOrderByAggregateInput = {
    id?: SortOrder
    events_id?: SortOrder
    sports_id?: SortOrder
    organization_id?: SortOrder
    createdAt?: SortOrder
  }

  export type Sports_event_orgSumOrderByAggregateInput = {
    id?: SortOrder
    events_id?: SortOrder
    sports_id?: SortOrder
    organization_id?: SortOrder
  }

  export type AthletesScalarRelationFilter = {
    is?: AthletesWhereInput
    isNot?: AthletesWhereInput
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type MedalsListRelationFilter = {
    every?: MedalsWhereInput
    some?: MedalsWhereInput
    none?: MedalsWhereInput
  }

  export type MedalsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AthleteParticipatCountOrderByAggregateInput = {
    id?: SortOrder
    athletesID?: SortOrder
    eventsID?: SortOrder
    categoriesID?: SortOrder
    sportsID?: SortOrder
    organizationID?: SortOrder
    createdAt?: SortOrder
  }

  export type AthleteParticipatAvgOrderByAggregateInput = {
    id?: SortOrder
    athletesID?: SortOrder
    eventsID?: SortOrder
    categoriesID?: SortOrder
    sportsID?: SortOrder
    organizationID?: SortOrder
  }

  export type AthleteParticipatMaxOrderByAggregateInput = {
    id?: SortOrder
    athletesID?: SortOrder
    eventsID?: SortOrder
    categoriesID?: SortOrder
    sportsID?: SortOrder
    organizationID?: SortOrder
    createdAt?: SortOrder
  }

  export type AthleteParticipatMinOrderByAggregateInput = {
    id?: SortOrder
    athletesID?: SortOrder
    eventsID?: SortOrder
    categoriesID?: SortOrder
    sportsID?: SortOrder
    organizationID?: SortOrder
    createdAt?: SortOrder
  }

  export type AthleteParticipatSumOrderByAggregateInput = {
    id?: SortOrder
    athletesID?: SortOrder
    eventsID?: SortOrder
    categoriesID?: SortOrder
    sportsID?: SortOrder
    organizationID?: SortOrder
  }

  export type LeadersScalarRelationFilter = {
    is?: LeadersWhereInput
    isNot?: LeadersWhereInput
  }

  export type LeaderParticipatCountOrderByAggregateInput = {
    id?: SortOrder
    leadersID?: SortOrder
    eventsID?: SortOrder
    sportsID?: SortOrder
    organizationID?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaderParticipatAvgOrderByAggregateInput = {
    id?: SortOrder
    leadersID?: SortOrder
    eventsID?: SortOrder
    sportsID?: SortOrder
    organizationID?: SortOrder
  }

  export type LeaderParticipatMaxOrderByAggregateInput = {
    id?: SortOrder
    leadersID?: SortOrder
    eventsID?: SortOrder
    sportsID?: SortOrder
    organizationID?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaderParticipatMinOrderByAggregateInput = {
    id?: SortOrder
    leadersID?: SortOrder
    eventsID?: SortOrder
    sportsID?: SortOrder
    organizationID?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaderParticipatSumOrderByAggregateInput = {
    id?: SortOrder
    leadersID?: SortOrder
    eventsID?: SortOrder
    sportsID?: SortOrder
    organizationID?: SortOrder
  }

  export type EnumMedalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MedalType | EnumMedalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MedalType[] | ListEnumMedalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedalType[] | ListEnumMedalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMedalTypeFilter<$PrismaModel> | $Enums.MedalType
  }

  export type AthleteParticipatScalarRelationFilter = {
    is?: AthleteParticipatWhereInput
    isNot?: AthleteParticipatWhereInput
  }

  export type MedalsCountOrderByAggregateInput = {
    id?: SortOrder
    athletesParticipID?: SortOrder
    medals_type?: SortOrder
    key_performance?: SortOrder
    createdAt?: SortOrder
  }

  export type MedalsAvgOrderByAggregateInput = {
    id?: SortOrder
    athletesParticipID?: SortOrder
  }

  export type MedalsMaxOrderByAggregateInput = {
    id?: SortOrder
    athletesParticipID?: SortOrder
    medals_type?: SortOrder
    key_performance?: SortOrder
    createdAt?: SortOrder
  }

  export type MedalsMinOrderByAggregateInput = {
    id?: SortOrder
    athletesParticipID?: SortOrder
    medals_type?: SortOrder
    key_performance?: SortOrder
    createdAt?: SortOrder
  }

  export type MedalsSumOrderByAggregateInput = {
    id?: SortOrder
    athletesParticipID?: SortOrder
  }

  export type EnumMedalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MedalType | EnumMedalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MedalType[] | ListEnumMedalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedalType[] | ListEnumMedalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMedalTypeWithAggregatesFilter<$PrismaModel> | $Enums.MedalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMedalTypeFilter<$PrismaModel>
    _max?: NestedEnumMedalTypeFilter<$PrismaModel>
  }

  export type EnrollCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollCreateWithoutUserInput, EnrollUncheckedCreateWithoutUserInput> | EnrollCreateWithoutUserInput[] | EnrollUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollCreateOrConnectWithoutUserInput | EnrollCreateOrConnectWithoutUserInput[]
    createMany?: EnrollCreateManyUserInputEnvelope
    connect?: EnrollWhereUniqueInput | EnrollWhereUniqueInput[]
  }

  export type EnrollUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollCreateWithoutUserInput, EnrollUncheckedCreateWithoutUserInput> | EnrollCreateWithoutUserInput[] | EnrollUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollCreateOrConnectWithoutUserInput | EnrollCreateOrConnectWithoutUserInput[]
    createMany?: EnrollCreateManyUserInputEnvelope
    connect?: EnrollWhereUniqueInput | EnrollWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnrollUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollCreateWithoutUserInput, EnrollUncheckedCreateWithoutUserInput> | EnrollCreateWithoutUserInput[] | EnrollUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollCreateOrConnectWithoutUserInput | EnrollCreateOrConnectWithoutUserInput[]
    upsert?: EnrollUpsertWithWhereUniqueWithoutUserInput | EnrollUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollCreateManyUserInputEnvelope
    set?: EnrollWhereUniqueInput | EnrollWhereUniqueInput[]
    disconnect?: EnrollWhereUniqueInput | EnrollWhereUniqueInput[]
    delete?: EnrollWhereUniqueInput | EnrollWhereUniqueInput[]
    connect?: EnrollWhereUniqueInput | EnrollWhereUniqueInput[]
    update?: EnrollUpdateWithWhereUniqueWithoutUserInput | EnrollUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollUpdateManyWithWhereWithoutUserInput | EnrollUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollScalarWhereInput | EnrollScalarWhereInput[]
  }

  export type EnrollUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollCreateWithoutUserInput, EnrollUncheckedCreateWithoutUserInput> | EnrollCreateWithoutUserInput[] | EnrollUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollCreateOrConnectWithoutUserInput | EnrollCreateOrConnectWithoutUserInput[]
    upsert?: EnrollUpsertWithWhereUniqueWithoutUserInput | EnrollUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollCreateManyUserInputEnvelope
    set?: EnrollWhereUniqueInput | EnrollWhereUniqueInput[]
    disconnect?: EnrollWhereUniqueInput | EnrollWhereUniqueInput[]
    delete?: EnrollWhereUniqueInput | EnrollWhereUniqueInput[]
    connect?: EnrollWhereUniqueInput | EnrollWhereUniqueInput[]
    update?: EnrollUpdateWithWhereUniqueWithoutUserInput | EnrollUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollUpdateManyWithWhereWithoutUserInput | EnrollUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollScalarWhereInput | EnrollScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutEnrollInput = {
    create?: XOR<UsersCreateWithoutEnrollInput, UsersUncheckedCreateWithoutEnrollInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEnrollInput
    connect?: UsersWhereUniqueInput
  }

  export type AthletesCreateNestedOneWithoutEnrollInput = {
    create?: XOR<AthletesCreateWithoutEnrollInput, AthletesUncheckedCreateWithoutEnrollInput>
    connectOrCreate?: AthletesCreateOrConnectWithoutEnrollInput
    connect?: AthletesWhereUniqueInput
  }

  export type LeadersCreateNestedOneWithoutEnrollInput = {
    create?: XOR<LeadersCreateWithoutEnrollInput, LeadersUncheckedCreateWithoutEnrollInput>
    connectOrCreate?: LeadersCreateOrConnectWithoutEnrollInput
    connect?: LeadersWhereUniqueInput
  }

  export type AthletesUncheckedCreateNestedOneWithoutEnrollInput = {
    create?: XOR<AthletesCreateWithoutEnrollInput, AthletesUncheckedCreateWithoutEnrollInput>
    connectOrCreate?: AthletesCreateOrConnectWithoutEnrollInput
    connect?: AthletesWhereUniqueInput
  }

  export type LeadersUncheckedCreateNestedOneWithoutEnrollInput = {
    create?: XOR<LeadersCreateWithoutEnrollInput, LeadersUncheckedCreateWithoutEnrollInput>
    connectOrCreate?: LeadersCreateOrConnectWithoutEnrollInput
    connect?: LeadersWhereUniqueInput
  }

  export type EnumIdDocTypeFieldUpdateOperationsInput = {
    set?: $Enums.IdDocType
  }

  export type UsersUpdateOneRequiredWithoutEnrollNestedInput = {
    create?: XOR<UsersCreateWithoutEnrollInput, UsersUncheckedCreateWithoutEnrollInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEnrollInput
    upsert?: UsersUpsertWithoutEnrollInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutEnrollInput, UsersUpdateWithoutEnrollInput>, UsersUncheckedUpdateWithoutEnrollInput>
  }

  export type AthletesUpdateOneWithoutEnrollNestedInput = {
    create?: XOR<AthletesCreateWithoutEnrollInput, AthletesUncheckedCreateWithoutEnrollInput>
    connectOrCreate?: AthletesCreateOrConnectWithoutEnrollInput
    upsert?: AthletesUpsertWithoutEnrollInput
    disconnect?: AthletesWhereInput | boolean
    delete?: AthletesWhereInput | boolean
    connect?: AthletesWhereUniqueInput
    update?: XOR<XOR<AthletesUpdateToOneWithWhereWithoutEnrollInput, AthletesUpdateWithoutEnrollInput>, AthletesUncheckedUpdateWithoutEnrollInput>
  }

  export type LeadersUpdateOneWithoutEnrollNestedInput = {
    create?: XOR<LeadersCreateWithoutEnrollInput, LeadersUncheckedCreateWithoutEnrollInput>
    connectOrCreate?: LeadersCreateOrConnectWithoutEnrollInput
    upsert?: LeadersUpsertWithoutEnrollInput
    disconnect?: LeadersWhereInput | boolean
    delete?: LeadersWhereInput | boolean
    connect?: LeadersWhereUniqueInput
    update?: XOR<XOR<LeadersUpdateToOneWithWhereWithoutEnrollInput, LeadersUpdateWithoutEnrollInput>, LeadersUncheckedUpdateWithoutEnrollInput>
  }

  export type AthletesUncheckedUpdateOneWithoutEnrollNestedInput = {
    create?: XOR<AthletesCreateWithoutEnrollInput, AthletesUncheckedCreateWithoutEnrollInput>
    connectOrCreate?: AthletesCreateOrConnectWithoutEnrollInput
    upsert?: AthletesUpsertWithoutEnrollInput
    disconnect?: AthletesWhereInput | boolean
    delete?: AthletesWhereInput | boolean
    connect?: AthletesWhereUniqueInput
    update?: XOR<XOR<AthletesUpdateToOneWithWhereWithoutEnrollInput, AthletesUpdateWithoutEnrollInput>, AthletesUncheckedUpdateWithoutEnrollInput>
  }

  export type LeadersUncheckedUpdateOneWithoutEnrollNestedInput = {
    create?: XOR<LeadersCreateWithoutEnrollInput, LeadersUncheckedCreateWithoutEnrollInput>
    connectOrCreate?: LeadersCreateOrConnectWithoutEnrollInput
    upsert?: LeadersUpsertWithoutEnrollInput
    disconnect?: LeadersWhereInput | boolean
    delete?: LeadersWhereInput | boolean
    connect?: LeadersWhereUniqueInput
    update?: XOR<XOR<LeadersUpdateToOneWithWhereWithoutEnrollInput, LeadersUpdateWithoutEnrollInput>, LeadersUncheckedUpdateWithoutEnrollInput>
  }

  export type EnrollCreateNestedOneWithoutAthletesInput = {
    create?: XOR<EnrollCreateWithoutAthletesInput, EnrollUncheckedCreateWithoutAthletesInput>
    connectOrCreate?: EnrollCreateOrConnectWithoutAthletesInput
    connect?: EnrollWhereUniqueInput
  }

  export type AthleteParticipatCreateNestedManyWithoutAthletesInput = {
    create?: XOR<AthleteParticipatCreateWithoutAthletesInput, AthleteParticipatUncheckedCreateWithoutAthletesInput> | AthleteParticipatCreateWithoutAthletesInput[] | AthleteParticipatUncheckedCreateWithoutAthletesInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutAthletesInput | AthleteParticipatCreateOrConnectWithoutAthletesInput[]
    createMany?: AthleteParticipatCreateManyAthletesInputEnvelope
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
  }

  export type AthleteParticipatUncheckedCreateNestedManyWithoutAthletesInput = {
    create?: XOR<AthleteParticipatCreateWithoutAthletesInput, AthleteParticipatUncheckedCreateWithoutAthletesInput> | AthleteParticipatCreateWithoutAthletesInput[] | AthleteParticipatUncheckedCreateWithoutAthletesInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutAthletesInput | AthleteParticipatCreateOrConnectWithoutAthletesInput[]
    createMany?: AthleteParticipatCreateManyAthletesInputEnvelope
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
  }

  export type EnrollUpdateOneRequiredWithoutAthletesNestedInput = {
    create?: XOR<EnrollCreateWithoutAthletesInput, EnrollUncheckedCreateWithoutAthletesInput>
    connectOrCreate?: EnrollCreateOrConnectWithoutAthletesInput
    upsert?: EnrollUpsertWithoutAthletesInput
    connect?: EnrollWhereUniqueInput
    update?: XOR<XOR<EnrollUpdateToOneWithWhereWithoutAthletesInput, EnrollUpdateWithoutAthletesInput>, EnrollUncheckedUpdateWithoutAthletesInput>
  }

  export type AthleteParticipatUpdateManyWithoutAthletesNestedInput = {
    create?: XOR<AthleteParticipatCreateWithoutAthletesInput, AthleteParticipatUncheckedCreateWithoutAthletesInput> | AthleteParticipatCreateWithoutAthletesInput[] | AthleteParticipatUncheckedCreateWithoutAthletesInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutAthletesInput | AthleteParticipatCreateOrConnectWithoutAthletesInput[]
    upsert?: AthleteParticipatUpsertWithWhereUniqueWithoutAthletesInput | AthleteParticipatUpsertWithWhereUniqueWithoutAthletesInput[]
    createMany?: AthleteParticipatCreateManyAthletesInputEnvelope
    set?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    disconnect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    delete?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    update?: AthleteParticipatUpdateWithWhereUniqueWithoutAthletesInput | AthleteParticipatUpdateWithWhereUniqueWithoutAthletesInput[]
    updateMany?: AthleteParticipatUpdateManyWithWhereWithoutAthletesInput | AthleteParticipatUpdateManyWithWhereWithoutAthletesInput[]
    deleteMany?: AthleteParticipatScalarWhereInput | AthleteParticipatScalarWhereInput[]
  }

  export type AthleteParticipatUncheckedUpdateManyWithoutAthletesNestedInput = {
    create?: XOR<AthleteParticipatCreateWithoutAthletesInput, AthleteParticipatUncheckedCreateWithoutAthletesInput> | AthleteParticipatCreateWithoutAthletesInput[] | AthleteParticipatUncheckedCreateWithoutAthletesInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutAthletesInput | AthleteParticipatCreateOrConnectWithoutAthletesInput[]
    upsert?: AthleteParticipatUpsertWithWhereUniqueWithoutAthletesInput | AthleteParticipatUpsertWithWhereUniqueWithoutAthletesInput[]
    createMany?: AthleteParticipatCreateManyAthletesInputEnvelope
    set?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    disconnect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    delete?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    update?: AthleteParticipatUpdateWithWhereUniqueWithoutAthletesInput | AthleteParticipatUpdateWithWhereUniqueWithoutAthletesInput[]
    updateMany?: AthleteParticipatUpdateManyWithWhereWithoutAthletesInput | AthleteParticipatUpdateManyWithWhereWithoutAthletesInput[]
    deleteMany?: AthleteParticipatScalarWhereInput | AthleteParticipatScalarWhereInput[]
  }

  export type EnrollCreateNestedOneWithoutLeadersInput = {
    create?: XOR<EnrollCreateWithoutLeadersInput, EnrollUncheckedCreateWithoutLeadersInput>
    connectOrCreate?: EnrollCreateOrConnectWithoutLeadersInput
    connect?: EnrollWhereUniqueInput
  }

  export type LeaderParticipatCreateNestedManyWithoutLeadersInput = {
    create?: XOR<LeaderParticipatCreateWithoutLeadersInput, LeaderParticipatUncheckedCreateWithoutLeadersInput> | LeaderParticipatCreateWithoutLeadersInput[] | LeaderParticipatUncheckedCreateWithoutLeadersInput[]
    connectOrCreate?: LeaderParticipatCreateOrConnectWithoutLeadersInput | LeaderParticipatCreateOrConnectWithoutLeadersInput[]
    createMany?: LeaderParticipatCreateManyLeadersInputEnvelope
    connect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
  }

  export type LeaderParticipatUncheckedCreateNestedManyWithoutLeadersInput = {
    create?: XOR<LeaderParticipatCreateWithoutLeadersInput, LeaderParticipatUncheckedCreateWithoutLeadersInput> | LeaderParticipatCreateWithoutLeadersInput[] | LeaderParticipatUncheckedCreateWithoutLeadersInput[]
    connectOrCreate?: LeaderParticipatCreateOrConnectWithoutLeadersInput | LeaderParticipatCreateOrConnectWithoutLeadersInput[]
    createMany?: LeaderParticipatCreateManyLeadersInputEnvelope
    connect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
  }

  export type EnumLeaderRoleFieldUpdateOperationsInput = {
    set?: $Enums.LeaderRole
  }

  export type EnrollUpdateOneRequiredWithoutLeadersNestedInput = {
    create?: XOR<EnrollCreateWithoutLeadersInput, EnrollUncheckedCreateWithoutLeadersInput>
    connectOrCreate?: EnrollCreateOrConnectWithoutLeadersInput
    upsert?: EnrollUpsertWithoutLeadersInput
    connect?: EnrollWhereUniqueInput
    update?: XOR<XOR<EnrollUpdateToOneWithWhereWithoutLeadersInput, EnrollUpdateWithoutLeadersInput>, EnrollUncheckedUpdateWithoutLeadersInput>
  }

  export type LeaderParticipatUpdateManyWithoutLeadersNestedInput = {
    create?: XOR<LeaderParticipatCreateWithoutLeadersInput, LeaderParticipatUncheckedCreateWithoutLeadersInput> | LeaderParticipatCreateWithoutLeadersInput[] | LeaderParticipatUncheckedCreateWithoutLeadersInput[]
    connectOrCreate?: LeaderParticipatCreateOrConnectWithoutLeadersInput | LeaderParticipatCreateOrConnectWithoutLeadersInput[]
    upsert?: LeaderParticipatUpsertWithWhereUniqueWithoutLeadersInput | LeaderParticipatUpsertWithWhereUniqueWithoutLeadersInput[]
    createMany?: LeaderParticipatCreateManyLeadersInputEnvelope
    set?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    disconnect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    delete?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    connect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    update?: LeaderParticipatUpdateWithWhereUniqueWithoutLeadersInput | LeaderParticipatUpdateWithWhereUniqueWithoutLeadersInput[]
    updateMany?: LeaderParticipatUpdateManyWithWhereWithoutLeadersInput | LeaderParticipatUpdateManyWithWhereWithoutLeadersInput[]
    deleteMany?: LeaderParticipatScalarWhereInput | LeaderParticipatScalarWhereInput[]
  }

  export type LeaderParticipatUncheckedUpdateManyWithoutLeadersNestedInput = {
    create?: XOR<LeaderParticipatCreateWithoutLeadersInput, LeaderParticipatUncheckedCreateWithoutLeadersInput> | LeaderParticipatCreateWithoutLeadersInput[] | LeaderParticipatUncheckedCreateWithoutLeadersInput[]
    connectOrCreate?: LeaderParticipatCreateOrConnectWithoutLeadersInput | LeaderParticipatCreateOrConnectWithoutLeadersInput[]
    upsert?: LeaderParticipatUpsertWithWhereUniqueWithoutLeadersInput | LeaderParticipatUpsertWithWhereUniqueWithoutLeadersInput[]
    createMany?: LeaderParticipatCreateManyLeadersInputEnvelope
    set?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    disconnect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    delete?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    connect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    update?: LeaderParticipatUpdateWithWhereUniqueWithoutLeadersInput | LeaderParticipatUpdateWithWhereUniqueWithoutLeadersInput[]
    updateMany?: LeaderParticipatUpdateManyWithWhereWithoutLeadersInput | LeaderParticipatUpdateManyWithWhereWithoutLeadersInput[]
    deleteMany?: LeaderParticipatScalarWhereInput | LeaderParticipatScalarWhereInput[]
  }

  export type categoriesCreateNestedManyWithoutEventsInput = {
    create?: XOR<categoriesCreateWithoutEventsInput, categoriesUncheckedCreateWithoutEventsInput> | categoriesCreateWithoutEventsInput[] | categoriesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutEventsInput | categoriesCreateOrConnectWithoutEventsInput[]
    createMany?: categoriesCreateManyEventsInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type AthleteParticipatCreateNestedManyWithoutEventsInput = {
    create?: XOR<AthleteParticipatCreateWithoutEventsInput, AthleteParticipatUncheckedCreateWithoutEventsInput> | AthleteParticipatCreateWithoutEventsInput[] | AthleteParticipatUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutEventsInput | AthleteParticipatCreateOrConnectWithoutEventsInput[]
    createMany?: AthleteParticipatCreateManyEventsInputEnvelope
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
  }

  export type LeaderParticipatCreateNestedManyWithoutEventsInput = {
    create?: XOR<LeaderParticipatCreateWithoutEventsInput, LeaderParticipatUncheckedCreateWithoutEventsInput> | LeaderParticipatCreateWithoutEventsInput[] | LeaderParticipatUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: LeaderParticipatCreateOrConnectWithoutEventsInput | LeaderParticipatCreateOrConnectWithoutEventsInput[]
    createMany?: LeaderParticipatCreateManyEventsInputEnvelope
    connect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
  }

  export type Sports_event_orgCreateNestedManyWithoutEventsInput = {
    create?: XOR<Sports_event_orgCreateWithoutEventsInput, Sports_event_orgUncheckedCreateWithoutEventsInput> | Sports_event_orgCreateWithoutEventsInput[] | Sports_event_orgUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: Sports_event_orgCreateOrConnectWithoutEventsInput | Sports_event_orgCreateOrConnectWithoutEventsInput[]
    createMany?: Sports_event_orgCreateManyEventsInputEnvelope
    connect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
  }

  export type categoriesUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<categoriesCreateWithoutEventsInput, categoriesUncheckedCreateWithoutEventsInput> | categoriesCreateWithoutEventsInput[] | categoriesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutEventsInput | categoriesCreateOrConnectWithoutEventsInput[]
    createMany?: categoriesCreateManyEventsInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type AthleteParticipatUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<AthleteParticipatCreateWithoutEventsInput, AthleteParticipatUncheckedCreateWithoutEventsInput> | AthleteParticipatCreateWithoutEventsInput[] | AthleteParticipatUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutEventsInput | AthleteParticipatCreateOrConnectWithoutEventsInput[]
    createMany?: AthleteParticipatCreateManyEventsInputEnvelope
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
  }

  export type LeaderParticipatUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<LeaderParticipatCreateWithoutEventsInput, LeaderParticipatUncheckedCreateWithoutEventsInput> | LeaderParticipatCreateWithoutEventsInput[] | LeaderParticipatUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: LeaderParticipatCreateOrConnectWithoutEventsInput | LeaderParticipatCreateOrConnectWithoutEventsInput[]
    createMany?: LeaderParticipatCreateManyEventsInputEnvelope
    connect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
  }

  export type Sports_event_orgUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<Sports_event_orgCreateWithoutEventsInput, Sports_event_orgUncheckedCreateWithoutEventsInput> | Sports_event_orgCreateWithoutEventsInput[] | Sports_event_orgUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: Sports_event_orgCreateOrConnectWithoutEventsInput | Sports_event_orgCreateOrConnectWithoutEventsInput[]
    createMany?: Sports_event_orgCreateManyEventsInputEnvelope
    connect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
  }

  export type categoriesUpdateManyWithoutEventsNestedInput = {
    create?: XOR<categoriesCreateWithoutEventsInput, categoriesUncheckedCreateWithoutEventsInput> | categoriesCreateWithoutEventsInput[] | categoriesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutEventsInput | categoriesCreateOrConnectWithoutEventsInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutEventsInput | categoriesUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: categoriesCreateManyEventsInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutEventsInput | categoriesUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutEventsInput | categoriesUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type AthleteParticipatUpdateManyWithoutEventsNestedInput = {
    create?: XOR<AthleteParticipatCreateWithoutEventsInput, AthleteParticipatUncheckedCreateWithoutEventsInput> | AthleteParticipatCreateWithoutEventsInput[] | AthleteParticipatUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutEventsInput | AthleteParticipatCreateOrConnectWithoutEventsInput[]
    upsert?: AthleteParticipatUpsertWithWhereUniqueWithoutEventsInput | AthleteParticipatUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: AthleteParticipatCreateManyEventsInputEnvelope
    set?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    disconnect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    delete?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    update?: AthleteParticipatUpdateWithWhereUniqueWithoutEventsInput | AthleteParticipatUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: AthleteParticipatUpdateManyWithWhereWithoutEventsInput | AthleteParticipatUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: AthleteParticipatScalarWhereInput | AthleteParticipatScalarWhereInput[]
  }

  export type LeaderParticipatUpdateManyWithoutEventsNestedInput = {
    create?: XOR<LeaderParticipatCreateWithoutEventsInput, LeaderParticipatUncheckedCreateWithoutEventsInput> | LeaderParticipatCreateWithoutEventsInput[] | LeaderParticipatUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: LeaderParticipatCreateOrConnectWithoutEventsInput | LeaderParticipatCreateOrConnectWithoutEventsInput[]
    upsert?: LeaderParticipatUpsertWithWhereUniqueWithoutEventsInput | LeaderParticipatUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: LeaderParticipatCreateManyEventsInputEnvelope
    set?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    disconnect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    delete?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    connect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    update?: LeaderParticipatUpdateWithWhereUniqueWithoutEventsInput | LeaderParticipatUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: LeaderParticipatUpdateManyWithWhereWithoutEventsInput | LeaderParticipatUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: LeaderParticipatScalarWhereInput | LeaderParticipatScalarWhereInput[]
  }

  export type Sports_event_orgUpdateManyWithoutEventsNestedInput = {
    create?: XOR<Sports_event_orgCreateWithoutEventsInput, Sports_event_orgUncheckedCreateWithoutEventsInput> | Sports_event_orgCreateWithoutEventsInput[] | Sports_event_orgUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: Sports_event_orgCreateOrConnectWithoutEventsInput | Sports_event_orgCreateOrConnectWithoutEventsInput[]
    upsert?: Sports_event_orgUpsertWithWhereUniqueWithoutEventsInput | Sports_event_orgUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: Sports_event_orgCreateManyEventsInputEnvelope
    set?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    disconnect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    delete?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    connect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    update?: Sports_event_orgUpdateWithWhereUniqueWithoutEventsInput | Sports_event_orgUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: Sports_event_orgUpdateManyWithWhereWithoutEventsInput | Sports_event_orgUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: Sports_event_orgScalarWhereInput | Sports_event_orgScalarWhereInput[]
  }

  export type categoriesUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<categoriesCreateWithoutEventsInput, categoriesUncheckedCreateWithoutEventsInput> | categoriesCreateWithoutEventsInput[] | categoriesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutEventsInput | categoriesCreateOrConnectWithoutEventsInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutEventsInput | categoriesUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: categoriesCreateManyEventsInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutEventsInput | categoriesUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutEventsInput | categoriesUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type AthleteParticipatUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<AthleteParticipatCreateWithoutEventsInput, AthleteParticipatUncheckedCreateWithoutEventsInput> | AthleteParticipatCreateWithoutEventsInput[] | AthleteParticipatUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutEventsInput | AthleteParticipatCreateOrConnectWithoutEventsInput[]
    upsert?: AthleteParticipatUpsertWithWhereUniqueWithoutEventsInput | AthleteParticipatUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: AthleteParticipatCreateManyEventsInputEnvelope
    set?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    disconnect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    delete?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    update?: AthleteParticipatUpdateWithWhereUniqueWithoutEventsInput | AthleteParticipatUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: AthleteParticipatUpdateManyWithWhereWithoutEventsInput | AthleteParticipatUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: AthleteParticipatScalarWhereInput | AthleteParticipatScalarWhereInput[]
  }

  export type LeaderParticipatUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<LeaderParticipatCreateWithoutEventsInput, LeaderParticipatUncheckedCreateWithoutEventsInput> | LeaderParticipatCreateWithoutEventsInput[] | LeaderParticipatUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: LeaderParticipatCreateOrConnectWithoutEventsInput | LeaderParticipatCreateOrConnectWithoutEventsInput[]
    upsert?: LeaderParticipatUpsertWithWhereUniqueWithoutEventsInput | LeaderParticipatUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: LeaderParticipatCreateManyEventsInputEnvelope
    set?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    disconnect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    delete?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    connect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    update?: LeaderParticipatUpdateWithWhereUniqueWithoutEventsInput | LeaderParticipatUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: LeaderParticipatUpdateManyWithWhereWithoutEventsInput | LeaderParticipatUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: LeaderParticipatScalarWhereInput | LeaderParticipatScalarWhereInput[]
  }

  export type Sports_event_orgUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<Sports_event_orgCreateWithoutEventsInput, Sports_event_orgUncheckedCreateWithoutEventsInput> | Sports_event_orgCreateWithoutEventsInput[] | Sports_event_orgUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: Sports_event_orgCreateOrConnectWithoutEventsInput | Sports_event_orgCreateOrConnectWithoutEventsInput[]
    upsert?: Sports_event_orgUpsertWithWhereUniqueWithoutEventsInput | Sports_event_orgUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: Sports_event_orgCreateManyEventsInputEnvelope
    set?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    disconnect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    delete?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    connect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    update?: Sports_event_orgUpdateWithWhereUniqueWithoutEventsInput | Sports_event_orgUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: Sports_event_orgUpdateManyWithWhereWithoutEventsInput | Sports_event_orgUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: Sports_event_orgScalarWhereInput | Sports_event_orgScalarWhereInput[]
  }

  export type categoriesCreateNestedManyWithoutSportsInput = {
    create?: XOR<categoriesCreateWithoutSportsInput, categoriesUncheckedCreateWithoutSportsInput> | categoriesCreateWithoutSportsInput[] | categoriesUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutSportsInput | categoriesCreateOrConnectWithoutSportsInput[]
    createMany?: categoriesCreateManySportsInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type AthleteParticipatCreateNestedManyWithoutSportsInput = {
    create?: XOR<AthleteParticipatCreateWithoutSportsInput, AthleteParticipatUncheckedCreateWithoutSportsInput> | AthleteParticipatCreateWithoutSportsInput[] | AthleteParticipatUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutSportsInput | AthleteParticipatCreateOrConnectWithoutSportsInput[]
    createMany?: AthleteParticipatCreateManySportsInputEnvelope
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
  }

  export type LeaderParticipatCreateNestedManyWithoutSportsInput = {
    create?: XOR<LeaderParticipatCreateWithoutSportsInput, LeaderParticipatUncheckedCreateWithoutSportsInput> | LeaderParticipatCreateWithoutSportsInput[] | LeaderParticipatUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: LeaderParticipatCreateOrConnectWithoutSportsInput | LeaderParticipatCreateOrConnectWithoutSportsInput[]
    createMany?: LeaderParticipatCreateManySportsInputEnvelope
    connect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
  }

  export type Sports_event_orgCreateNestedManyWithoutSportsInput = {
    create?: XOR<Sports_event_orgCreateWithoutSportsInput, Sports_event_orgUncheckedCreateWithoutSportsInput> | Sports_event_orgCreateWithoutSportsInput[] | Sports_event_orgUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: Sports_event_orgCreateOrConnectWithoutSportsInput | Sports_event_orgCreateOrConnectWithoutSportsInput[]
    createMany?: Sports_event_orgCreateManySportsInputEnvelope
    connect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
  }

  export type categoriesUncheckedCreateNestedManyWithoutSportsInput = {
    create?: XOR<categoriesCreateWithoutSportsInput, categoriesUncheckedCreateWithoutSportsInput> | categoriesCreateWithoutSportsInput[] | categoriesUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutSportsInput | categoriesCreateOrConnectWithoutSportsInput[]
    createMany?: categoriesCreateManySportsInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type AthleteParticipatUncheckedCreateNestedManyWithoutSportsInput = {
    create?: XOR<AthleteParticipatCreateWithoutSportsInput, AthleteParticipatUncheckedCreateWithoutSportsInput> | AthleteParticipatCreateWithoutSportsInput[] | AthleteParticipatUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutSportsInput | AthleteParticipatCreateOrConnectWithoutSportsInput[]
    createMany?: AthleteParticipatCreateManySportsInputEnvelope
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
  }

  export type LeaderParticipatUncheckedCreateNestedManyWithoutSportsInput = {
    create?: XOR<LeaderParticipatCreateWithoutSportsInput, LeaderParticipatUncheckedCreateWithoutSportsInput> | LeaderParticipatCreateWithoutSportsInput[] | LeaderParticipatUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: LeaderParticipatCreateOrConnectWithoutSportsInput | LeaderParticipatCreateOrConnectWithoutSportsInput[]
    createMany?: LeaderParticipatCreateManySportsInputEnvelope
    connect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
  }

  export type Sports_event_orgUncheckedCreateNestedManyWithoutSportsInput = {
    create?: XOR<Sports_event_orgCreateWithoutSportsInput, Sports_event_orgUncheckedCreateWithoutSportsInput> | Sports_event_orgCreateWithoutSportsInput[] | Sports_event_orgUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: Sports_event_orgCreateOrConnectWithoutSportsInput | Sports_event_orgCreateOrConnectWithoutSportsInput[]
    createMany?: Sports_event_orgCreateManySportsInputEnvelope
    connect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
  }

  export type categoriesUpdateManyWithoutSportsNestedInput = {
    create?: XOR<categoriesCreateWithoutSportsInput, categoriesUncheckedCreateWithoutSportsInput> | categoriesCreateWithoutSportsInput[] | categoriesUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutSportsInput | categoriesCreateOrConnectWithoutSportsInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutSportsInput | categoriesUpsertWithWhereUniqueWithoutSportsInput[]
    createMany?: categoriesCreateManySportsInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutSportsInput | categoriesUpdateWithWhereUniqueWithoutSportsInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutSportsInput | categoriesUpdateManyWithWhereWithoutSportsInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type AthleteParticipatUpdateManyWithoutSportsNestedInput = {
    create?: XOR<AthleteParticipatCreateWithoutSportsInput, AthleteParticipatUncheckedCreateWithoutSportsInput> | AthleteParticipatCreateWithoutSportsInput[] | AthleteParticipatUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutSportsInput | AthleteParticipatCreateOrConnectWithoutSportsInput[]
    upsert?: AthleteParticipatUpsertWithWhereUniqueWithoutSportsInput | AthleteParticipatUpsertWithWhereUniqueWithoutSportsInput[]
    createMany?: AthleteParticipatCreateManySportsInputEnvelope
    set?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    disconnect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    delete?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    update?: AthleteParticipatUpdateWithWhereUniqueWithoutSportsInput | AthleteParticipatUpdateWithWhereUniqueWithoutSportsInput[]
    updateMany?: AthleteParticipatUpdateManyWithWhereWithoutSportsInput | AthleteParticipatUpdateManyWithWhereWithoutSportsInput[]
    deleteMany?: AthleteParticipatScalarWhereInput | AthleteParticipatScalarWhereInput[]
  }

  export type LeaderParticipatUpdateManyWithoutSportsNestedInput = {
    create?: XOR<LeaderParticipatCreateWithoutSportsInput, LeaderParticipatUncheckedCreateWithoutSportsInput> | LeaderParticipatCreateWithoutSportsInput[] | LeaderParticipatUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: LeaderParticipatCreateOrConnectWithoutSportsInput | LeaderParticipatCreateOrConnectWithoutSportsInput[]
    upsert?: LeaderParticipatUpsertWithWhereUniqueWithoutSportsInput | LeaderParticipatUpsertWithWhereUniqueWithoutSportsInput[]
    createMany?: LeaderParticipatCreateManySportsInputEnvelope
    set?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    disconnect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    delete?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    connect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    update?: LeaderParticipatUpdateWithWhereUniqueWithoutSportsInput | LeaderParticipatUpdateWithWhereUniqueWithoutSportsInput[]
    updateMany?: LeaderParticipatUpdateManyWithWhereWithoutSportsInput | LeaderParticipatUpdateManyWithWhereWithoutSportsInput[]
    deleteMany?: LeaderParticipatScalarWhereInput | LeaderParticipatScalarWhereInput[]
  }

  export type Sports_event_orgUpdateManyWithoutSportsNestedInput = {
    create?: XOR<Sports_event_orgCreateWithoutSportsInput, Sports_event_orgUncheckedCreateWithoutSportsInput> | Sports_event_orgCreateWithoutSportsInput[] | Sports_event_orgUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: Sports_event_orgCreateOrConnectWithoutSportsInput | Sports_event_orgCreateOrConnectWithoutSportsInput[]
    upsert?: Sports_event_orgUpsertWithWhereUniqueWithoutSportsInput | Sports_event_orgUpsertWithWhereUniqueWithoutSportsInput[]
    createMany?: Sports_event_orgCreateManySportsInputEnvelope
    set?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    disconnect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    delete?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    connect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    update?: Sports_event_orgUpdateWithWhereUniqueWithoutSportsInput | Sports_event_orgUpdateWithWhereUniqueWithoutSportsInput[]
    updateMany?: Sports_event_orgUpdateManyWithWhereWithoutSportsInput | Sports_event_orgUpdateManyWithWhereWithoutSportsInput[]
    deleteMany?: Sports_event_orgScalarWhereInput | Sports_event_orgScalarWhereInput[]
  }

  export type categoriesUncheckedUpdateManyWithoutSportsNestedInput = {
    create?: XOR<categoriesCreateWithoutSportsInput, categoriesUncheckedCreateWithoutSportsInput> | categoriesCreateWithoutSportsInput[] | categoriesUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutSportsInput | categoriesCreateOrConnectWithoutSportsInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutSportsInput | categoriesUpsertWithWhereUniqueWithoutSportsInput[]
    createMany?: categoriesCreateManySportsInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutSportsInput | categoriesUpdateWithWhereUniqueWithoutSportsInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutSportsInput | categoriesUpdateManyWithWhereWithoutSportsInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type AthleteParticipatUncheckedUpdateManyWithoutSportsNestedInput = {
    create?: XOR<AthleteParticipatCreateWithoutSportsInput, AthleteParticipatUncheckedCreateWithoutSportsInput> | AthleteParticipatCreateWithoutSportsInput[] | AthleteParticipatUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutSportsInput | AthleteParticipatCreateOrConnectWithoutSportsInput[]
    upsert?: AthleteParticipatUpsertWithWhereUniqueWithoutSportsInput | AthleteParticipatUpsertWithWhereUniqueWithoutSportsInput[]
    createMany?: AthleteParticipatCreateManySportsInputEnvelope
    set?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    disconnect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    delete?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    update?: AthleteParticipatUpdateWithWhereUniqueWithoutSportsInput | AthleteParticipatUpdateWithWhereUniqueWithoutSportsInput[]
    updateMany?: AthleteParticipatUpdateManyWithWhereWithoutSportsInput | AthleteParticipatUpdateManyWithWhereWithoutSportsInput[]
    deleteMany?: AthleteParticipatScalarWhereInput | AthleteParticipatScalarWhereInput[]
  }

  export type LeaderParticipatUncheckedUpdateManyWithoutSportsNestedInput = {
    create?: XOR<LeaderParticipatCreateWithoutSportsInput, LeaderParticipatUncheckedCreateWithoutSportsInput> | LeaderParticipatCreateWithoutSportsInput[] | LeaderParticipatUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: LeaderParticipatCreateOrConnectWithoutSportsInput | LeaderParticipatCreateOrConnectWithoutSportsInput[]
    upsert?: LeaderParticipatUpsertWithWhereUniqueWithoutSportsInput | LeaderParticipatUpsertWithWhereUniqueWithoutSportsInput[]
    createMany?: LeaderParticipatCreateManySportsInputEnvelope
    set?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    disconnect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    delete?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    connect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    update?: LeaderParticipatUpdateWithWhereUniqueWithoutSportsInput | LeaderParticipatUpdateWithWhereUniqueWithoutSportsInput[]
    updateMany?: LeaderParticipatUpdateManyWithWhereWithoutSportsInput | LeaderParticipatUpdateManyWithWhereWithoutSportsInput[]
    deleteMany?: LeaderParticipatScalarWhereInput | LeaderParticipatScalarWhereInput[]
  }

  export type Sports_event_orgUncheckedUpdateManyWithoutSportsNestedInput = {
    create?: XOR<Sports_event_orgCreateWithoutSportsInput, Sports_event_orgUncheckedCreateWithoutSportsInput> | Sports_event_orgCreateWithoutSportsInput[] | Sports_event_orgUncheckedCreateWithoutSportsInput[]
    connectOrCreate?: Sports_event_orgCreateOrConnectWithoutSportsInput | Sports_event_orgCreateOrConnectWithoutSportsInput[]
    upsert?: Sports_event_orgUpsertWithWhereUniqueWithoutSportsInput | Sports_event_orgUpsertWithWhereUniqueWithoutSportsInput[]
    createMany?: Sports_event_orgCreateManySportsInputEnvelope
    set?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    disconnect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    delete?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    connect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    update?: Sports_event_orgUpdateWithWhereUniqueWithoutSportsInput | Sports_event_orgUpdateWithWhereUniqueWithoutSportsInput[]
    updateMany?: Sports_event_orgUpdateManyWithWhereWithoutSportsInput | Sports_event_orgUpdateManyWithWhereWithoutSportsInput[]
    deleteMany?: Sports_event_orgScalarWhereInput | Sports_event_orgScalarWhereInput[]
  }

  export type AthleteParticipatCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AthleteParticipatCreateWithoutOrganizationInput, AthleteParticipatUncheckedCreateWithoutOrganizationInput> | AthleteParticipatCreateWithoutOrganizationInput[] | AthleteParticipatUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutOrganizationInput | AthleteParticipatCreateOrConnectWithoutOrganizationInput[]
    createMany?: AthleteParticipatCreateManyOrganizationInputEnvelope
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
  }

  export type LeaderParticipatCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<LeaderParticipatCreateWithoutOrganizationInput, LeaderParticipatUncheckedCreateWithoutOrganizationInput> | LeaderParticipatCreateWithoutOrganizationInput[] | LeaderParticipatUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: LeaderParticipatCreateOrConnectWithoutOrganizationInput | LeaderParticipatCreateOrConnectWithoutOrganizationInput[]
    createMany?: LeaderParticipatCreateManyOrganizationInputEnvelope
    connect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
  }

  export type Sports_event_orgCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Sports_event_orgCreateWithoutOrganizationInput, Sports_event_orgUncheckedCreateWithoutOrganizationInput> | Sports_event_orgCreateWithoutOrganizationInput[] | Sports_event_orgUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: Sports_event_orgCreateOrConnectWithoutOrganizationInput | Sports_event_orgCreateOrConnectWithoutOrganizationInput[]
    createMany?: Sports_event_orgCreateManyOrganizationInputEnvelope
    connect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
  }

  export type AthleteParticipatUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AthleteParticipatCreateWithoutOrganizationInput, AthleteParticipatUncheckedCreateWithoutOrganizationInput> | AthleteParticipatCreateWithoutOrganizationInput[] | AthleteParticipatUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutOrganizationInput | AthleteParticipatCreateOrConnectWithoutOrganizationInput[]
    createMany?: AthleteParticipatCreateManyOrganizationInputEnvelope
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
  }

  export type LeaderParticipatUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<LeaderParticipatCreateWithoutOrganizationInput, LeaderParticipatUncheckedCreateWithoutOrganizationInput> | LeaderParticipatCreateWithoutOrganizationInput[] | LeaderParticipatUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: LeaderParticipatCreateOrConnectWithoutOrganizationInput | LeaderParticipatCreateOrConnectWithoutOrganizationInput[]
    createMany?: LeaderParticipatCreateManyOrganizationInputEnvelope
    connect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
  }

  export type Sports_event_orgUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<Sports_event_orgCreateWithoutOrganizationInput, Sports_event_orgUncheckedCreateWithoutOrganizationInput> | Sports_event_orgCreateWithoutOrganizationInput[] | Sports_event_orgUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: Sports_event_orgCreateOrConnectWithoutOrganizationInput | Sports_event_orgCreateOrConnectWithoutOrganizationInput[]
    createMany?: Sports_event_orgCreateManyOrganizationInputEnvelope
    connect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
  }

  export type AthleteParticipatUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AthleteParticipatCreateWithoutOrganizationInput, AthleteParticipatUncheckedCreateWithoutOrganizationInput> | AthleteParticipatCreateWithoutOrganizationInput[] | AthleteParticipatUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutOrganizationInput | AthleteParticipatCreateOrConnectWithoutOrganizationInput[]
    upsert?: AthleteParticipatUpsertWithWhereUniqueWithoutOrganizationInput | AthleteParticipatUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AthleteParticipatCreateManyOrganizationInputEnvelope
    set?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    disconnect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    delete?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    update?: AthleteParticipatUpdateWithWhereUniqueWithoutOrganizationInput | AthleteParticipatUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AthleteParticipatUpdateManyWithWhereWithoutOrganizationInput | AthleteParticipatUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AthleteParticipatScalarWhereInput | AthleteParticipatScalarWhereInput[]
  }

  export type LeaderParticipatUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<LeaderParticipatCreateWithoutOrganizationInput, LeaderParticipatUncheckedCreateWithoutOrganizationInput> | LeaderParticipatCreateWithoutOrganizationInput[] | LeaderParticipatUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: LeaderParticipatCreateOrConnectWithoutOrganizationInput | LeaderParticipatCreateOrConnectWithoutOrganizationInput[]
    upsert?: LeaderParticipatUpsertWithWhereUniqueWithoutOrganizationInput | LeaderParticipatUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: LeaderParticipatCreateManyOrganizationInputEnvelope
    set?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    disconnect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    delete?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    connect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    update?: LeaderParticipatUpdateWithWhereUniqueWithoutOrganizationInput | LeaderParticipatUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: LeaderParticipatUpdateManyWithWhereWithoutOrganizationInput | LeaderParticipatUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: LeaderParticipatScalarWhereInput | LeaderParticipatScalarWhereInput[]
  }

  export type Sports_event_orgUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Sports_event_orgCreateWithoutOrganizationInput, Sports_event_orgUncheckedCreateWithoutOrganizationInput> | Sports_event_orgCreateWithoutOrganizationInput[] | Sports_event_orgUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: Sports_event_orgCreateOrConnectWithoutOrganizationInput | Sports_event_orgCreateOrConnectWithoutOrganizationInput[]
    upsert?: Sports_event_orgUpsertWithWhereUniqueWithoutOrganizationInput | Sports_event_orgUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: Sports_event_orgCreateManyOrganizationInputEnvelope
    set?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    disconnect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    delete?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    connect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    update?: Sports_event_orgUpdateWithWhereUniqueWithoutOrganizationInput | Sports_event_orgUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: Sports_event_orgUpdateManyWithWhereWithoutOrganizationInput | Sports_event_orgUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: Sports_event_orgScalarWhereInput | Sports_event_orgScalarWhereInput[]
  }

  export type AthleteParticipatUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AthleteParticipatCreateWithoutOrganizationInput, AthleteParticipatUncheckedCreateWithoutOrganizationInput> | AthleteParticipatCreateWithoutOrganizationInput[] | AthleteParticipatUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutOrganizationInput | AthleteParticipatCreateOrConnectWithoutOrganizationInput[]
    upsert?: AthleteParticipatUpsertWithWhereUniqueWithoutOrganizationInput | AthleteParticipatUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AthleteParticipatCreateManyOrganizationInputEnvelope
    set?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    disconnect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    delete?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    update?: AthleteParticipatUpdateWithWhereUniqueWithoutOrganizationInput | AthleteParticipatUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AthleteParticipatUpdateManyWithWhereWithoutOrganizationInput | AthleteParticipatUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AthleteParticipatScalarWhereInput | AthleteParticipatScalarWhereInput[]
  }

  export type LeaderParticipatUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<LeaderParticipatCreateWithoutOrganizationInput, LeaderParticipatUncheckedCreateWithoutOrganizationInput> | LeaderParticipatCreateWithoutOrganizationInput[] | LeaderParticipatUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: LeaderParticipatCreateOrConnectWithoutOrganizationInput | LeaderParticipatCreateOrConnectWithoutOrganizationInput[]
    upsert?: LeaderParticipatUpsertWithWhereUniqueWithoutOrganizationInput | LeaderParticipatUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: LeaderParticipatCreateManyOrganizationInputEnvelope
    set?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    disconnect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    delete?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    connect?: LeaderParticipatWhereUniqueInput | LeaderParticipatWhereUniqueInput[]
    update?: LeaderParticipatUpdateWithWhereUniqueWithoutOrganizationInput | LeaderParticipatUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: LeaderParticipatUpdateManyWithWhereWithoutOrganizationInput | LeaderParticipatUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: LeaderParticipatScalarWhereInput | LeaderParticipatScalarWhereInput[]
  }

  export type Sports_event_orgUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<Sports_event_orgCreateWithoutOrganizationInput, Sports_event_orgUncheckedCreateWithoutOrganizationInput> | Sports_event_orgCreateWithoutOrganizationInput[] | Sports_event_orgUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: Sports_event_orgCreateOrConnectWithoutOrganizationInput | Sports_event_orgCreateOrConnectWithoutOrganizationInput[]
    upsert?: Sports_event_orgUpsertWithWhereUniqueWithoutOrganizationInput | Sports_event_orgUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: Sports_event_orgCreateManyOrganizationInputEnvelope
    set?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    disconnect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    delete?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    connect?: Sports_event_orgWhereUniqueInput | Sports_event_orgWhereUniqueInput[]
    update?: Sports_event_orgUpdateWithWhereUniqueWithoutOrganizationInput | Sports_event_orgUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: Sports_event_orgUpdateManyWithWhereWithoutOrganizationInput | Sports_event_orgUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: Sports_event_orgScalarWhereInput | Sports_event_orgScalarWhereInput[]
  }

  export type EventsCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<EventsCreateWithoutCategoriesInput, EventsUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: EventsCreateOrConnectWithoutCategoriesInput
    connect?: EventsWhereUniqueInput
  }

  export type SportsCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<SportsCreateWithoutCategoriesInput, SportsUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: SportsCreateOrConnectWithoutCategoriesInput
    connect?: SportsWhereUniqueInput
  }

  export type AthleteParticipatCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<AthleteParticipatCreateWithoutCategoriesInput, AthleteParticipatUncheckedCreateWithoutCategoriesInput> | AthleteParticipatCreateWithoutCategoriesInput[] | AthleteParticipatUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutCategoriesInput | AthleteParticipatCreateOrConnectWithoutCategoriesInput[]
    createMany?: AthleteParticipatCreateManyCategoriesInputEnvelope
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
  }

  export type AthleteParticipatUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<AthleteParticipatCreateWithoutCategoriesInput, AthleteParticipatUncheckedCreateWithoutCategoriesInput> | AthleteParticipatCreateWithoutCategoriesInput[] | AthleteParticipatUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutCategoriesInput | AthleteParticipatCreateOrConnectWithoutCategoriesInput[]
    createMany?: AthleteParticipatCreateManyCategoriesInputEnvelope
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
  }

  export type EventsUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<EventsCreateWithoutCategoriesInput, EventsUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: EventsCreateOrConnectWithoutCategoriesInput
    upsert?: EventsUpsertWithoutCategoriesInput
    connect?: EventsWhereUniqueInput
    update?: XOR<XOR<EventsUpdateToOneWithWhereWithoutCategoriesInput, EventsUpdateWithoutCategoriesInput>, EventsUncheckedUpdateWithoutCategoriesInput>
  }

  export type SportsUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<SportsCreateWithoutCategoriesInput, SportsUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: SportsCreateOrConnectWithoutCategoriesInput
    upsert?: SportsUpsertWithoutCategoriesInput
    connect?: SportsWhereUniqueInput
    update?: XOR<XOR<SportsUpdateToOneWithWhereWithoutCategoriesInput, SportsUpdateWithoutCategoriesInput>, SportsUncheckedUpdateWithoutCategoriesInput>
  }

  export type AthleteParticipatUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<AthleteParticipatCreateWithoutCategoriesInput, AthleteParticipatUncheckedCreateWithoutCategoriesInput> | AthleteParticipatCreateWithoutCategoriesInput[] | AthleteParticipatUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutCategoriesInput | AthleteParticipatCreateOrConnectWithoutCategoriesInput[]
    upsert?: AthleteParticipatUpsertWithWhereUniqueWithoutCategoriesInput | AthleteParticipatUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: AthleteParticipatCreateManyCategoriesInputEnvelope
    set?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    disconnect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    delete?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    update?: AthleteParticipatUpdateWithWhereUniqueWithoutCategoriesInput | AthleteParticipatUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: AthleteParticipatUpdateManyWithWhereWithoutCategoriesInput | AthleteParticipatUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: AthleteParticipatScalarWhereInput | AthleteParticipatScalarWhereInput[]
  }

  export type AthleteParticipatUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<AthleteParticipatCreateWithoutCategoriesInput, AthleteParticipatUncheckedCreateWithoutCategoriesInput> | AthleteParticipatCreateWithoutCategoriesInput[] | AthleteParticipatUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutCategoriesInput | AthleteParticipatCreateOrConnectWithoutCategoriesInput[]
    upsert?: AthleteParticipatUpsertWithWhereUniqueWithoutCategoriesInput | AthleteParticipatUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: AthleteParticipatCreateManyCategoriesInputEnvelope
    set?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    disconnect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    delete?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    connect?: AthleteParticipatWhereUniqueInput | AthleteParticipatWhereUniqueInput[]
    update?: AthleteParticipatUpdateWithWhereUniqueWithoutCategoriesInput | AthleteParticipatUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: AthleteParticipatUpdateManyWithWhereWithoutCategoriesInput | AthleteParticipatUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: AthleteParticipatScalarWhereInput | AthleteParticipatScalarWhereInput[]
  }

  export type EventsCreateNestedOneWithoutSports_event_orgInput = {
    create?: XOR<EventsCreateWithoutSports_event_orgInput, EventsUncheckedCreateWithoutSports_event_orgInput>
    connectOrCreate?: EventsCreateOrConnectWithoutSports_event_orgInput
    connect?: EventsWhereUniqueInput
  }

  export type SportsCreateNestedOneWithoutSports_event_orgInput = {
    create?: XOR<SportsCreateWithoutSports_event_orgInput, SportsUncheckedCreateWithoutSports_event_orgInput>
    connectOrCreate?: SportsCreateOrConnectWithoutSports_event_orgInput
    connect?: SportsWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutSports_event_orgInput = {
    create?: XOR<OrganizationCreateWithoutSports_event_orgInput, OrganizationUncheckedCreateWithoutSports_event_orgInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSports_event_orgInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EventsUpdateOneRequiredWithoutSports_event_orgNestedInput = {
    create?: XOR<EventsCreateWithoutSports_event_orgInput, EventsUncheckedCreateWithoutSports_event_orgInput>
    connectOrCreate?: EventsCreateOrConnectWithoutSports_event_orgInput
    upsert?: EventsUpsertWithoutSports_event_orgInput
    connect?: EventsWhereUniqueInput
    update?: XOR<XOR<EventsUpdateToOneWithWhereWithoutSports_event_orgInput, EventsUpdateWithoutSports_event_orgInput>, EventsUncheckedUpdateWithoutSports_event_orgInput>
  }

  export type SportsUpdateOneRequiredWithoutSports_event_orgNestedInput = {
    create?: XOR<SportsCreateWithoutSports_event_orgInput, SportsUncheckedCreateWithoutSports_event_orgInput>
    connectOrCreate?: SportsCreateOrConnectWithoutSports_event_orgInput
    upsert?: SportsUpsertWithoutSports_event_orgInput
    connect?: SportsWhereUniqueInput
    update?: XOR<XOR<SportsUpdateToOneWithWhereWithoutSports_event_orgInput, SportsUpdateWithoutSports_event_orgInput>, SportsUncheckedUpdateWithoutSports_event_orgInput>
  }

  export type OrganizationUpdateOneRequiredWithoutSports_event_orgNestedInput = {
    create?: XOR<OrganizationCreateWithoutSports_event_orgInput, OrganizationUncheckedCreateWithoutSports_event_orgInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSports_event_orgInput
    upsert?: OrganizationUpsertWithoutSports_event_orgInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutSports_event_orgInput, OrganizationUpdateWithoutSports_event_orgInput>, OrganizationUncheckedUpdateWithoutSports_event_orgInput>
  }

  export type AthletesCreateNestedOneWithoutAthleteParticipatInput = {
    create?: XOR<AthletesCreateWithoutAthleteParticipatInput, AthletesUncheckedCreateWithoutAthleteParticipatInput>
    connectOrCreate?: AthletesCreateOrConnectWithoutAthleteParticipatInput
    connect?: AthletesWhereUniqueInput
  }

  export type EventsCreateNestedOneWithoutAthleteParticipatInput = {
    create?: XOR<EventsCreateWithoutAthleteParticipatInput, EventsUncheckedCreateWithoutAthleteParticipatInput>
    connectOrCreate?: EventsCreateOrConnectWithoutAthleteParticipatInput
    connect?: EventsWhereUniqueInput
  }

  export type categoriesCreateNestedOneWithoutAthleteParticipatInput = {
    create?: XOR<categoriesCreateWithoutAthleteParticipatInput, categoriesUncheckedCreateWithoutAthleteParticipatInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutAthleteParticipatInput
    connect?: categoriesWhereUniqueInput
  }

  export type SportsCreateNestedOneWithoutAthleteParticipatInput = {
    create?: XOR<SportsCreateWithoutAthleteParticipatInput, SportsUncheckedCreateWithoutAthleteParticipatInput>
    connectOrCreate?: SportsCreateOrConnectWithoutAthleteParticipatInput
    connect?: SportsWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutAthleteParticipatInput = {
    create?: XOR<OrganizationCreateWithoutAthleteParticipatInput, OrganizationUncheckedCreateWithoutAthleteParticipatInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAthleteParticipatInput
    connect?: OrganizationWhereUniqueInput
  }

  export type MedalsCreateNestedManyWithoutAthleteParticipatInput = {
    create?: XOR<MedalsCreateWithoutAthleteParticipatInput, MedalsUncheckedCreateWithoutAthleteParticipatInput> | MedalsCreateWithoutAthleteParticipatInput[] | MedalsUncheckedCreateWithoutAthleteParticipatInput[]
    connectOrCreate?: MedalsCreateOrConnectWithoutAthleteParticipatInput | MedalsCreateOrConnectWithoutAthleteParticipatInput[]
    createMany?: MedalsCreateManyAthleteParticipatInputEnvelope
    connect?: MedalsWhereUniqueInput | MedalsWhereUniqueInput[]
  }

  export type MedalsUncheckedCreateNestedManyWithoutAthleteParticipatInput = {
    create?: XOR<MedalsCreateWithoutAthleteParticipatInput, MedalsUncheckedCreateWithoutAthleteParticipatInput> | MedalsCreateWithoutAthleteParticipatInput[] | MedalsUncheckedCreateWithoutAthleteParticipatInput[]
    connectOrCreate?: MedalsCreateOrConnectWithoutAthleteParticipatInput | MedalsCreateOrConnectWithoutAthleteParticipatInput[]
    createMany?: MedalsCreateManyAthleteParticipatInputEnvelope
    connect?: MedalsWhereUniqueInput | MedalsWhereUniqueInput[]
  }

  export type AthletesUpdateOneRequiredWithoutAthleteParticipatNestedInput = {
    create?: XOR<AthletesCreateWithoutAthleteParticipatInput, AthletesUncheckedCreateWithoutAthleteParticipatInput>
    connectOrCreate?: AthletesCreateOrConnectWithoutAthleteParticipatInput
    upsert?: AthletesUpsertWithoutAthleteParticipatInput
    connect?: AthletesWhereUniqueInput
    update?: XOR<XOR<AthletesUpdateToOneWithWhereWithoutAthleteParticipatInput, AthletesUpdateWithoutAthleteParticipatInput>, AthletesUncheckedUpdateWithoutAthleteParticipatInput>
  }

  export type EventsUpdateOneRequiredWithoutAthleteParticipatNestedInput = {
    create?: XOR<EventsCreateWithoutAthleteParticipatInput, EventsUncheckedCreateWithoutAthleteParticipatInput>
    connectOrCreate?: EventsCreateOrConnectWithoutAthleteParticipatInput
    upsert?: EventsUpsertWithoutAthleteParticipatInput
    connect?: EventsWhereUniqueInput
    update?: XOR<XOR<EventsUpdateToOneWithWhereWithoutAthleteParticipatInput, EventsUpdateWithoutAthleteParticipatInput>, EventsUncheckedUpdateWithoutAthleteParticipatInput>
  }

  export type categoriesUpdateOneRequiredWithoutAthleteParticipatNestedInput = {
    create?: XOR<categoriesCreateWithoutAthleteParticipatInput, categoriesUncheckedCreateWithoutAthleteParticipatInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutAthleteParticipatInput
    upsert?: categoriesUpsertWithoutAthleteParticipatInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutAthleteParticipatInput, categoriesUpdateWithoutAthleteParticipatInput>, categoriesUncheckedUpdateWithoutAthleteParticipatInput>
  }

  export type SportsUpdateOneRequiredWithoutAthleteParticipatNestedInput = {
    create?: XOR<SportsCreateWithoutAthleteParticipatInput, SportsUncheckedCreateWithoutAthleteParticipatInput>
    connectOrCreate?: SportsCreateOrConnectWithoutAthleteParticipatInput
    upsert?: SportsUpsertWithoutAthleteParticipatInput
    connect?: SportsWhereUniqueInput
    update?: XOR<XOR<SportsUpdateToOneWithWhereWithoutAthleteParticipatInput, SportsUpdateWithoutAthleteParticipatInput>, SportsUncheckedUpdateWithoutAthleteParticipatInput>
  }

  export type OrganizationUpdateOneRequiredWithoutAthleteParticipatNestedInput = {
    create?: XOR<OrganizationCreateWithoutAthleteParticipatInput, OrganizationUncheckedCreateWithoutAthleteParticipatInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAthleteParticipatInput
    upsert?: OrganizationUpsertWithoutAthleteParticipatInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAthleteParticipatInput, OrganizationUpdateWithoutAthleteParticipatInput>, OrganizationUncheckedUpdateWithoutAthleteParticipatInput>
  }

  export type MedalsUpdateManyWithoutAthleteParticipatNestedInput = {
    create?: XOR<MedalsCreateWithoutAthleteParticipatInput, MedalsUncheckedCreateWithoutAthleteParticipatInput> | MedalsCreateWithoutAthleteParticipatInput[] | MedalsUncheckedCreateWithoutAthleteParticipatInput[]
    connectOrCreate?: MedalsCreateOrConnectWithoutAthleteParticipatInput | MedalsCreateOrConnectWithoutAthleteParticipatInput[]
    upsert?: MedalsUpsertWithWhereUniqueWithoutAthleteParticipatInput | MedalsUpsertWithWhereUniqueWithoutAthleteParticipatInput[]
    createMany?: MedalsCreateManyAthleteParticipatInputEnvelope
    set?: MedalsWhereUniqueInput | MedalsWhereUniqueInput[]
    disconnect?: MedalsWhereUniqueInput | MedalsWhereUniqueInput[]
    delete?: MedalsWhereUniqueInput | MedalsWhereUniqueInput[]
    connect?: MedalsWhereUniqueInput | MedalsWhereUniqueInput[]
    update?: MedalsUpdateWithWhereUniqueWithoutAthleteParticipatInput | MedalsUpdateWithWhereUniqueWithoutAthleteParticipatInput[]
    updateMany?: MedalsUpdateManyWithWhereWithoutAthleteParticipatInput | MedalsUpdateManyWithWhereWithoutAthleteParticipatInput[]
    deleteMany?: MedalsScalarWhereInput | MedalsScalarWhereInput[]
  }

  export type MedalsUncheckedUpdateManyWithoutAthleteParticipatNestedInput = {
    create?: XOR<MedalsCreateWithoutAthleteParticipatInput, MedalsUncheckedCreateWithoutAthleteParticipatInput> | MedalsCreateWithoutAthleteParticipatInput[] | MedalsUncheckedCreateWithoutAthleteParticipatInput[]
    connectOrCreate?: MedalsCreateOrConnectWithoutAthleteParticipatInput | MedalsCreateOrConnectWithoutAthleteParticipatInput[]
    upsert?: MedalsUpsertWithWhereUniqueWithoutAthleteParticipatInput | MedalsUpsertWithWhereUniqueWithoutAthleteParticipatInput[]
    createMany?: MedalsCreateManyAthleteParticipatInputEnvelope
    set?: MedalsWhereUniqueInput | MedalsWhereUniqueInput[]
    disconnect?: MedalsWhereUniqueInput | MedalsWhereUniqueInput[]
    delete?: MedalsWhereUniqueInput | MedalsWhereUniqueInput[]
    connect?: MedalsWhereUniqueInput | MedalsWhereUniqueInput[]
    update?: MedalsUpdateWithWhereUniqueWithoutAthleteParticipatInput | MedalsUpdateWithWhereUniqueWithoutAthleteParticipatInput[]
    updateMany?: MedalsUpdateManyWithWhereWithoutAthleteParticipatInput | MedalsUpdateManyWithWhereWithoutAthleteParticipatInput[]
    deleteMany?: MedalsScalarWhereInput | MedalsScalarWhereInput[]
  }

  export type LeadersCreateNestedOneWithoutLeaderParticipatInput = {
    create?: XOR<LeadersCreateWithoutLeaderParticipatInput, LeadersUncheckedCreateWithoutLeaderParticipatInput>
    connectOrCreate?: LeadersCreateOrConnectWithoutLeaderParticipatInput
    connect?: LeadersWhereUniqueInput
  }

  export type EventsCreateNestedOneWithoutLeaderParticipatInput = {
    create?: XOR<EventsCreateWithoutLeaderParticipatInput, EventsUncheckedCreateWithoutLeaderParticipatInput>
    connectOrCreate?: EventsCreateOrConnectWithoutLeaderParticipatInput
    connect?: EventsWhereUniqueInput
  }

  export type SportsCreateNestedOneWithoutLeaderParticipatInput = {
    create?: XOR<SportsCreateWithoutLeaderParticipatInput, SportsUncheckedCreateWithoutLeaderParticipatInput>
    connectOrCreate?: SportsCreateOrConnectWithoutLeaderParticipatInput
    connect?: SportsWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutLeaderParticipatInput = {
    create?: XOR<OrganizationCreateWithoutLeaderParticipatInput, OrganizationUncheckedCreateWithoutLeaderParticipatInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutLeaderParticipatInput
    connect?: OrganizationWhereUniqueInput
  }

  export type LeadersUpdateOneRequiredWithoutLeaderParticipatNestedInput = {
    create?: XOR<LeadersCreateWithoutLeaderParticipatInput, LeadersUncheckedCreateWithoutLeaderParticipatInput>
    connectOrCreate?: LeadersCreateOrConnectWithoutLeaderParticipatInput
    upsert?: LeadersUpsertWithoutLeaderParticipatInput
    connect?: LeadersWhereUniqueInput
    update?: XOR<XOR<LeadersUpdateToOneWithWhereWithoutLeaderParticipatInput, LeadersUpdateWithoutLeaderParticipatInput>, LeadersUncheckedUpdateWithoutLeaderParticipatInput>
  }

  export type EventsUpdateOneRequiredWithoutLeaderParticipatNestedInput = {
    create?: XOR<EventsCreateWithoutLeaderParticipatInput, EventsUncheckedCreateWithoutLeaderParticipatInput>
    connectOrCreate?: EventsCreateOrConnectWithoutLeaderParticipatInput
    upsert?: EventsUpsertWithoutLeaderParticipatInput
    connect?: EventsWhereUniqueInput
    update?: XOR<XOR<EventsUpdateToOneWithWhereWithoutLeaderParticipatInput, EventsUpdateWithoutLeaderParticipatInput>, EventsUncheckedUpdateWithoutLeaderParticipatInput>
  }

  export type SportsUpdateOneRequiredWithoutLeaderParticipatNestedInput = {
    create?: XOR<SportsCreateWithoutLeaderParticipatInput, SportsUncheckedCreateWithoutLeaderParticipatInput>
    connectOrCreate?: SportsCreateOrConnectWithoutLeaderParticipatInput
    upsert?: SportsUpsertWithoutLeaderParticipatInput
    connect?: SportsWhereUniqueInput
    update?: XOR<XOR<SportsUpdateToOneWithWhereWithoutLeaderParticipatInput, SportsUpdateWithoutLeaderParticipatInput>, SportsUncheckedUpdateWithoutLeaderParticipatInput>
  }

  export type OrganizationUpdateOneRequiredWithoutLeaderParticipatNestedInput = {
    create?: XOR<OrganizationCreateWithoutLeaderParticipatInput, OrganizationUncheckedCreateWithoutLeaderParticipatInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutLeaderParticipatInput
    upsert?: OrganizationUpsertWithoutLeaderParticipatInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutLeaderParticipatInput, OrganizationUpdateWithoutLeaderParticipatInput>, OrganizationUncheckedUpdateWithoutLeaderParticipatInput>
  }

  export type AthleteParticipatCreateNestedOneWithoutMedalsInput = {
    create?: XOR<AthleteParticipatCreateWithoutMedalsInput, AthleteParticipatUncheckedCreateWithoutMedalsInput>
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutMedalsInput
    connect?: AthleteParticipatWhereUniqueInput
  }

  export type EnumMedalTypeFieldUpdateOperationsInput = {
    set?: $Enums.MedalType
  }

  export type AthleteParticipatUpdateOneRequiredWithoutMedalsNestedInput = {
    create?: XOR<AthleteParticipatCreateWithoutMedalsInput, AthleteParticipatUncheckedCreateWithoutMedalsInput>
    connectOrCreate?: AthleteParticipatCreateOrConnectWithoutMedalsInput
    upsert?: AthleteParticipatUpsertWithoutMedalsInput
    connect?: AthleteParticipatWhereUniqueInput
    update?: XOR<XOR<AthleteParticipatUpdateToOneWithWhereWithoutMedalsInput, AthleteParticipatUpdateWithoutMedalsInput>, AthleteParticipatUncheckedUpdateWithoutMedalsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumIdDocTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IdDocType | EnumIdDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IdDocType[] | ListEnumIdDocTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IdDocType[] | ListEnumIdDocTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIdDocTypeFilter<$PrismaModel> | $Enums.IdDocType
  }

  export type NestedEnumIdDocTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IdDocType | EnumIdDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IdDocType[] | ListEnumIdDocTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IdDocType[] | ListEnumIdDocTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIdDocTypeWithAggregatesFilter<$PrismaModel> | $Enums.IdDocType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIdDocTypeFilter<$PrismaModel>
    _max?: NestedEnumIdDocTypeFilter<$PrismaModel>
  }

  export type NestedEnumLeaderRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaderRole | EnumLeaderRoleFieldRefInput<$PrismaModel>
    in?: $Enums.LeaderRole[] | ListEnumLeaderRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaderRole[] | ListEnumLeaderRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaderRoleFilter<$PrismaModel> | $Enums.LeaderRole
  }

  export type NestedEnumLeaderRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaderRole | EnumLeaderRoleFieldRefInput<$PrismaModel>
    in?: $Enums.LeaderRole[] | ListEnumLeaderRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaderRole[] | ListEnumLeaderRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaderRoleWithAggregatesFilter<$PrismaModel> | $Enums.LeaderRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaderRoleFilter<$PrismaModel>
    _max?: NestedEnumLeaderRoleFilter<$PrismaModel>
  }

  export type NestedEnumMedalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MedalType | EnumMedalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MedalType[] | ListEnumMedalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedalType[] | ListEnumMedalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMedalTypeFilter<$PrismaModel> | $Enums.MedalType
  }

  export type NestedEnumMedalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MedalType | EnumMedalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MedalType[] | ListEnumMedalTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedalType[] | ListEnumMedalTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMedalTypeWithAggregatesFilter<$PrismaModel> | $Enums.MedalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMedalTypeFilter<$PrismaModel>
    _max?: NestedEnumMedalTypeFilter<$PrismaModel>
  }

  export type EnrollCreateWithoutUserInput = {
    name: string
    gender: string
    nationality: string
    dob: Date | string
    idDocType: $Enums.IdDocType
    address?: string | null
    photoPath?: string | null
    DocumentsPath?: string | null
    createdAt?: Date | string
    athletes?: AthletesCreateNestedOneWithoutEnrollInput
    leaders?: LeadersCreateNestedOneWithoutEnrollInput
  }

  export type EnrollUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    gender: string
    nationality: string
    dob: Date | string
    idDocType: $Enums.IdDocType
    address?: string | null
    photoPath?: string | null
    DocumentsPath?: string | null
    createdAt?: Date | string
    athletes?: AthletesUncheckedCreateNestedOneWithoutEnrollInput
    leaders?: LeadersUncheckedCreateNestedOneWithoutEnrollInput
  }

  export type EnrollCreateOrConnectWithoutUserInput = {
    where: EnrollWhereUniqueInput
    create: XOR<EnrollCreateWithoutUserInput, EnrollUncheckedCreateWithoutUserInput>
  }

  export type EnrollCreateManyUserInputEnvelope = {
    data: EnrollCreateManyUserInput | EnrollCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EnrollUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrollWhereUniqueInput
    update: XOR<EnrollUpdateWithoutUserInput, EnrollUncheckedUpdateWithoutUserInput>
    create: XOR<EnrollCreateWithoutUserInput, EnrollUncheckedCreateWithoutUserInput>
  }

  export type EnrollUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrollWhereUniqueInput
    data: XOR<EnrollUpdateWithoutUserInput, EnrollUncheckedUpdateWithoutUserInput>
  }

  export type EnrollUpdateManyWithWhereWithoutUserInput = {
    where: EnrollScalarWhereInput
    data: XOR<EnrollUpdateManyMutationInput, EnrollUncheckedUpdateManyWithoutUserInput>
  }

  export type EnrollScalarWhereInput = {
    AND?: EnrollScalarWhereInput | EnrollScalarWhereInput[]
    OR?: EnrollScalarWhereInput[]
    NOT?: EnrollScalarWhereInput | EnrollScalarWhereInput[]
    id?: IntFilter<"Enroll"> | number
    userID?: IntFilter<"Enroll"> | number
    name?: StringFilter<"Enroll"> | string
    gender?: StringFilter<"Enroll"> | string
    nationality?: StringFilter<"Enroll"> | string
    dob?: DateTimeFilter<"Enroll"> | Date | string
    idDocType?: EnumIdDocTypeFilter<"Enroll"> | $Enums.IdDocType
    address?: StringNullableFilter<"Enroll"> | string | null
    photoPath?: StringNullableFilter<"Enroll"> | string | null
    DocumentsPath?: StringNullableFilter<"Enroll"> | string | null
    createdAt?: DateTimeFilter<"Enroll"> | Date | string
  }

  export type UsersCreateWithoutEnrollInput = {
    username: string
    password: string
    userLevel?: number
    photoPath?: string | null
    createdAt?: Date | string
  }

  export type UsersUncheckedCreateWithoutEnrollInput = {
    userID?: number
    username: string
    password: string
    userLevel?: number
    photoPath?: string | null
    createdAt?: Date | string
  }

  export type UsersCreateOrConnectWithoutEnrollInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutEnrollInput, UsersUncheckedCreateWithoutEnrollInput>
  }

  export type AthletesCreateWithoutEnrollInput = {
    class?: string | null
    uniformSize?: string | null
    createdAt?: Date | string
    AthleteParticipat?: AthleteParticipatCreateNestedManyWithoutAthletesInput
  }

  export type AthletesUncheckedCreateWithoutEnrollInput = {
    id?: number
    class?: string | null
    uniformSize?: string | null
    createdAt?: Date | string
    AthleteParticipat?: AthleteParticipatUncheckedCreateNestedManyWithoutAthletesInput
  }

  export type AthletesCreateOrConnectWithoutEnrollInput = {
    where: AthletesWhereUniqueInput
    create: XOR<AthletesCreateWithoutEnrollInput, AthletesUncheckedCreateWithoutEnrollInput>
  }

  export type LeadersCreateWithoutEnrollInput = {
    roles: $Enums.LeaderRole
    phoneNumber: string
    createdAt?: Date | string
    LeaderParticipat?: LeaderParticipatCreateNestedManyWithoutLeadersInput
  }

  export type LeadersUncheckedCreateWithoutEnrollInput = {
    id?: number
    roles: $Enums.LeaderRole
    phoneNumber: string
    createdAt?: Date | string
    LeaderParticipat?: LeaderParticipatUncheckedCreateNestedManyWithoutLeadersInput
  }

  export type LeadersCreateOrConnectWithoutEnrollInput = {
    where: LeadersWhereUniqueInput
    create: XOR<LeadersCreateWithoutEnrollInput, LeadersUncheckedCreateWithoutEnrollInput>
  }

  export type UsersUpsertWithoutEnrollInput = {
    update: XOR<UsersUpdateWithoutEnrollInput, UsersUncheckedUpdateWithoutEnrollInput>
    create: XOR<UsersCreateWithoutEnrollInput, UsersUncheckedCreateWithoutEnrollInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutEnrollInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutEnrollInput, UsersUncheckedUpdateWithoutEnrollInput>
  }

  export type UsersUpdateWithoutEnrollInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userLevel?: IntFieldUpdateOperationsInput | number
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutEnrollInput = {
    userID?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userLevel?: IntFieldUpdateOperationsInput | number
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AthletesUpsertWithoutEnrollInput = {
    update: XOR<AthletesUpdateWithoutEnrollInput, AthletesUncheckedUpdateWithoutEnrollInput>
    create: XOR<AthletesCreateWithoutEnrollInput, AthletesUncheckedCreateWithoutEnrollInput>
    where?: AthletesWhereInput
  }

  export type AthletesUpdateToOneWithWhereWithoutEnrollInput = {
    where?: AthletesWhereInput
    data: XOR<AthletesUpdateWithoutEnrollInput, AthletesUncheckedUpdateWithoutEnrollInput>
  }

  export type AthletesUpdateWithoutEnrollInput = {
    class?: NullableStringFieldUpdateOperationsInput | string | null
    uniformSize?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AthleteParticipat?: AthleteParticipatUpdateManyWithoutAthletesNestedInput
  }

  export type AthletesUncheckedUpdateWithoutEnrollInput = {
    id?: IntFieldUpdateOperationsInput | number
    class?: NullableStringFieldUpdateOperationsInput | string | null
    uniformSize?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AthleteParticipat?: AthleteParticipatUncheckedUpdateManyWithoutAthletesNestedInput
  }

  export type LeadersUpsertWithoutEnrollInput = {
    update: XOR<LeadersUpdateWithoutEnrollInput, LeadersUncheckedUpdateWithoutEnrollInput>
    create: XOR<LeadersCreateWithoutEnrollInput, LeadersUncheckedCreateWithoutEnrollInput>
    where?: LeadersWhereInput
  }

  export type LeadersUpdateToOneWithWhereWithoutEnrollInput = {
    where?: LeadersWhereInput
    data: XOR<LeadersUpdateWithoutEnrollInput, LeadersUncheckedUpdateWithoutEnrollInput>
  }

  export type LeadersUpdateWithoutEnrollInput = {
    roles?: EnumLeaderRoleFieldUpdateOperationsInput | $Enums.LeaderRole
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    LeaderParticipat?: LeaderParticipatUpdateManyWithoutLeadersNestedInput
  }

  export type LeadersUncheckedUpdateWithoutEnrollInput = {
    id?: IntFieldUpdateOperationsInput | number
    roles?: EnumLeaderRoleFieldUpdateOperationsInput | $Enums.LeaderRole
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    LeaderParticipat?: LeaderParticipatUncheckedUpdateManyWithoutLeadersNestedInput
  }

  export type EnrollCreateWithoutAthletesInput = {
    name: string
    gender: string
    nationality: string
    dob: Date | string
    idDocType: $Enums.IdDocType
    address?: string | null
    photoPath?: string | null
    DocumentsPath?: string | null
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutEnrollInput
    leaders?: LeadersCreateNestedOneWithoutEnrollInput
  }

  export type EnrollUncheckedCreateWithoutAthletesInput = {
    id?: number
    userID: number
    name: string
    gender: string
    nationality: string
    dob: Date | string
    idDocType: $Enums.IdDocType
    address?: string | null
    photoPath?: string | null
    DocumentsPath?: string | null
    createdAt?: Date | string
    leaders?: LeadersUncheckedCreateNestedOneWithoutEnrollInput
  }

  export type EnrollCreateOrConnectWithoutAthletesInput = {
    where: EnrollWhereUniqueInput
    create: XOR<EnrollCreateWithoutAthletesInput, EnrollUncheckedCreateWithoutAthletesInput>
  }

  export type AthleteParticipatCreateWithoutAthletesInput = {
    createdAt?: Date | string
    events: EventsCreateNestedOneWithoutAthleteParticipatInput
    categories: categoriesCreateNestedOneWithoutAthleteParticipatInput
    sports: SportsCreateNestedOneWithoutAthleteParticipatInput
    organization: OrganizationCreateNestedOneWithoutAthleteParticipatInput
    Medals?: MedalsCreateNestedManyWithoutAthleteParticipatInput
  }

  export type AthleteParticipatUncheckedCreateWithoutAthletesInput = {
    id?: number
    eventsID: number
    categoriesID: number
    sportsID: number
    organizationID: number
    createdAt?: Date | string
    Medals?: MedalsUncheckedCreateNestedManyWithoutAthleteParticipatInput
  }

  export type AthleteParticipatCreateOrConnectWithoutAthletesInput = {
    where: AthleteParticipatWhereUniqueInput
    create: XOR<AthleteParticipatCreateWithoutAthletesInput, AthleteParticipatUncheckedCreateWithoutAthletesInput>
  }

  export type AthleteParticipatCreateManyAthletesInputEnvelope = {
    data: AthleteParticipatCreateManyAthletesInput | AthleteParticipatCreateManyAthletesInput[]
    skipDuplicates?: boolean
  }

  export type EnrollUpsertWithoutAthletesInput = {
    update: XOR<EnrollUpdateWithoutAthletesInput, EnrollUncheckedUpdateWithoutAthletesInput>
    create: XOR<EnrollCreateWithoutAthletesInput, EnrollUncheckedCreateWithoutAthletesInput>
    where?: EnrollWhereInput
  }

  export type EnrollUpdateToOneWithWhereWithoutAthletesInput = {
    where?: EnrollWhereInput
    data: XOR<EnrollUpdateWithoutAthletesInput, EnrollUncheckedUpdateWithoutAthletesInput>
  }

  export type EnrollUpdateWithoutAthletesInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocType?: EnumIdDocTypeFieldUpdateOperationsInput | $Enums.IdDocType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutEnrollNestedInput
    leaders?: LeadersUpdateOneWithoutEnrollNestedInput
  }

  export type EnrollUncheckedUpdateWithoutAthletesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocType?: EnumIdDocTypeFieldUpdateOperationsInput | $Enums.IdDocType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaders?: LeadersUncheckedUpdateOneWithoutEnrollNestedInput
  }

  export type AthleteParticipatUpsertWithWhereUniqueWithoutAthletesInput = {
    where: AthleteParticipatWhereUniqueInput
    update: XOR<AthleteParticipatUpdateWithoutAthletesInput, AthleteParticipatUncheckedUpdateWithoutAthletesInput>
    create: XOR<AthleteParticipatCreateWithoutAthletesInput, AthleteParticipatUncheckedCreateWithoutAthletesInput>
  }

  export type AthleteParticipatUpdateWithWhereUniqueWithoutAthletesInput = {
    where: AthleteParticipatWhereUniqueInput
    data: XOR<AthleteParticipatUpdateWithoutAthletesInput, AthleteParticipatUncheckedUpdateWithoutAthletesInput>
  }

  export type AthleteParticipatUpdateManyWithWhereWithoutAthletesInput = {
    where: AthleteParticipatScalarWhereInput
    data: XOR<AthleteParticipatUpdateManyMutationInput, AthleteParticipatUncheckedUpdateManyWithoutAthletesInput>
  }

  export type AthleteParticipatScalarWhereInput = {
    AND?: AthleteParticipatScalarWhereInput | AthleteParticipatScalarWhereInput[]
    OR?: AthleteParticipatScalarWhereInput[]
    NOT?: AthleteParticipatScalarWhereInput | AthleteParticipatScalarWhereInput[]
    id?: IntFilter<"AthleteParticipat"> | number
    athletesID?: IntFilter<"AthleteParticipat"> | number
    eventsID?: IntFilter<"AthleteParticipat"> | number
    categoriesID?: IntFilter<"AthleteParticipat"> | number
    sportsID?: IntFilter<"AthleteParticipat"> | number
    organizationID?: IntFilter<"AthleteParticipat"> | number
    createdAt?: DateTimeFilter<"AthleteParticipat"> | Date | string
  }

  export type EnrollCreateWithoutLeadersInput = {
    name: string
    gender: string
    nationality: string
    dob: Date | string
    idDocType: $Enums.IdDocType
    address?: string | null
    photoPath?: string | null
    DocumentsPath?: string | null
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutEnrollInput
    athletes?: AthletesCreateNestedOneWithoutEnrollInput
  }

  export type EnrollUncheckedCreateWithoutLeadersInput = {
    id?: number
    userID: number
    name: string
    gender: string
    nationality: string
    dob: Date | string
    idDocType: $Enums.IdDocType
    address?: string | null
    photoPath?: string | null
    DocumentsPath?: string | null
    createdAt?: Date | string
    athletes?: AthletesUncheckedCreateNestedOneWithoutEnrollInput
  }

  export type EnrollCreateOrConnectWithoutLeadersInput = {
    where: EnrollWhereUniqueInput
    create: XOR<EnrollCreateWithoutLeadersInput, EnrollUncheckedCreateWithoutLeadersInput>
  }

  export type LeaderParticipatCreateWithoutLeadersInput = {
    createdAt?: Date | string
    events: EventsCreateNestedOneWithoutLeaderParticipatInput
    sports: SportsCreateNestedOneWithoutLeaderParticipatInput
    organization: OrganizationCreateNestedOneWithoutLeaderParticipatInput
  }

  export type LeaderParticipatUncheckedCreateWithoutLeadersInput = {
    id?: number
    eventsID: number
    sportsID: number
    organizationID: number
    createdAt?: Date | string
  }

  export type LeaderParticipatCreateOrConnectWithoutLeadersInput = {
    where: LeaderParticipatWhereUniqueInput
    create: XOR<LeaderParticipatCreateWithoutLeadersInput, LeaderParticipatUncheckedCreateWithoutLeadersInput>
  }

  export type LeaderParticipatCreateManyLeadersInputEnvelope = {
    data: LeaderParticipatCreateManyLeadersInput | LeaderParticipatCreateManyLeadersInput[]
    skipDuplicates?: boolean
  }

  export type EnrollUpsertWithoutLeadersInput = {
    update: XOR<EnrollUpdateWithoutLeadersInput, EnrollUncheckedUpdateWithoutLeadersInput>
    create: XOR<EnrollCreateWithoutLeadersInput, EnrollUncheckedCreateWithoutLeadersInput>
    where?: EnrollWhereInput
  }

  export type EnrollUpdateToOneWithWhereWithoutLeadersInput = {
    where?: EnrollWhereInput
    data: XOR<EnrollUpdateWithoutLeadersInput, EnrollUncheckedUpdateWithoutLeadersInput>
  }

  export type EnrollUpdateWithoutLeadersInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocType?: EnumIdDocTypeFieldUpdateOperationsInput | $Enums.IdDocType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutEnrollNestedInput
    athletes?: AthletesUpdateOneWithoutEnrollNestedInput
  }

  export type EnrollUncheckedUpdateWithoutLeadersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocType?: EnumIdDocTypeFieldUpdateOperationsInput | $Enums.IdDocType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    athletes?: AthletesUncheckedUpdateOneWithoutEnrollNestedInput
  }

  export type LeaderParticipatUpsertWithWhereUniqueWithoutLeadersInput = {
    where: LeaderParticipatWhereUniqueInput
    update: XOR<LeaderParticipatUpdateWithoutLeadersInput, LeaderParticipatUncheckedUpdateWithoutLeadersInput>
    create: XOR<LeaderParticipatCreateWithoutLeadersInput, LeaderParticipatUncheckedCreateWithoutLeadersInput>
  }

  export type LeaderParticipatUpdateWithWhereUniqueWithoutLeadersInput = {
    where: LeaderParticipatWhereUniqueInput
    data: XOR<LeaderParticipatUpdateWithoutLeadersInput, LeaderParticipatUncheckedUpdateWithoutLeadersInput>
  }

  export type LeaderParticipatUpdateManyWithWhereWithoutLeadersInput = {
    where: LeaderParticipatScalarWhereInput
    data: XOR<LeaderParticipatUpdateManyMutationInput, LeaderParticipatUncheckedUpdateManyWithoutLeadersInput>
  }

  export type LeaderParticipatScalarWhereInput = {
    AND?: LeaderParticipatScalarWhereInput | LeaderParticipatScalarWhereInput[]
    OR?: LeaderParticipatScalarWhereInput[]
    NOT?: LeaderParticipatScalarWhereInput | LeaderParticipatScalarWhereInput[]
    id?: IntFilter<"LeaderParticipat"> | number
    leadersID?: IntFilter<"LeaderParticipat"> | number
    eventsID?: IntFilter<"LeaderParticipat"> | number
    sportsID?: IntFilter<"LeaderParticipat"> | number
    organizationID?: IntFilter<"LeaderParticipat"> | number
    createdAt?: DateTimeFilter<"LeaderParticipat"> | Date | string
  }

  export type categoriesCreateWithoutEventsInput = {
    category: string
    createdAt?: Date | string
    sports: SportsCreateNestedOneWithoutCategoriesInput
    AthleteParticipat?: AthleteParticipatCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutEventsInput = {
    id?: number
    sportsID: number
    category: string
    createdAt?: Date | string
    AthleteParticipat?: AthleteParticipatUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutEventsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutEventsInput, categoriesUncheckedCreateWithoutEventsInput>
  }

  export type categoriesCreateManyEventsInputEnvelope = {
    data: categoriesCreateManyEventsInput | categoriesCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type AthleteParticipatCreateWithoutEventsInput = {
    createdAt?: Date | string
    athletes: AthletesCreateNestedOneWithoutAthleteParticipatInput
    categories: categoriesCreateNestedOneWithoutAthleteParticipatInput
    sports: SportsCreateNestedOneWithoutAthleteParticipatInput
    organization: OrganizationCreateNestedOneWithoutAthleteParticipatInput
    Medals?: MedalsCreateNestedManyWithoutAthleteParticipatInput
  }

  export type AthleteParticipatUncheckedCreateWithoutEventsInput = {
    id?: number
    athletesID: number
    categoriesID: number
    sportsID: number
    organizationID: number
    createdAt?: Date | string
    Medals?: MedalsUncheckedCreateNestedManyWithoutAthleteParticipatInput
  }

  export type AthleteParticipatCreateOrConnectWithoutEventsInput = {
    where: AthleteParticipatWhereUniqueInput
    create: XOR<AthleteParticipatCreateWithoutEventsInput, AthleteParticipatUncheckedCreateWithoutEventsInput>
  }

  export type AthleteParticipatCreateManyEventsInputEnvelope = {
    data: AthleteParticipatCreateManyEventsInput | AthleteParticipatCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type LeaderParticipatCreateWithoutEventsInput = {
    createdAt?: Date | string
    leaders: LeadersCreateNestedOneWithoutLeaderParticipatInput
    sports: SportsCreateNestedOneWithoutLeaderParticipatInput
    organization: OrganizationCreateNestedOneWithoutLeaderParticipatInput
  }

  export type LeaderParticipatUncheckedCreateWithoutEventsInput = {
    id?: number
    leadersID: number
    sportsID: number
    organizationID: number
    createdAt?: Date | string
  }

  export type LeaderParticipatCreateOrConnectWithoutEventsInput = {
    where: LeaderParticipatWhereUniqueInput
    create: XOR<LeaderParticipatCreateWithoutEventsInput, LeaderParticipatUncheckedCreateWithoutEventsInput>
  }

  export type LeaderParticipatCreateManyEventsInputEnvelope = {
    data: LeaderParticipatCreateManyEventsInput | LeaderParticipatCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type Sports_event_orgCreateWithoutEventsInput = {
    createdAt?: Date | string
    sports: SportsCreateNestedOneWithoutSports_event_orgInput
    organization: OrganizationCreateNestedOneWithoutSports_event_orgInput
  }

  export type Sports_event_orgUncheckedCreateWithoutEventsInput = {
    id?: number
    sports_id: number
    organization_id: number
    createdAt?: Date | string
  }

  export type Sports_event_orgCreateOrConnectWithoutEventsInput = {
    where: Sports_event_orgWhereUniqueInput
    create: XOR<Sports_event_orgCreateWithoutEventsInput, Sports_event_orgUncheckedCreateWithoutEventsInput>
  }

  export type Sports_event_orgCreateManyEventsInputEnvelope = {
    data: Sports_event_orgCreateManyEventsInput | Sports_event_orgCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type categoriesUpsertWithWhereUniqueWithoutEventsInput = {
    where: categoriesWhereUniqueInput
    update: XOR<categoriesUpdateWithoutEventsInput, categoriesUncheckedUpdateWithoutEventsInput>
    create: XOR<categoriesCreateWithoutEventsInput, categoriesUncheckedCreateWithoutEventsInput>
  }

  export type categoriesUpdateWithWhereUniqueWithoutEventsInput = {
    where: categoriesWhereUniqueInput
    data: XOR<categoriesUpdateWithoutEventsInput, categoriesUncheckedUpdateWithoutEventsInput>
  }

  export type categoriesUpdateManyWithWhereWithoutEventsInput = {
    where: categoriesScalarWhereInput
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyWithoutEventsInput>
  }

  export type categoriesScalarWhereInput = {
    AND?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    OR?: categoriesScalarWhereInput[]
    NOT?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    id?: IntFilter<"categories"> | number
    events_id?: IntFilter<"categories"> | number
    sportsID?: IntFilter<"categories"> | number
    category?: StringFilter<"categories"> | string
    createdAt?: DateTimeFilter<"categories"> | Date | string
  }

  export type AthleteParticipatUpsertWithWhereUniqueWithoutEventsInput = {
    where: AthleteParticipatWhereUniqueInput
    update: XOR<AthleteParticipatUpdateWithoutEventsInput, AthleteParticipatUncheckedUpdateWithoutEventsInput>
    create: XOR<AthleteParticipatCreateWithoutEventsInput, AthleteParticipatUncheckedCreateWithoutEventsInput>
  }

  export type AthleteParticipatUpdateWithWhereUniqueWithoutEventsInput = {
    where: AthleteParticipatWhereUniqueInput
    data: XOR<AthleteParticipatUpdateWithoutEventsInput, AthleteParticipatUncheckedUpdateWithoutEventsInput>
  }

  export type AthleteParticipatUpdateManyWithWhereWithoutEventsInput = {
    where: AthleteParticipatScalarWhereInput
    data: XOR<AthleteParticipatUpdateManyMutationInput, AthleteParticipatUncheckedUpdateManyWithoutEventsInput>
  }

  export type LeaderParticipatUpsertWithWhereUniqueWithoutEventsInput = {
    where: LeaderParticipatWhereUniqueInput
    update: XOR<LeaderParticipatUpdateWithoutEventsInput, LeaderParticipatUncheckedUpdateWithoutEventsInput>
    create: XOR<LeaderParticipatCreateWithoutEventsInput, LeaderParticipatUncheckedCreateWithoutEventsInput>
  }

  export type LeaderParticipatUpdateWithWhereUniqueWithoutEventsInput = {
    where: LeaderParticipatWhereUniqueInput
    data: XOR<LeaderParticipatUpdateWithoutEventsInput, LeaderParticipatUncheckedUpdateWithoutEventsInput>
  }

  export type LeaderParticipatUpdateManyWithWhereWithoutEventsInput = {
    where: LeaderParticipatScalarWhereInput
    data: XOR<LeaderParticipatUpdateManyMutationInput, LeaderParticipatUncheckedUpdateManyWithoutEventsInput>
  }

  export type Sports_event_orgUpsertWithWhereUniqueWithoutEventsInput = {
    where: Sports_event_orgWhereUniqueInput
    update: XOR<Sports_event_orgUpdateWithoutEventsInput, Sports_event_orgUncheckedUpdateWithoutEventsInput>
    create: XOR<Sports_event_orgCreateWithoutEventsInput, Sports_event_orgUncheckedCreateWithoutEventsInput>
  }

  export type Sports_event_orgUpdateWithWhereUniqueWithoutEventsInput = {
    where: Sports_event_orgWhereUniqueInput
    data: XOR<Sports_event_orgUpdateWithoutEventsInput, Sports_event_orgUncheckedUpdateWithoutEventsInput>
  }

  export type Sports_event_orgUpdateManyWithWhereWithoutEventsInput = {
    where: Sports_event_orgScalarWhereInput
    data: XOR<Sports_event_orgUpdateManyMutationInput, Sports_event_orgUncheckedUpdateManyWithoutEventsInput>
  }

  export type Sports_event_orgScalarWhereInput = {
    AND?: Sports_event_orgScalarWhereInput | Sports_event_orgScalarWhereInput[]
    OR?: Sports_event_orgScalarWhereInput[]
    NOT?: Sports_event_orgScalarWhereInput | Sports_event_orgScalarWhereInput[]
    id?: IntFilter<"Sports_event_org"> | number
    events_id?: IntFilter<"Sports_event_org"> | number
    sports_id?: IntFilter<"Sports_event_org"> | number
    organization_id?: IntFilter<"Sports_event_org"> | number
    createdAt?: DateTimeFilter<"Sports_event_org"> | Date | string
  }

  export type categoriesCreateWithoutSportsInput = {
    category: string
    createdAt?: Date | string
    events: EventsCreateNestedOneWithoutCategoriesInput
    AthleteParticipat?: AthleteParticipatCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutSportsInput = {
    id?: number
    events_id: number
    category: string
    createdAt?: Date | string
    AthleteParticipat?: AthleteParticipatUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutSportsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutSportsInput, categoriesUncheckedCreateWithoutSportsInput>
  }

  export type categoriesCreateManySportsInputEnvelope = {
    data: categoriesCreateManySportsInput | categoriesCreateManySportsInput[]
    skipDuplicates?: boolean
  }

  export type AthleteParticipatCreateWithoutSportsInput = {
    createdAt?: Date | string
    athletes: AthletesCreateNestedOneWithoutAthleteParticipatInput
    events: EventsCreateNestedOneWithoutAthleteParticipatInput
    categories: categoriesCreateNestedOneWithoutAthleteParticipatInput
    organization: OrganizationCreateNestedOneWithoutAthleteParticipatInput
    Medals?: MedalsCreateNestedManyWithoutAthleteParticipatInput
  }

  export type AthleteParticipatUncheckedCreateWithoutSportsInput = {
    id?: number
    athletesID: number
    eventsID: number
    categoriesID: number
    organizationID: number
    createdAt?: Date | string
    Medals?: MedalsUncheckedCreateNestedManyWithoutAthleteParticipatInput
  }

  export type AthleteParticipatCreateOrConnectWithoutSportsInput = {
    where: AthleteParticipatWhereUniqueInput
    create: XOR<AthleteParticipatCreateWithoutSportsInput, AthleteParticipatUncheckedCreateWithoutSportsInput>
  }

  export type AthleteParticipatCreateManySportsInputEnvelope = {
    data: AthleteParticipatCreateManySportsInput | AthleteParticipatCreateManySportsInput[]
    skipDuplicates?: boolean
  }

  export type LeaderParticipatCreateWithoutSportsInput = {
    createdAt?: Date | string
    leaders: LeadersCreateNestedOneWithoutLeaderParticipatInput
    events: EventsCreateNestedOneWithoutLeaderParticipatInput
    organization: OrganizationCreateNestedOneWithoutLeaderParticipatInput
  }

  export type LeaderParticipatUncheckedCreateWithoutSportsInput = {
    id?: number
    leadersID: number
    eventsID: number
    organizationID: number
    createdAt?: Date | string
  }

  export type LeaderParticipatCreateOrConnectWithoutSportsInput = {
    where: LeaderParticipatWhereUniqueInput
    create: XOR<LeaderParticipatCreateWithoutSportsInput, LeaderParticipatUncheckedCreateWithoutSportsInput>
  }

  export type LeaderParticipatCreateManySportsInputEnvelope = {
    data: LeaderParticipatCreateManySportsInput | LeaderParticipatCreateManySportsInput[]
    skipDuplicates?: boolean
  }

  export type Sports_event_orgCreateWithoutSportsInput = {
    createdAt?: Date | string
    events: EventsCreateNestedOneWithoutSports_event_orgInput
    organization: OrganizationCreateNestedOneWithoutSports_event_orgInput
  }

  export type Sports_event_orgUncheckedCreateWithoutSportsInput = {
    id?: number
    events_id: number
    organization_id: number
    createdAt?: Date | string
  }

  export type Sports_event_orgCreateOrConnectWithoutSportsInput = {
    where: Sports_event_orgWhereUniqueInput
    create: XOR<Sports_event_orgCreateWithoutSportsInput, Sports_event_orgUncheckedCreateWithoutSportsInput>
  }

  export type Sports_event_orgCreateManySportsInputEnvelope = {
    data: Sports_event_orgCreateManySportsInput | Sports_event_orgCreateManySportsInput[]
    skipDuplicates?: boolean
  }

  export type categoriesUpsertWithWhereUniqueWithoutSportsInput = {
    where: categoriesWhereUniqueInput
    update: XOR<categoriesUpdateWithoutSportsInput, categoriesUncheckedUpdateWithoutSportsInput>
    create: XOR<categoriesCreateWithoutSportsInput, categoriesUncheckedCreateWithoutSportsInput>
  }

  export type categoriesUpdateWithWhereUniqueWithoutSportsInput = {
    where: categoriesWhereUniqueInput
    data: XOR<categoriesUpdateWithoutSportsInput, categoriesUncheckedUpdateWithoutSportsInput>
  }

  export type categoriesUpdateManyWithWhereWithoutSportsInput = {
    where: categoriesScalarWhereInput
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyWithoutSportsInput>
  }

  export type AthleteParticipatUpsertWithWhereUniqueWithoutSportsInput = {
    where: AthleteParticipatWhereUniqueInput
    update: XOR<AthleteParticipatUpdateWithoutSportsInput, AthleteParticipatUncheckedUpdateWithoutSportsInput>
    create: XOR<AthleteParticipatCreateWithoutSportsInput, AthleteParticipatUncheckedCreateWithoutSportsInput>
  }

  export type AthleteParticipatUpdateWithWhereUniqueWithoutSportsInput = {
    where: AthleteParticipatWhereUniqueInput
    data: XOR<AthleteParticipatUpdateWithoutSportsInput, AthleteParticipatUncheckedUpdateWithoutSportsInput>
  }

  export type AthleteParticipatUpdateManyWithWhereWithoutSportsInput = {
    where: AthleteParticipatScalarWhereInput
    data: XOR<AthleteParticipatUpdateManyMutationInput, AthleteParticipatUncheckedUpdateManyWithoutSportsInput>
  }

  export type LeaderParticipatUpsertWithWhereUniqueWithoutSportsInput = {
    where: LeaderParticipatWhereUniqueInput
    update: XOR<LeaderParticipatUpdateWithoutSportsInput, LeaderParticipatUncheckedUpdateWithoutSportsInput>
    create: XOR<LeaderParticipatCreateWithoutSportsInput, LeaderParticipatUncheckedCreateWithoutSportsInput>
  }

  export type LeaderParticipatUpdateWithWhereUniqueWithoutSportsInput = {
    where: LeaderParticipatWhereUniqueInput
    data: XOR<LeaderParticipatUpdateWithoutSportsInput, LeaderParticipatUncheckedUpdateWithoutSportsInput>
  }

  export type LeaderParticipatUpdateManyWithWhereWithoutSportsInput = {
    where: LeaderParticipatScalarWhereInput
    data: XOR<LeaderParticipatUpdateManyMutationInput, LeaderParticipatUncheckedUpdateManyWithoutSportsInput>
  }

  export type Sports_event_orgUpsertWithWhereUniqueWithoutSportsInput = {
    where: Sports_event_orgWhereUniqueInput
    update: XOR<Sports_event_orgUpdateWithoutSportsInput, Sports_event_orgUncheckedUpdateWithoutSportsInput>
    create: XOR<Sports_event_orgCreateWithoutSportsInput, Sports_event_orgUncheckedCreateWithoutSportsInput>
  }

  export type Sports_event_orgUpdateWithWhereUniqueWithoutSportsInput = {
    where: Sports_event_orgWhereUniqueInput
    data: XOR<Sports_event_orgUpdateWithoutSportsInput, Sports_event_orgUncheckedUpdateWithoutSportsInput>
  }

  export type Sports_event_orgUpdateManyWithWhereWithoutSportsInput = {
    where: Sports_event_orgScalarWhereInput
    data: XOR<Sports_event_orgUpdateManyMutationInput, Sports_event_orgUncheckedUpdateManyWithoutSportsInput>
  }

  export type AthleteParticipatCreateWithoutOrganizationInput = {
    createdAt?: Date | string
    athletes: AthletesCreateNestedOneWithoutAthleteParticipatInput
    events: EventsCreateNestedOneWithoutAthleteParticipatInput
    categories: categoriesCreateNestedOneWithoutAthleteParticipatInput
    sports: SportsCreateNestedOneWithoutAthleteParticipatInput
    Medals?: MedalsCreateNestedManyWithoutAthleteParticipatInput
  }

  export type AthleteParticipatUncheckedCreateWithoutOrganizationInput = {
    id?: number
    athletesID: number
    eventsID: number
    categoriesID: number
    sportsID: number
    createdAt?: Date | string
    Medals?: MedalsUncheckedCreateNestedManyWithoutAthleteParticipatInput
  }

  export type AthleteParticipatCreateOrConnectWithoutOrganizationInput = {
    where: AthleteParticipatWhereUniqueInput
    create: XOR<AthleteParticipatCreateWithoutOrganizationInput, AthleteParticipatUncheckedCreateWithoutOrganizationInput>
  }

  export type AthleteParticipatCreateManyOrganizationInputEnvelope = {
    data: AthleteParticipatCreateManyOrganizationInput | AthleteParticipatCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type LeaderParticipatCreateWithoutOrganizationInput = {
    createdAt?: Date | string
    leaders: LeadersCreateNestedOneWithoutLeaderParticipatInput
    events: EventsCreateNestedOneWithoutLeaderParticipatInput
    sports: SportsCreateNestedOneWithoutLeaderParticipatInput
  }

  export type LeaderParticipatUncheckedCreateWithoutOrganizationInput = {
    id?: number
    leadersID: number
    eventsID: number
    sportsID: number
    createdAt?: Date | string
  }

  export type LeaderParticipatCreateOrConnectWithoutOrganizationInput = {
    where: LeaderParticipatWhereUniqueInput
    create: XOR<LeaderParticipatCreateWithoutOrganizationInput, LeaderParticipatUncheckedCreateWithoutOrganizationInput>
  }

  export type LeaderParticipatCreateManyOrganizationInputEnvelope = {
    data: LeaderParticipatCreateManyOrganizationInput | LeaderParticipatCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type Sports_event_orgCreateWithoutOrganizationInput = {
    createdAt?: Date | string
    events: EventsCreateNestedOneWithoutSports_event_orgInput
    sports: SportsCreateNestedOneWithoutSports_event_orgInput
  }

  export type Sports_event_orgUncheckedCreateWithoutOrganizationInput = {
    id?: number
    events_id: number
    sports_id: number
    createdAt?: Date | string
  }

  export type Sports_event_orgCreateOrConnectWithoutOrganizationInput = {
    where: Sports_event_orgWhereUniqueInput
    create: XOR<Sports_event_orgCreateWithoutOrganizationInput, Sports_event_orgUncheckedCreateWithoutOrganizationInput>
  }

  export type Sports_event_orgCreateManyOrganizationInputEnvelope = {
    data: Sports_event_orgCreateManyOrganizationInput | Sports_event_orgCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type AthleteParticipatUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AthleteParticipatWhereUniqueInput
    update: XOR<AthleteParticipatUpdateWithoutOrganizationInput, AthleteParticipatUncheckedUpdateWithoutOrganizationInput>
    create: XOR<AthleteParticipatCreateWithoutOrganizationInput, AthleteParticipatUncheckedCreateWithoutOrganizationInput>
  }

  export type AthleteParticipatUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AthleteParticipatWhereUniqueInput
    data: XOR<AthleteParticipatUpdateWithoutOrganizationInput, AthleteParticipatUncheckedUpdateWithoutOrganizationInput>
  }

  export type AthleteParticipatUpdateManyWithWhereWithoutOrganizationInput = {
    where: AthleteParticipatScalarWhereInput
    data: XOR<AthleteParticipatUpdateManyMutationInput, AthleteParticipatUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type LeaderParticipatUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: LeaderParticipatWhereUniqueInput
    update: XOR<LeaderParticipatUpdateWithoutOrganizationInput, LeaderParticipatUncheckedUpdateWithoutOrganizationInput>
    create: XOR<LeaderParticipatCreateWithoutOrganizationInput, LeaderParticipatUncheckedCreateWithoutOrganizationInput>
  }

  export type LeaderParticipatUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: LeaderParticipatWhereUniqueInput
    data: XOR<LeaderParticipatUpdateWithoutOrganizationInput, LeaderParticipatUncheckedUpdateWithoutOrganizationInput>
  }

  export type LeaderParticipatUpdateManyWithWhereWithoutOrganizationInput = {
    where: LeaderParticipatScalarWhereInput
    data: XOR<LeaderParticipatUpdateManyMutationInput, LeaderParticipatUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type Sports_event_orgUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Sports_event_orgWhereUniqueInput
    update: XOR<Sports_event_orgUpdateWithoutOrganizationInput, Sports_event_orgUncheckedUpdateWithoutOrganizationInput>
    create: XOR<Sports_event_orgCreateWithoutOrganizationInput, Sports_event_orgUncheckedCreateWithoutOrganizationInput>
  }

  export type Sports_event_orgUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Sports_event_orgWhereUniqueInput
    data: XOR<Sports_event_orgUpdateWithoutOrganizationInput, Sports_event_orgUncheckedUpdateWithoutOrganizationInput>
  }

  export type Sports_event_orgUpdateManyWithWhereWithoutOrganizationInput = {
    where: Sports_event_orgScalarWhereInput
    data: XOR<Sports_event_orgUpdateManyMutationInput, Sports_event_orgUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type EventsCreateWithoutCategoriesInput = {
    name: string
    date: Date | string
    createdAt?: Date | string
    AthleteParticipat?: AthleteParticipatCreateNestedManyWithoutEventsInput
    LeaderParticipat?: LeaderParticipatCreateNestedManyWithoutEventsInput
    Sports_event_org?: Sports_event_orgCreateNestedManyWithoutEventsInput
  }

  export type EventsUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    date: Date | string
    createdAt?: Date | string
    AthleteParticipat?: AthleteParticipatUncheckedCreateNestedManyWithoutEventsInput
    LeaderParticipat?: LeaderParticipatUncheckedCreateNestedManyWithoutEventsInput
    Sports_event_org?: Sports_event_orgUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventsCreateOrConnectWithoutCategoriesInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutCategoriesInput, EventsUncheckedCreateWithoutCategoriesInput>
  }

  export type SportsCreateWithoutCategoriesInput = {
    name: string
    createdAt?: Date | string
    AthleteParticipat?: AthleteParticipatCreateNestedManyWithoutSportsInput
    LeaderParticipat?: LeaderParticipatCreateNestedManyWithoutSportsInput
    Sports_event_org?: Sports_event_orgCreateNestedManyWithoutSportsInput
  }

  export type SportsUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    AthleteParticipat?: AthleteParticipatUncheckedCreateNestedManyWithoutSportsInput
    LeaderParticipat?: LeaderParticipatUncheckedCreateNestedManyWithoutSportsInput
    Sports_event_org?: Sports_event_orgUncheckedCreateNestedManyWithoutSportsInput
  }

  export type SportsCreateOrConnectWithoutCategoriesInput = {
    where: SportsWhereUniqueInput
    create: XOR<SportsCreateWithoutCategoriesInput, SportsUncheckedCreateWithoutCategoriesInput>
  }

  export type AthleteParticipatCreateWithoutCategoriesInput = {
    createdAt?: Date | string
    athletes: AthletesCreateNestedOneWithoutAthleteParticipatInput
    events: EventsCreateNestedOneWithoutAthleteParticipatInput
    sports: SportsCreateNestedOneWithoutAthleteParticipatInput
    organization: OrganizationCreateNestedOneWithoutAthleteParticipatInput
    Medals?: MedalsCreateNestedManyWithoutAthleteParticipatInput
  }

  export type AthleteParticipatUncheckedCreateWithoutCategoriesInput = {
    id?: number
    athletesID: number
    eventsID: number
    sportsID: number
    organizationID: number
    createdAt?: Date | string
    Medals?: MedalsUncheckedCreateNestedManyWithoutAthleteParticipatInput
  }

  export type AthleteParticipatCreateOrConnectWithoutCategoriesInput = {
    where: AthleteParticipatWhereUniqueInput
    create: XOR<AthleteParticipatCreateWithoutCategoriesInput, AthleteParticipatUncheckedCreateWithoutCategoriesInput>
  }

  export type AthleteParticipatCreateManyCategoriesInputEnvelope = {
    data: AthleteParticipatCreateManyCategoriesInput | AthleteParticipatCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type EventsUpsertWithoutCategoriesInput = {
    update: XOR<EventsUpdateWithoutCategoriesInput, EventsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<EventsCreateWithoutCategoriesInput, EventsUncheckedCreateWithoutCategoriesInput>
    where?: EventsWhereInput
  }

  export type EventsUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: EventsWhereInput
    data: XOR<EventsUpdateWithoutCategoriesInput, EventsUncheckedUpdateWithoutCategoriesInput>
  }

  export type EventsUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AthleteParticipat?: AthleteParticipatUpdateManyWithoutEventsNestedInput
    LeaderParticipat?: LeaderParticipatUpdateManyWithoutEventsNestedInput
    Sports_event_org?: Sports_event_orgUpdateManyWithoutEventsNestedInput
  }

  export type EventsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AthleteParticipat?: AthleteParticipatUncheckedUpdateManyWithoutEventsNestedInput
    LeaderParticipat?: LeaderParticipatUncheckedUpdateManyWithoutEventsNestedInput
    Sports_event_org?: Sports_event_orgUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type SportsUpsertWithoutCategoriesInput = {
    update: XOR<SportsUpdateWithoutCategoriesInput, SportsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<SportsCreateWithoutCategoriesInput, SportsUncheckedCreateWithoutCategoriesInput>
    where?: SportsWhereInput
  }

  export type SportsUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: SportsWhereInput
    data: XOR<SportsUpdateWithoutCategoriesInput, SportsUncheckedUpdateWithoutCategoriesInput>
  }

  export type SportsUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AthleteParticipat?: AthleteParticipatUpdateManyWithoutSportsNestedInput
    LeaderParticipat?: LeaderParticipatUpdateManyWithoutSportsNestedInput
    Sports_event_org?: Sports_event_orgUpdateManyWithoutSportsNestedInput
  }

  export type SportsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AthleteParticipat?: AthleteParticipatUncheckedUpdateManyWithoutSportsNestedInput
    LeaderParticipat?: LeaderParticipatUncheckedUpdateManyWithoutSportsNestedInput
    Sports_event_org?: Sports_event_orgUncheckedUpdateManyWithoutSportsNestedInput
  }

  export type AthleteParticipatUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: AthleteParticipatWhereUniqueInput
    update: XOR<AthleteParticipatUpdateWithoutCategoriesInput, AthleteParticipatUncheckedUpdateWithoutCategoriesInput>
    create: XOR<AthleteParticipatCreateWithoutCategoriesInput, AthleteParticipatUncheckedCreateWithoutCategoriesInput>
  }

  export type AthleteParticipatUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: AthleteParticipatWhereUniqueInput
    data: XOR<AthleteParticipatUpdateWithoutCategoriesInput, AthleteParticipatUncheckedUpdateWithoutCategoriesInput>
  }

  export type AthleteParticipatUpdateManyWithWhereWithoutCategoriesInput = {
    where: AthleteParticipatScalarWhereInput
    data: XOR<AthleteParticipatUpdateManyMutationInput, AthleteParticipatUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type EventsCreateWithoutSports_event_orgInput = {
    name: string
    date: Date | string
    createdAt?: Date | string
    categories?: categoriesCreateNestedManyWithoutEventsInput
    AthleteParticipat?: AthleteParticipatCreateNestedManyWithoutEventsInput
    LeaderParticipat?: LeaderParticipatCreateNestedManyWithoutEventsInput
  }

  export type EventsUncheckedCreateWithoutSports_event_orgInput = {
    id?: number
    name: string
    date: Date | string
    createdAt?: Date | string
    categories?: categoriesUncheckedCreateNestedManyWithoutEventsInput
    AthleteParticipat?: AthleteParticipatUncheckedCreateNestedManyWithoutEventsInput
    LeaderParticipat?: LeaderParticipatUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventsCreateOrConnectWithoutSports_event_orgInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutSports_event_orgInput, EventsUncheckedCreateWithoutSports_event_orgInput>
  }

  export type SportsCreateWithoutSports_event_orgInput = {
    name: string
    createdAt?: Date | string
    categories?: categoriesCreateNestedManyWithoutSportsInput
    AthleteParticipat?: AthleteParticipatCreateNestedManyWithoutSportsInput
    LeaderParticipat?: LeaderParticipatCreateNestedManyWithoutSportsInput
  }

  export type SportsUncheckedCreateWithoutSports_event_orgInput = {
    id?: number
    name: string
    createdAt?: Date | string
    categories?: categoriesUncheckedCreateNestedManyWithoutSportsInput
    AthleteParticipat?: AthleteParticipatUncheckedCreateNestedManyWithoutSportsInput
    LeaderParticipat?: LeaderParticipatUncheckedCreateNestedManyWithoutSportsInput
  }

  export type SportsCreateOrConnectWithoutSports_event_orgInput = {
    where: SportsWhereUniqueInput
    create: XOR<SportsCreateWithoutSports_event_orgInput, SportsUncheckedCreateWithoutSports_event_orgInput>
  }

  export type OrganizationCreateWithoutSports_event_orgInput = {
    name: string
    createdAt?: Date | string
    AthleteParticipat?: AthleteParticipatCreateNestedManyWithoutOrganizationInput
    LeaderParticipat?: LeaderParticipatCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutSports_event_orgInput = {
    id?: number
    name: string
    createdAt?: Date | string
    AthleteParticipat?: AthleteParticipatUncheckedCreateNestedManyWithoutOrganizationInput
    LeaderParticipat?: LeaderParticipatUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutSports_event_orgInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutSports_event_orgInput, OrganizationUncheckedCreateWithoutSports_event_orgInput>
  }

  export type EventsUpsertWithoutSports_event_orgInput = {
    update: XOR<EventsUpdateWithoutSports_event_orgInput, EventsUncheckedUpdateWithoutSports_event_orgInput>
    create: XOR<EventsCreateWithoutSports_event_orgInput, EventsUncheckedCreateWithoutSports_event_orgInput>
    where?: EventsWhereInput
  }

  export type EventsUpdateToOneWithWhereWithoutSports_event_orgInput = {
    where?: EventsWhereInput
    data: XOR<EventsUpdateWithoutSports_event_orgInput, EventsUncheckedUpdateWithoutSports_event_orgInput>
  }

  export type EventsUpdateWithoutSports_event_orgInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateManyWithoutEventsNestedInput
    AthleteParticipat?: AthleteParticipatUpdateManyWithoutEventsNestedInput
    LeaderParticipat?: LeaderParticipatUpdateManyWithoutEventsNestedInput
  }

  export type EventsUncheckedUpdateWithoutSports_event_orgInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUncheckedUpdateManyWithoutEventsNestedInput
    AthleteParticipat?: AthleteParticipatUncheckedUpdateManyWithoutEventsNestedInput
    LeaderParticipat?: LeaderParticipatUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type SportsUpsertWithoutSports_event_orgInput = {
    update: XOR<SportsUpdateWithoutSports_event_orgInput, SportsUncheckedUpdateWithoutSports_event_orgInput>
    create: XOR<SportsCreateWithoutSports_event_orgInput, SportsUncheckedCreateWithoutSports_event_orgInput>
    where?: SportsWhereInput
  }

  export type SportsUpdateToOneWithWhereWithoutSports_event_orgInput = {
    where?: SportsWhereInput
    data: XOR<SportsUpdateWithoutSports_event_orgInput, SportsUncheckedUpdateWithoutSports_event_orgInput>
  }

  export type SportsUpdateWithoutSports_event_orgInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateManyWithoutSportsNestedInput
    AthleteParticipat?: AthleteParticipatUpdateManyWithoutSportsNestedInput
    LeaderParticipat?: LeaderParticipatUpdateManyWithoutSportsNestedInput
  }

  export type SportsUncheckedUpdateWithoutSports_event_orgInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUncheckedUpdateManyWithoutSportsNestedInput
    AthleteParticipat?: AthleteParticipatUncheckedUpdateManyWithoutSportsNestedInput
    LeaderParticipat?: LeaderParticipatUncheckedUpdateManyWithoutSportsNestedInput
  }

  export type OrganizationUpsertWithoutSports_event_orgInput = {
    update: XOR<OrganizationUpdateWithoutSports_event_orgInput, OrganizationUncheckedUpdateWithoutSports_event_orgInput>
    create: XOR<OrganizationCreateWithoutSports_event_orgInput, OrganizationUncheckedCreateWithoutSports_event_orgInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutSports_event_orgInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutSports_event_orgInput, OrganizationUncheckedUpdateWithoutSports_event_orgInput>
  }

  export type OrganizationUpdateWithoutSports_event_orgInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AthleteParticipat?: AthleteParticipatUpdateManyWithoutOrganizationNestedInput
    LeaderParticipat?: LeaderParticipatUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutSports_event_orgInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AthleteParticipat?: AthleteParticipatUncheckedUpdateManyWithoutOrganizationNestedInput
    LeaderParticipat?: LeaderParticipatUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type AthletesCreateWithoutAthleteParticipatInput = {
    class?: string | null
    uniformSize?: string | null
    createdAt?: Date | string
    enroll: EnrollCreateNestedOneWithoutAthletesInput
  }

  export type AthletesUncheckedCreateWithoutAthleteParticipatInput = {
    id?: number
    enrollID: number
    class?: string | null
    uniformSize?: string | null
    createdAt?: Date | string
  }

  export type AthletesCreateOrConnectWithoutAthleteParticipatInput = {
    where: AthletesWhereUniqueInput
    create: XOR<AthletesCreateWithoutAthleteParticipatInput, AthletesUncheckedCreateWithoutAthleteParticipatInput>
  }

  export type EventsCreateWithoutAthleteParticipatInput = {
    name: string
    date: Date | string
    createdAt?: Date | string
    categories?: categoriesCreateNestedManyWithoutEventsInput
    LeaderParticipat?: LeaderParticipatCreateNestedManyWithoutEventsInput
    Sports_event_org?: Sports_event_orgCreateNestedManyWithoutEventsInput
  }

  export type EventsUncheckedCreateWithoutAthleteParticipatInput = {
    id?: number
    name: string
    date: Date | string
    createdAt?: Date | string
    categories?: categoriesUncheckedCreateNestedManyWithoutEventsInput
    LeaderParticipat?: LeaderParticipatUncheckedCreateNestedManyWithoutEventsInput
    Sports_event_org?: Sports_event_orgUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventsCreateOrConnectWithoutAthleteParticipatInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutAthleteParticipatInput, EventsUncheckedCreateWithoutAthleteParticipatInput>
  }

  export type categoriesCreateWithoutAthleteParticipatInput = {
    category: string
    createdAt?: Date | string
    events: EventsCreateNestedOneWithoutCategoriesInput
    sports: SportsCreateNestedOneWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutAthleteParticipatInput = {
    id?: number
    events_id: number
    sportsID: number
    category: string
    createdAt?: Date | string
  }

  export type categoriesCreateOrConnectWithoutAthleteParticipatInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutAthleteParticipatInput, categoriesUncheckedCreateWithoutAthleteParticipatInput>
  }

  export type SportsCreateWithoutAthleteParticipatInput = {
    name: string
    createdAt?: Date | string
    categories?: categoriesCreateNestedManyWithoutSportsInput
    LeaderParticipat?: LeaderParticipatCreateNestedManyWithoutSportsInput
    Sports_event_org?: Sports_event_orgCreateNestedManyWithoutSportsInput
  }

  export type SportsUncheckedCreateWithoutAthleteParticipatInput = {
    id?: number
    name: string
    createdAt?: Date | string
    categories?: categoriesUncheckedCreateNestedManyWithoutSportsInput
    LeaderParticipat?: LeaderParticipatUncheckedCreateNestedManyWithoutSportsInput
    Sports_event_org?: Sports_event_orgUncheckedCreateNestedManyWithoutSportsInput
  }

  export type SportsCreateOrConnectWithoutAthleteParticipatInput = {
    where: SportsWhereUniqueInput
    create: XOR<SportsCreateWithoutAthleteParticipatInput, SportsUncheckedCreateWithoutAthleteParticipatInput>
  }

  export type OrganizationCreateWithoutAthleteParticipatInput = {
    name: string
    createdAt?: Date | string
    LeaderParticipat?: LeaderParticipatCreateNestedManyWithoutOrganizationInput
    Sports_event_org?: Sports_event_orgCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutAthleteParticipatInput = {
    id?: number
    name: string
    createdAt?: Date | string
    LeaderParticipat?: LeaderParticipatUncheckedCreateNestedManyWithoutOrganizationInput
    Sports_event_org?: Sports_event_orgUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutAthleteParticipatInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAthleteParticipatInput, OrganizationUncheckedCreateWithoutAthleteParticipatInput>
  }

  export type MedalsCreateWithoutAthleteParticipatInput = {
    medals_type: $Enums.MedalType
    key_performance?: string | null
    createdAt?: Date | string
  }

  export type MedalsUncheckedCreateWithoutAthleteParticipatInput = {
    id?: number
    medals_type: $Enums.MedalType
    key_performance?: string | null
    createdAt?: Date | string
  }

  export type MedalsCreateOrConnectWithoutAthleteParticipatInput = {
    where: MedalsWhereUniqueInput
    create: XOR<MedalsCreateWithoutAthleteParticipatInput, MedalsUncheckedCreateWithoutAthleteParticipatInput>
  }

  export type MedalsCreateManyAthleteParticipatInputEnvelope = {
    data: MedalsCreateManyAthleteParticipatInput | MedalsCreateManyAthleteParticipatInput[]
    skipDuplicates?: boolean
  }

  export type AthletesUpsertWithoutAthleteParticipatInput = {
    update: XOR<AthletesUpdateWithoutAthleteParticipatInput, AthletesUncheckedUpdateWithoutAthleteParticipatInput>
    create: XOR<AthletesCreateWithoutAthleteParticipatInput, AthletesUncheckedCreateWithoutAthleteParticipatInput>
    where?: AthletesWhereInput
  }

  export type AthletesUpdateToOneWithWhereWithoutAthleteParticipatInput = {
    where?: AthletesWhereInput
    data: XOR<AthletesUpdateWithoutAthleteParticipatInput, AthletesUncheckedUpdateWithoutAthleteParticipatInput>
  }

  export type AthletesUpdateWithoutAthleteParticipatInput = {
    class?: NullableStringFieldUpdateOperationsInput | string | null
    uniformSize?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enroll?: EnrollUpdateOneRequiredWithoutAthletesNestedInput
  }

  export type AthletesUncheckedUpdateWithoutAthleteParticipatInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollID?: IntFieldUpdateOperationsInput | number
    class?: NullableStringFieldUpdateOperationsInput | string | null
    uniformSize?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsUpsertWithoutAthleteParticipatInput = {
    update: XOR<EventsUpdateWithoutAthleteParticipatInput, EventsUncheckedUpdateWithoutAthleteParticipatInput>
    create: XOR<EventsCreateWithoutAthleteParticipatInput, EventsUncheckedCreateWithoutAthleteParticipatInput>
    where?: EventsWhereInput
  }

  export type EventsUpdateToOneWithWhereWithoutAthleteParticipatInput = {
    where?: EventsWhereInput
    data: XOR<EventsUpdateWithoutAthleteParticipatInput, EventsUncheckedUpdateWithoutAthleteParticipatInput>
  }

  export type EventsUpdateWithoutAthleteParticipatInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateManyWithoutEventsNestedInput
    LeaderParticipat?: LeaderParticipatUpdateManyWithoutEventsNestedInput
    Sports_event_org?: Sports_event_orgUpdateManyWithoutEventsNestedInput
  }

  export type EventsUncheckedUpdateWithoutAthleteParticipatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUncheckedUpdateManyWithoutEventsNestedInput
    LeaderParticipat?: LeaderParticipatUncheckedUpdateManyWithoutEventsNestedInput
    Sports_event_org?: Sports_event_orgUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type categoriesUpsertWithoutAthleteParticipatInput = {
    update: XOR<categoriesUpdateWithoutAthleteParticipatInput, categoriesUncheckedUpdateWithoutAthleteParticipatInput>
    create: XOR<categoriesCreateWithoutAthleteParticipatInput, categoriesUncheckedCreateWithoutAthleteParticipatInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutAthleteParticipatInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutAthleteParticipatInput, categoriesUncheckedUpdateWithoutAthleteParticipatInput>
  }

  export type categoriesUpdateWithoutAthleteParticipatInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateOneRequiredWithoutCategoriesNestedInput
    sports?: SportsUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutAthleteParticipatInput = {
    id?: IntFieldUpdateOperationsInput | number
    events_id?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SportsUpsertWithoutAthleteParticipatInput = {
    update: XOR<SportsUpdateWithoutAthleteParticipatInput, SportsUncheckedUpdateWithoutAthleteParticipatInput>
    create: XOR<SportsCreateWithoutAthleteParticipatInput, SportsUncheckedCreateWithoutAthleteParticipatInput>
    where?: SportsWhereInput
  }

  export type SportsUpdateToOneWithWhereWithoutAthleteParticipatInput = {
    where?: SportsWhereInput
    data: XOR<SportsUpdateWithoutAthleteParticipatInput, SportsUncheckedUpdateWithoutAthleteParticipatInput>
  }

  export type SportsUpdateWithoutAthleteParticipatInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateManyWithoutSportsNestedInput
    LeaderParticipat?: LeaderParticipatUpdateManyWithoutSportsNestedInput
    Sports_event_org?: Sports_event_orgUpdateManyWithoutSportsNestedInput
  }

  export type SportsUncheckedUpdateWithoutAthleteParticipatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUncheckedUpdateManyWithoutSportsNestedInput
    LeaderParticipat?: LeaderParticipatUncheckedUpdateManyWithoutSportsNestedInput
    Sports_event_org?: Sports_event_orgUncheckedUpdateManyWithoutSportsNestedInput
  }

  export type OrganizationUpsertWithoutAthleteParticipatInput = {
    update: XOR<OrganizationUpdateWithoutAthleteParticipatInput, OrganizationUncheckedUpdateWithoutAthleteParticipatInput>
    create: XOR<OrganizationCreateWithoutAthleteParticipatInput, OrganizationUncheckedCreateWithoutAthleteParticipatInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAthleteParticipatInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAthleteParticipatInput, OrganizationUncheckedUpdateWithoutAthleteParticipatInput>
  }

  export type OrganizationUpdateWithoutAthleteParticipatInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    LeaderParticipat?: LeaderParticipatUpdateManyWithoutOrganizationNestedInput
    Sports_event_org?: Sports_event_orgUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAthleteParticipatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    LeaderParticipat?: LeaderParticipatUncheckedUpdateManyWithoutOrganizationNestedInput
    Sports_event_org?: Sports_event_orgUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type MedalsUpsertWithWhereUniqueWithoutAthleteParticipatInput = {
    where: MedalsWhereUniqueInput
    update: XOR<MedalsUpdateWithoutAthleteParticipatInput, MedalsUncheckedUpdateWithoutAthleteParticipatInput>
    create: XOR<MedalsCreateWithoutAthleteParticipatInput, MedalsUncheckedCreateWithoutAthleteParticipatInput>
  }

  export type MedalsUpdateWithWhereUniqueWithoutAthleteParticipatInput = {
    where: MedalsWhereUniqueInput
    data: XOR<MedalsUpdateWithoutAthleteParticipatInput, MedalsUncheckedUpdateWithoutAthleteParticipatInput>
  }

  export type MedalsUpdateManyWithWhereWithoutAthleteParticipatInput = {
    where: MedalsScalarWhereInput
    data: XOR<MedalsUpdateManyMutationInput, MedalsUncheckedUpdateManyWithoutAthleteParticipatInput>
  }

  export type MedalsScalarWhereInput = {
    AND?: MedalsScalarWhereInput | MedalsScalarWhereInput[]
    OR?: MedalsScalarWhereInput[]
    NOT?: MedalsScalarWhereInput | MedalsScalarWhereInput[]
    id?: IntFilter<"Medals"> | number
    athletesParticipID?: IntFilter<"Medals"> | number
    medals_type?: EnumMedalTypeFilter<"Medals"> | $Enums.MedalType
    key_performance?: StringNullableFilter<"Medals"> | string | null
    createdAt?: DateTimeFilter<"Medals"> | Date | string
  }

  export type LeadersCreateWithoutLeaderParticipatInput = {
    roles: $Enums.LeaderRole
    phoneNumber: string
    createdAt?: Date | string
    enroll: EnrollCreateNestedOneWithoutLeadersInput
  }

  export type LeadersUncheckedCreateWithoutLeaderParticipatInput = {
    id?: number
    enrollID: number
    roles: $Enums.LeaderRole
    phoneNumber: string
    createdAt?: Date | string
  }

  export type LeadersCreateOrConnectWithoutLeaderParticipatInput = {
    where: LeadersWhereUniqueInput
    create: XOR<LeadersCreateWithoutLeaderParticipatInput, LeadersUncheckedCreateWithoutLeaderParticipatInput>
  }

  export type EventsCreateWithoutLeaderParticipatInput = {
    name: string
    date: Date | string
    createdAt?: Date | string
    categories?: categoriesCreateNestedManyWithoutEventsInput
    AthleteParticipat?: AthleteParticipatCreateNestedManyWithoutEventsInput
    Sports_event_org?: Sports_event_orgCreateNestedManyWithoutEventsInput
  }

  export type EventsUncheckedCreateWithoutLeaderParticipatInput = {
    id?: number
    name: string
    date: Date | string
    createdAt?: Date | string
    categories?: categoriesUncheckedCreateNestedManyWithoutEventsInput
    AthleteParticipat?: AthleteParticipatUncheckedCreateNestedManyWithoutEventsInput
    Sports_event_org?: Sports_event_orgUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventsCreateOrConnectWithoutLeaderParticipatInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutLeaderParticipatInput, EventsUncheckedCreateWithoutLeaderParticipatInput>
  }

  export type SportsCreateWithoutLeaderParticipatInput = {
    name: string
    createdAt?: Date | string
    categories?: categoriesCreateNestedManyWithoutSportsInput
    AthleteParticipat?: AthleteParticipatCreateNestedManyWithoutSportsInput
    Sports_event_org?: Sports_event_orgCreateNestedManyWithoutSportsInput
  }

  export type SportsUncheckedCreateWithoutLeaderParticipatInput = {
    id?: number
    name: string
    createdAt?: Date | string
    categories?: categoriesUncheckedCreateNestedManyWithoutSportsInput
    AthleteParticipat?: AthleteParticipatUncheckedCreateNestedManyWithoutSportsInput
    Sports_event_org?: Sports_event_orgUncheckedCreateNestedManyWithoutSportsInput
  }

  export type SportsCreateOrConnectWithoutLeaderParticipatInput = {
    where: SportsWhereUniqueInput
    create: XOR<SportsCreateWithoutLeaderParticipatInput, SportsUncheckedCreateWithoutLeaderParticipatInput>
  }

  export type OrganizationCreateWithoutLeaderParticipatInput = {
    name: string
    createdAt?: Date | string
    AthleteParticipat?: AthleteParticipatCreateNestedManyWithoutOrganizationInput
    Sports_event_org?: Sports_event_orgCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutLeaderParticipatInput = {
    id?: number
    name: string
    createdAt?: Date | string
    AthleteParticipat?: AthleteParticipatUncheckedCreateNestedManyWithoutOrganizationInput
    Sports_event_org?: Sports_event_orgUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutLeaderParticipatInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutLeaderParticipatInput, OrganizationUncheckedCreateWithoutLeaderParticipatInput>
  }

  export type LeadersUpsertWithoutLeaderParticipatInput = {
    update: XOR<LeadersUpdateWithoutLeaderParticipatInput, LeadersUncheckedUpdateWithoutLeaderParticipatInput>
    create: XOR<LeadersCreateWithoutLeaderParticipatInput, LeadersUncheckedCreateWithoutLeaderParticipatInput>
    where?: LeadersWhereInput
  }

  export type LeadersUpdateToOneWithWhereWithoutLeaderParticipatInput = {
    where?: LeadersWhereInput
    data: XOR<LeadersUpdateWithoutLeaderParticipatInput, LeadersUncheckedUpdateWithoutLeaderParticipatInput>
  }

  export type LeadersUpdateWithoutLeaderParticipatInput = {
    roles?: EnumLeaderRoleFieldUpdateOperationsInput | $Enums.LeaderRole
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enroll?: EnrollUpdateOneRequiredWithoutLeadersNestedInput
  }

  export type LeadersUncheckedUpdateWithoutLeaderParticipatInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollID?: IntFieldUpdateOperationsInput | number
    roles?: EnumLeaderRoleFieldUpdateOperationsInput | $Enums.LeaderRole
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsUpsertWithoutLeaderParticipatInput = {
    update: XOR<EventsUpdateWithoutLeaderParticipatInput, EventsUncheckedUpdateWithoutLeaderParticipatInput>
    create: XOR<EventsCreateWithoutLeaderParticipatInput, EventsUncheckedCreateWithoutLeaderParticipatInput>
    where?: EventsWhereInput
  }

  export type EventsUpdateToOneWithWhereWithoutLeaderParticipatInput = {
    where?: EventsWhereInput
    data: XOR<EventsUpdateWithoutLeaderParticipatInput, EventsUncheckedUpdateWithoutLeaderParticipatInput>
  }

  export type EventsUpdateWithoutLeaderParticipatInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateManyWithoutEventsNestedInput
    AthleteParticipat?: AthleteParticipatUpdateManyWithoutEventsNestedInput
    Sports_event_org?: Sports_event_orgUpdateManyWithoutEventsNestedInput
  }

  export type EventsUncheckedUpdateWithoutLeaderParticipatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUncheckedUpdateManyWithoutEventsNestedInput
    AthleteParticipat?: AthleteParticipatUncheckedUpdateManyWithoutEventsNestedInput
    Sports_event_org?: Sports_event_orgUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type SportsUpsertWithoutLeaderParticipatInput = {
    update: XOR<SportsUpdateWithoutLeaderParticipatInput, SportsUncheckedUpdateWithoutLeaderParticipatInput>
    create: XOR<SportsCreateWithoutLeaderParticipatInput, SportsUncheckedCreateWithoutLeaderParticipatInput>
    where?: SportsWhereInput
  }

  export type SportsUpdateToOneWithWhereWithoutLeaderParticipatInput = {
    where?: SportsWhereInput
    data: XOR<SportsUpdateWithoutLeaderParticipatInput, SportsUncheckedUpdateWithoutLeaderParticipatInput>
  }

  export type SportsUpdateWithoutLeaderParticipatInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateManyWithoutSportsNestedInput
    AthleteParticipat?: AthleteParticipatUpdateManyWithoutSportsNestedInput
    Sports_event_org?: Sports_event_orgUpdateManyWithoutSportsNestedInput
  }

  export type SportsUncheckedUpdateWithoutLeaderParticipatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUncheckedUpdateManyWithoutSportsNestedInput
    AthleteParticipat?: AthleteParticipatUncheckedUpdateManyWithoutSportsNestedInput
    Sports_event_org?: Sports_event_orgUncheckedUpdateManyWithoutSportsNestedInput
  }

  export type OrganizationUpsertWithoutLeaderParticipatInput = {
    update: XOR<OrganizationUpdateWithoutLeaderParticipatInput, OrganizationUncheckedUpdateWithoutLeaderParticipatInput>
    create: XOR<OrganizationCreateWithoutLeaderParticipatInput, OrganizationUncheckedCreateWithoutLeaderParticipatInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutLeaderParticipatInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutLeaderParticipatInput, OrganizationUncheckedUpdateWithoutLeaderParticipatInput>
  }

  export type OrganizationUpdateWithoutLeaderParticipatInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AthleteParticipat?: AthleteParticipatUpdateManyWithoutOrganizationNestedInput
    Sports_event_org?: Sports_event_orgUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutLeaderParticipatInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AthleteParticipat?: AthleteParticipatUncheckedUpdateManyWithoutOrganizationNestedInput
    Sports_event_org?: Sports_event_orgUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type AthleteParticipatCreateWithoutMedalsInput = {
    createdAt?: Date | string
    athletes: AthletesCreateNestedOneWithoutAthleteParticipatInput
    events: EventsCreateNestedOneWithoutAthleteParticipatInput
    categories: categoriesCreateNestedOneWithoutAthleteParticipatInput
    sports: SportsCreateNestedOneWithoutAthleteParticipatInput
    organization: OrganizationCreateNestedOneWithoutAthleteParticipatInput
  }

  export type AthleteParticipatUncheckedCreateWithoutMedalsInput = {
    id?: number
    athletesID: number
    eventsID: number
    categoriesID: number
    sportsID: number
    organizationID: number
    createdAt?: Date | string
  }

  export type AthleteParticipatCreateOrConnectWithoutMedalsInput = {
    where: AthleteParticipatWhereUniqueInput
    create: XOR<AthleteParticipatCreateWithoutMedalsInput, AthleteParticipatUncheckedCreateWithoutMedalsInput>
  }

  export type AthleteParticipatUpsertWithoutMedalsInput = {
    update: XOR<AthleteParticipatUpdateWithoutMedalsInput, AthleteParticipatUncheckedUpdateWithoutMedalsInput>
    create: XOR<AthleteParticipatCreateWithoutMedalsInput, AthleteParticipatUncheckedCreateWithoutMedalsInput>
    where?: AthleteParticipatWhereInput
  }

  export type AthleteParticipatUpdateToOneWithWhereWithoutMedalsInput = {
    where?: AthleteParticipatWhereInput
    data: XOR<AthleteParticipatUpdateWithoutMedalsInput, AthleteParticipatUncheckedUpdateWithoutMedalsInput>
  }

  export type AthleteParticipatUpdateWithoutMedalsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    athletes?: AthletesUpdateOneRequiredWithoutAthleteParticipatNestedInput
    events?: EventsUpdateOneRequiredWithoutAthleteParticipatNestedInput
    categories?: categoriesUpdateOneRequiredWithoutAthleteParticipatNestedInput
    sports?: SportsUpdateOneRequiredWithoutAthleteParticipatNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutAthleteParticipatNestedInput
  }

  export type AthleteParticipatUncheckedUpdateWithoutMedalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    athletesID?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    categoriesID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollCreateManyUserInput = {
    id?: number
    name: string
    gender: string
    nationality: string
    dob: Date | string
    idDocType: $Enums.IdDocType
    address?: string | null
    photoPath?: string | null
    DocumentsPath?: string | null
    createdAt?: Date | string
  }

  export type EnrollUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocType?: EnumIdDocTypeFieldUpdateOperationsInput | $Enums.IdDocType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    athletes?: AthletesUpdateOneWithoutEnrollNestedInput
    leaders?: LeadersUpdateOneWithoutEnrollNestedInput
  }

  export type EnrollUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocType?: EnumIdDocTypeFieldUpdateOperationsInput | $Enums.IdDocType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    athletes?: AthletesUncheckedUpdateOneWithoutEnrollNestedInput
    leaders?: LeadersUncheckedUpdateOneWithoutEnrollNestedInput
  }

  export type EnrollUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    idDocType?: EnumIdDocTypeFieldUpdateOperationsInput | $Enums.IdDocType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photoPath?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentsPath?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AthleteParticipatCreateManyAthletesInput = {
    id?: number
    eventsID: number
    categoriesID: number
    sportsID: number
    organizationID: number
    createdAt?: Date | string
  }

  export type AthleteParticipatUpdateWithoutAthletesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateOneRequiredWithoutAthleteParticipatNestedInput
    categories?: categoriesUpdateOneRequiredWithoutAthleteParticipatNestedInput
    sports?: SportsUpdateOneRequiredWithoutAthleteParticipatNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutAthleteParticipatNestedInput
    Medals?: MedalsUpdateManyWithoutAthleteParticipatNestedInput
  }

  export type AthleteParticipatUncheckedUpdateWithoutAthletesInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    categoriesID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Medals?: MedalsUncheckedUpdateManyWithoutAthleteParticipatNestedInput
  }

  export type AthleteParticipatUncheckedUpdateManyWithoutAthletesInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    categoriesID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderParticipatCreateManyLeadersInput = {
    id?: number
    eventsID: number
    sportsID: number
    organizationID: number
    createdAt?: Date | string
  }

  export type LeaderParticipatUpdateWithoutLeadersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateOneRequiredWithoutLeaderParticipatNestedInput
    sports?: SportsUpdateOneRequiredWithoutLeaderParticipatNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutLeaderParticipatNestedInput
  }

  export type LeaderParticipatUncheckedUpdateWithoutLeadersInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderParticipatUncheckedUpdateManyWithoutLeadersInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesCreateManyEventsInput = {
    id?: number
    sportsID: number
    category: string
    createdAt?: Date | string
  }

  export type AthleteParticipatCreateManyEventsInput = {
    id?: number
    athletesID: number
    categoriesID: number
    sportsID: number
    organizationID: number
    createdAt?: Date | string
  }

  export type LeaderParticipatCreateManyEventsInput = {
    id?: number
    leadersID: number
    sportsID: number
    organizationID: number
    createdAt?: Date | string
  }

  export type Sports_event_orgCreateManyEventsInput = {
    id?: number
    sports_id: number
    organization_id: number
    createdAt?: Date | string
  }

  export type categoriesUpdateWithoutEventsInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sports?: SportsUpdateOneRequiredWithoutCategoriesNestedInput
    AthleteParticipat?: AthleteParticipatUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AthleteParticipat?: AthleteParticipatUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AthleteParticipatUpdateWithoutEventsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    athletes?: AthletesUpdateOneRequiredWithoutAthleteParticipatNestedInput
    categories?: categoriesUpdateOneRequiredWithoutAthleteParticipatNestedInput
    sports?: SportsUpdateOneRequiredWithoutAthleteParticipatNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutAthleteParticipatNestedInput
    Medals?: MedalsUpdateManyWithoutAthleteParticipatNestedInput
  }

  export type AthleteParticipatUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    athletesID?: IntFieldUpdateOperationsInput | number
    categoriesID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Medals?: MedalsUncheckedUpdateManyWithoutAthleteParticipatNestedInput
  }

  export type AthleteParticipatUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    athletesID?: IntFieldUpdateOperationsInput | number
    categoriesID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderParticipatUpdateWithoutEventsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaders?: LeadersUpdateOneRequiredWithoutLeaderParticipatNestedInput
    sports?: SportsUpdateOneRequiredWithoutLeaderParticipatNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutLeaderParticipatNestedInput
  }

  export type LeaderParticipatUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadersID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderParticipatUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadersID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sports_event_orgUpdateWithoutEventsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sports?: SportsUpdateOneRequiredWithoutSports_event_orgNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutSports_event_orgNestedInput
  }

  export type Sports_event_orgUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sports_id?: IntFieldUpdateOperationsInput | number
    organization_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sports_event_orgUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sports_id?: IntFieldUpdateOperationsInput | number
    organization_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesCreateManySportsInput = {
    id?: number
    events_id: number
    category: string
    createdAt?: Date | string
  }

  export type AthleteParticipatCreateManySportsInput = {
    id?: number
    athletesID: number
    eventsID: number
    categoriesID: number
    organizationID: number
    createdAt?: Date | string
  }

  export type LeaderParticipatCreateManySportsInput = {
    id?: number
    leadersID: number
    eventsID: number
    organizationID: number
    createdAt?: Date | string
  }

  export type Sports_event_orgCreateManySportsInput = {
    id?: number
    events_id: number
    organization_id: number
    createdAt?: Date | string
  }

  export type categoriesUpdateWithoutSportsInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateOneRequiredWithoutCategoriesNestedInput
    AthleteParticipat?: AthleteParticipatUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutSportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    events_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AthleteParticipat?: AthleteParticipatUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateManyWithoutSportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    events_id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AthleteParticipatUpdateWithoutSportsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    athletes?: AthletesUpdateOneRequiredWithoutAthleteParticipatNestedInput
    events?: EventsUpdateOneRequiredWithoutAthleteParticipatNestedInput
    categories?: categoriesUpdateOneRequiredWithoutAthleteParticipatNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutAthleteParticipatNestedInput
    Medals?: MedalsUpdateManyWithoutAthleteParticipatNestedInput
  }

  export type AthleteParticipatUncheckedUpdateWithoutSportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    athletesID?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    categoriesID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Medals?: MedalsUncheckedUpdateManyWithoutAthleteParticipatNestedInput
  }

  export type AthleteParticipatUncheckedUpdateManyWithoutSportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    athletesID?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    categoriesID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderParticipatUpdateWithoutSportsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaders?: LeadersUpdateOneRequiredWithoutLeaderParticipatNestedInput
    events?: EventsUpdateOneRequiredWithoutLeaderParticipatNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutLeaderParticipatNestedInput
  }

  export type LeaderParticipatUncheckedUpdateWithoutSportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadersID?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderParticipatUncheckedUpdateManyWithoutSportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadersID?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sports_event_orgUpdateWithoutSportsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateOneRequiredWithoutSports_event_orgNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutSports_event_orgNestedInput
  }

  export type Sports_event_orgUncheckedUpdateWithoutSportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    events_id?: IntFieldUpdateOperationsInput | number
    organization_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sports_event_orgUncheckedUpdateManyWithoutSportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    events_id?: IntFieldUpdateOperationsInput | number
    organization_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AthleteParticipatCreateManyOrganizationInput = {
    id?: number
    athletesID: number
    eventsID: number
    categoriesID: number
    sportsID: number
    createdAt?: Date | string
  }

  export type LeaderParticipatCreateManyOrganizationInput = {
    id?: number
    leadersID: number
    eventsID: number
    sportsID: number
    createdAt?: Date | string
  }

  export type Sports_event_orgCreateManyOrganizationInput = {
    id?: number
    events_id: number
    sports_id: number
    createdAt?: Date | string
  }

  export type AthleteParticipatUpdateWithoutOrganizationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    athletes?: AthletesUpdateOneRequiredWithoutAthleteParticipatNestedInput
    events?: EventsUpdateOneRequiredWithoutAthleteParticipatNestedInput
    categories?: categoriesUpdateOneRequiredWithoutAthleteParticipatNestedInput
    sports?: SportsUpdateOneRequiredWithoutAthleteParticipatNestedInput
    Medals?: MedalsUpdateManyWithoutAthleteParticipatNestedInput
  }

  export type AthleteParticipatUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    athletesID?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    categoriesID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Medals?: MedalsUncheckedUpdateManyWithoutAthleteParticipatNestedInput
  }

  export type AthleteParticipatUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    athletesID?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    categoriesID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderParticipatUpdateWithoutOrganizationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaders?: LeadersUpdateOneRequiredWithoutLeaderParticipatNestedInput
    events?: EventsUpdateOneRequiredWithoutLeaderParticipatNestedInput
    sports?: SportsUpdateOneRequiredWithoutLeaderParticipatNestedInput
  }

  export type LeaderParticipatUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadersID?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderParticipatUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadersID?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sports_event_orgUpdateWithoutOrganizationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateOneRequiredWithoutSports_event_orgNestedInput
    sports?: SportsUpdateOneRequiredWithoutSports_event_orgNestedInput
  }

  export type Sports_event_orgUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    events_id?: IntFieldUpdateOperationsInput | number
    sports_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sports_event_orgUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    events_id?: IntFieldUpdateOperationsInput | number
    sports_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AthleteParticipatCreateManyCategoriesInput = {
    id?: number
    athletesID: number
    eventsID: number
    sportsID: number
    organizationID: number
    createdAt?: Date | string
  }

  export type AthleteParticipatUpdateWithoutCategoriesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    athletes?: AthletesUpdateOneRequiredWithoutAthleteParticipatNestedInput
    events?: EventsUpdateOneRequiredWithoutAthleteParticipatNestedInput
    sports?: SportsUpdateOneRequiredWithoutAthleteParticipatNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutAthleteParticipatNestedInput
    Medals?: MedalsUpdateManyWithoutAthleteParticipatNestedInput
  }

  export type AthleteParticipatUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    athletesID?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Medals?: MedalsUncheckedUpdateManyWithoutAthleteParticipatNestedInput
  }

  export type AthleteParticipatUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    athletesID?: IntFieldUpdateOperationsInput | number
    eventsID?: IntFieldUpdateOperationsInput | number
    sportsID?: IntFieldUpdateOperationsInput | number
    organizationID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedalsCreateManyAthleteParticipatInput = {
    id?: number
    medals_type: $Enums.MedalType
    key_performance?: string | null
    createdAt?: Date | string
  }

  export type MedalsUpdateWithoutAthleteParticipatInput = {
    medals_type?: EnumMedalTypeFieldUpdateOperationsInput | $Enums.MedalType
    key_performance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedalsUncheckedUpdateWithoutAthleteParticipatInput = {
    id?: IntFieldUpdateOperationsInput | number
    medals_type?: EnumMedalTypeFieldUpdateOperationsInput | $Enums.MedalType
    key_performance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedalsUncheckedUpdateManyWithoutAthleteParticipatInput = {
    id?: IntFieldUpdateOperationsInput | number
    medals_type?: EnumMedalTypeFieldUpdateOperationsInput | $Enums.MedalType
    key_performance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}