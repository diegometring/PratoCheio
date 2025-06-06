
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model Cardapio
 * 
 */
export type Cardapio = $Result.DefaultSelection<Prisma.$CardapioPayload>
/**
 * Model Prato
 * 
 */
export type Prato = $Result.DefaultSelection<Prisma.$PratoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardapio`: Exposes CRUD operations for the **Cardapio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cardapios
    * const cardapios = await prisma.cardapio.findMany()
    * ```
    */
  get cardapio(): Prisma.CardapioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prato`: Exposes CRUD operations for the **Prato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pratoes
    * const pratoes = await prisma.prato.findMany()
    * ```
    */
  get prato(): Prisma.PratoDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Usuario: 'Usuario',
    Pedido: 'Pedido',
    Cardapio: 'Cardapio',
    Prato: 'Prato'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "pedido" | "cardapio" | "prato"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      Cardapio: {
        payload: Prisma.$CardapioPayload<ExtArgs>
        fields: Prisma.CardapioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardapioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardapioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          findFirst: {
            args: Prisma.CardapioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardapioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          findMany: {
            args: Prisma.CardapioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>[]
          }
          create: {
            args: Prisma.CardapioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          createMany: {
            args: Prisma.CardapioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardapioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>[]
          }
          delete: {
            args: Prisma.CardapioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          update: {
            args: Prisma.CardapioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          deleteMany: {
            args: Prisma.CardapioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardapioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardapioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>[]
          }
          upsert: {
            args: Prisma.CardapioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardapioPayload>
          }
          aggregate: {
            args: Prisma.CardapioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardapio>
          }
          groupBy: {
            args: Prisma.CardapioGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardapioGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardapioCountArgs<ExtArgs>
            result: $Utils.Optional<CardapioCountAggregateOutputType> | number
          }
        }
      }
      Prato: {
        payload: Prisma.$PratoPayload<ExtArgs>
        fields: Prisma.PratoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PratoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PratoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>
          }
          findFirst: {
            args: Prisma.PratoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PratoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>
          }
          findMany: {
            args: Prisma.PratoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>[]
          }
          create: {
            args: Prisma.PratoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>
          }
          createMany: {
            args: Prisma.PratoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PratoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>[]
          }
          delete: {
            args: Prisma.PratoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>
          }
          update: {
            args: Prisma.PratoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>
          }
          deleteMany: {
            args: Prisma.PratoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PratoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PratoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>[]
          }
          upsert: {
            args: Prisma.PratoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PratoPayload>
          }
          aggregate: {
            args: Prisma.PratoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrato>
          }
          groupBy: {
            args: Prisma.PratoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PratoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PratoCountArgs<ExtArgs>
            result: $Utils.Optional<PratoCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    pedido?: PedidoOmit
    cardapio?: CardapioOmit
    prato?: PratoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    pedidos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | UsuarioCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    pratos: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pratos?: boolean | PedidoCountOutputTypeCountPratosArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountPratosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PratoWhereInput
  }


  /**
   * Count Type CardapioCountOutputType
   */

  export type CardapioCountOutputType = {
    pratos: number
  }

  export type CardapioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pratos?: boolean | CardapioCountOutputTypeCountPratosArgs
  }

  // Custom InputTypes
  /**
   * CardapioCountOutputType without action
   */
  export type CardapioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardapioCountOutputType
     */
    select?: CardapioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardapioCountOutputType without action
   */
  export type CardapioCountOutputTypeCountPratosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PratoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    email: string | null
    senha: string | null
    nome: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    email: string | null
    senha: string | null
    nome: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    senha: number
    nome: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    email: string
    senha: string
    nome: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "senha" | "nome", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      senha: string
      nome: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends Usuario$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.pedidos
   */
  export type Usuario$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    usuarioId: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    usuarioId: number
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    pratos?: boolean | Pedido$pratosArgs<ExtArgs>
    usuarioRel?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    usuarioRel?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    usuarioRel?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pratos?: boolean | Pedido$pratosArgs<ExtArgs>
    usuarioRel?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioRel?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioRel?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      pratos: Prisma.$PratoPayload<ExtArgs>[]
      usuarioRel: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
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
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
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
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pratos<T extends Pedido$pratosArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$pratosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarioRel<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly usuarioId: FieldRef<"Pedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.pratos
   */
  export type Pedido$pratosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    where?: PratoWhereInput
    orderBy?: PratoOrderByWithRelationInput | PratoOrderByWithRelationInput[]
    cursor?: PratoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PratoScalarFieldEnum | PratoScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model Cardapio
   */

  export type AggregateCardapio = {
    _count: CardapioCountAggregateOutputType | null
    _avg: CardapioAvgAggregateOutputType | null
    _sum: CardapioSumAggregateOutputType | null
    _min: CardapioMinAggregateOutputType | null
    _max: CardapioMaxAggregateOutputType | null
  }

  export type CardapioAvgAggregateOutputType = {
    id: number | null
  }

  export type CardapioSumAggregateOutputType = {
    id: number | null
  }

  export type CardapioMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type CardapioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type CardapioCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type CardapioAvgAggregateInputType = {
    id?: true
  }

  export type CardapioSumAggregateInputType = {
    id?: true
  }

  export type CardapioMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CardapioMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CardapioCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type CardapioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cardapio to aggregate.
     */
    where?: CardapioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cardapios to fetch.
     */
    orderBy?: CardapioOrderByWithRelationInput | CardapioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardapioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cardapios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cardapios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cardapios
    **/
    _count?: true | CardapioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardapioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardapioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardapioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardapioMaxAggregateInputType
  }

  export type GetCardapioAggregateType<T extends CardapioAggregateArgs> = {
        [P in keyof T & keyof AggregateCardapio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardapio[P]>
      : GetScalarType<T[P], AggregateCardapio[P]>
  }




  export type CardapioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardapioWhereInput
    orderBy?: CardapioOrderByWithAggregationInput | CardapioOrderByWithAggregationInput[]
    by: CardapioScalarFieldEnum[] | CardapioScalarFieldEnum
    having?: CardapioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardapioCountAggregateInputType | true
    _avg?: CardapioAvgAggregateInputType
    _sum?: CardapioSumAggregateInputType
    _min?: CardapioMinAggregateInputType
    _max?: CardapioMaxAggregateInputType
  }

  export type CardapioGroupByOutputType = {
    id: number
    nome: string
    _count: CardapioCountAggregateOutputType | null
    _avg: CardapioAvgAggregateOutputType | null
    _sum: CardapioSumAggregateOutputType | null
    _min: CardapioMinAggregateOutputType | null
    _max: CardapioMaxAggregateOutputType | null
  }

  type GetCardapioGroupByPayload<T extends CardapioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardapioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardapioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardapioGroupByOutputType[P]>
            : GetScalarType<T[P], CardapioGroupByOutputType[P]>
        }
      >
    >


  export type CardapioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    pratos?: boolean | Cardapio$pratosArgs<ExtArgs>
    _count?: boolean | CardapioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardapio"]>

  export type CardapioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["cardapio"]>

  export type CardapioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["cardapio"]>

  export type CardapioSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type CardapioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["cardapio"]>
  export type CardapioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pratos?: boolean | Cardapio$pratosArgs<ExtArgs>
    _count?: boolean | CardapioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CardapioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CardapioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CardapioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cardapio"
    objects: {
      pratos: Prisma.$PratoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["cardapio"]>
    composites: {}
  }

  type CardapioGetPayload<S extends boolean | null | undefined | CardapioDefaultArgs> = $Result.GetResult<Prisma.$CardapioPayload, S>

  type CardapioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardapioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardapioCountAggregateInputType | true
    }

  export interface CardapioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cardapio'], meta: { name: 'Cardapio' } }
    /**
     * Find zero or one Cardapio that matches the filter.
     * @param {CardapioFindUniqueArgs} args - Arguments to find a Cardapio
     * @example
     * // Get one Cardapio
     * const cardapio = await prisma.cardapio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardapioFindUniqueArgs>(args: SelectSubset<T, CardapioFindUniqueArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cardapio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardapioFindUniqueOrThrowArgs} args - Arguments to find a Cardapio
     * @example
     * // Get one Cardapio
     * const cardapio = await prisma.cardapio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardapioFindUniqueOrThrowArgs>(args: SelectSubset<T, CardapioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cardapio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioFindFirstArgs} args - Arguments to find a Cardapio
     * @example
     * // Get one Cardapio
     * const cardapio = await prisma.cardapio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardapioFindFirstArgs>(args?: SelectSubset<T, CardapioFindFirstArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cardapio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioFindFirstOrThrowArgs} args - Arguments to find a Cardapio
     * @example
     * // Get one Cardapio
     * const cardapio = await prisma.cardapio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardapioFindFirstOrThrowArgs>(args?: SelectSubset<T, CardapioFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cardapios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cardapios
     * const cardapios = await prisma.cardapio.findMany()
     * 
     * // Get first 10 Cardapios
     * const cardapios = await prisma.cardapio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardapioWithIdOnly = await prisma.cardapio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardapioFindManyArgs>(args?: SelectSubset<T, CardapioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cardapio.
     * @param {CardapioCreateArgs} args - Arguments to create a Cardapio.
     * @example
     * // Create one Cardapio
     * const Cardapio = await prisma.cardapio.create({
     *   data: {
     *     // ... data to create a Cardapio
     *   }
     * })
     * 
     */
    create<T extends CardapioCreateArgs>(args: SelectSubset<T, CardapioCreateArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cardapios.
     * @param {CardapioCreateManyArgs} args - Arguments to create many Cardapios.
     * @example
     * // Create many Cardapios
     * const cardapio = await prisma.cardapio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardapioCreateManyArgs>(args?: SelectSubset<T, CardapioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cardapios and returns the data saved in the database.
     * @param {CardapioCreateManyAndReturnArgs} args - Arguments to create many Cardapios.
     * @example
     * // Create many Cardapios
     * const cardapio = await prisma.cardapio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cardapios and only return the `id`
     * const cardapioWithIdOnly = await prisma.cardapio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardapioCreateManyAndReturnArgs>(args?: SelectSubset<T, CardapioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cardapio.
     * @param {CardapioDeleteArgs} args - Arguments to delete one Cardapio.
     * @example
     * // Delete one Cardapio
     * const Cardapio = await prisma.cardapio.delete({
     *   where: {
     *     // ... filter to delete one Cardapio
     *   }
     * })
     * 
     */
    delete<T extends CardapioDeleteArgs>(args: SelectSubset<T, CardapioDeleteArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cardapio.
     * @param {CardapioUpdateArgs} args - Arguments to update one Cardapio.
     * @example
     * // Update one Cardapio
     * const cardapio = await prisma.cardapio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardapioUpdateArgs>(args: SelectSubset<T, CardapioUpdateArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cardapios.
     * @param {CardapioDeleteManyArgs} args - Arguments to filter Cardapios to delete.
     * @example
     * // Delete a few Cardapios
     * const { count } = await prisma.cardapio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardapioDeleteManyArgs>(args?: SelectSubset<T, CardapioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cardapios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cardapios
     * const cardapio = await prisma.cardapio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardapioUpdateManyArgs>(args: SelectSubset<T, CardapioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cardapios and returns the data updated in the database.
     * @param {CardapioUpdateManyAndReturnArgs} args - Arguments to update many Cardapios.
     * @example
     * // Update many Cardapios
     * const cardapio = await prisma.cardapio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cardapios and only return the `id`
     * const cardapioWithIdOnly = await prisma.cardapio.updateManyAndReturn({
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
    updateManyAndReturn<T extends CardapioUpdateManyAndReturnArgs>(args: SelectSubset<T, CardapioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cardapio.
     * @param {CardapioUpsertArgs} args - Arguments to update or create a Cardapio.
     * @example
     * // Update or create a Cardapio
     * const cardapio = await prisma.cardapio.upsert({
     *   create: {
     *     // ... data to create a Cardapio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cardapio we want to update
     *   }
     * })
     */
    upsert<T extends CardapioUpsertArgs>(args: SelectSubset<T, CardapioUpsertArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cardapios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioCountArgs} args - Arguments to filter Cardapios to count.
     * @example
     * // Count the number of Cardapios
     * const count = await prisma.cardapio.count({
     *   where: {
     *     // ... the filter for the Cardapios we want to count
     *   }
     * })
    **/
    count<T extends CardapioCountArgs>(
      args?: Subset<T, CardapioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardapioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cardapio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardapioAggregateArgs>(args: Subset<T, CardapioAggregateArgs>): Prisma.PrismaPromise<GetCardapioAggregateType<T>>

    /**
     * Group by Cardapio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardapioGroupByArgs} args - Group by arguments.
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
      T extends CardapioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardapioGroupByArgs['orderBy'] }
        : { orderBy?: CardapioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardapioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardapioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cardapio model
   */
  readonly fields: CardapioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cardapio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardapioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pratos<T extends Cardapio$pratosArgs<ExtArgs> = {}>(args?: Subset<T, Cardapio$pratosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cardapio model
   */
  interface CardapioFieldRefs {
    readonly id: FieldRef<"Cardapio", 'Int'>
    readonly nome: FieldRef<"Cardapio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cardapio findUnique
   */
  export type CardapioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * Filter, which Cardapio to fetch.
     */
    where: CardapioWhereUniqueInput
  }

  /**
   * Cardapio findUniqueOrThrow
   */
  export type CardapioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * Filter, which Cardapio to fetch.
     */
    where: CardapioWhereUniqueInput
  }

  /**
   * Cardapio findFirst
   */
  export type CardapioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * Filter, which Cardapio to fetch.
     */
    where?: CardapioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cardapios to fetch.
     */
    orderBy?: CardapioOrderByWithRelationInput | CardapioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cardapios.
     */
    cursor?: CardapioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cardapios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cardapios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cardapios.
     */
    distinct?: CardapioScalarFieldEnum | CardapioScalarFieldEnum[]
  }

  /**
   * Cardapio findFirstOrThrow
   */
  export type CardapioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * Filter, which Cardapio to fetch.
     */
    where?: CardapioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cardapios to fetch.
     */
    orderBy?: CardapioOrderByWithRelationInput | CardapioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cardapios.
     */
    cursor?: CardapioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cardapios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cardapios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cardapios.
     */
    distinct?: CardapioScalarFieldEnum | CardapioScalarFieldEnum[]
  }

  /**
   * Cardapio findMany
   */
  export type CardapioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * Filter, which Cardapios to fetch.
     */
    where?: CardapioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cardapios to fetch.
     */
    orderBy?: CardapioOrderByWithRelationInput | CardapioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cardapios.
     */
    cursor?: CardapioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cardapios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cardapios.
     */
    skip?: number
    distinct?: CardapioScalarFieldEnum | CardapioScalarFieldEnum[]
  }

  /**
   * Cardapio create
   */
  export type CardapioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * The data needed to create a Cardapio.
     */
    data: XOR<CardapioCreateInput, CardapioUncheckedCreateInput>
  }

  /**
   * Cardapio createMany
   */
  export type CardapioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cardapios.
     */
    data: CardapioCreateManyInput | CardapioCreateManyInput[]
  }

  /**
   * Cardapio createManyAndReturn
   */
  export type CardapioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * The data used to create many Cardapios.
     */
    data: CardapioCreateManyInput | CardapioCreateManyInput[]
  }

  /**
   * Cardapio update
   */
  export type CardapioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * The data needed to update a Cardapio.
     */
    data: XOR<CardapioUpdateInput, CardapioUncheckedUpdateInput>
    /**
     * Choose, which Cardapio to update.
     */
    where: CardapioWhereUniqueInput
  }

  /**
   * Cardapio updateMany
   */
  export type CardapioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cardapios.
     */
    data: XOR<CardapioUpdateManyMutationInput, CardapioUncheckedUpdateManyInput>
    /**
     * Filter which Cardapios to update
     */
    where?: CardapioWhereInput
    /**
     * Limit how many Cardapios to update.
     */
    limit?: number
  }

  /**
   * Cardapio updateManyAndReturn
   */
  export type CardapioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * The data used to update Cardapios.
     */
    data: XOR<CardapioUpdateManyMutationInput, CardapioUncheckedUpdateManyInput>
    /**
     * Filter which Cardapios to update
     */
    where?: CardapioWhereInput
    /**
     * Limit how many Cardapios to update.
     */
    limit?: number
  }

  /**
   * Cardapio upsert
   */
  export type CardapioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * The filter to search for the Cardapio to update in case it exists.
     */
    where: CardapioWhereUniqueInput
    /**
     * In case the Cardapio found by the `where` argument doesn't exist, create a new Cardapio with this data.
     */
    create: XOR<CardapioCreateInput, CardapioUncheckedCreateInput>
    /**
     * In case the Cardapio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardapioUpdateInput, CardapioUncheckedUpdateInput>
  }

  /**
   * Cardapio delete
   */
  export type CardapioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
    /**
     * Filter which Cardapio to delete.
     */
    where: CardapioWhereUniqueInput
  }

  /**
   * Cardapio deleteMany
   */
  export type CardapioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cardapios to delete
     */
    where?: CardapioWhereInput
    /**
     * Limit how many Cardapios to delete.
     */
    limit?: number
  }

  /**
   * Cardapio.pratos
   */
  export type Cardapio$pratosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    where?: PratoWhereInput
    orderBy?: PratoOrderByWithRelationInput | PratoOrderByWithRelationInput[]
    cursor?: PratoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PratoScalarFieldEnum | PratoScalarFieldEnum[]
  }

  /**
   * Cardapio without action
   */
  export type CardapioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cardapio
     */
    select?: CardapioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cardapio
     */
    omit?: CardapioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardapioInclude<ExtArgs> | null
  }


  /**
   * Model Prato
   */

  export type AggregatePrato = {
    _count: PratoCountAggregateOutputType | null
    _avg: PratoAvgAggregateOutputType | null
    _sum: PratoSumAggregateOutputType | null
    _min: PratoMinAggregateOutputType | null
    _max: PratoMaxAggregateOutputType | null
  }

  export type PratoAvgAggregateOutputType = {
    id: number | null
    price: number | null
    cardapioId: number | null
    pedidoId: number | null
  }

  export type PratoSumAggregateOutputType = {
    id: number | null
    price: number | null
    cardapioId: number | null
    pedidoId: number | null
  }

  export type PratoMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    description: string | null
    price: number | null
    category: string | null
    available: boolean | null
    cardapioId: number | null
    pedidoId: number | null
  }

  export type PratoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    description: string | null
    price: number | null
    category: string | null
    available: boolean | null
    cardapioId: number | null
    pedidoId: number | null
  }

  export type PratoCountAggregateOutputType = {
    id: number
    name: number
    image: number
    description: number
    price: number
    category: number
    available: number
    cardapioId: number
    pedidoId: number
    _all: number
  }


  export type PratoAvgAggregateInputType = {
    id?: true
    price?: true
    cardapioId?: true
    pedidoId?: true
  }

  export type PratoSumAggregateInputType = {
    id?: true
    price?: true
    cardapioId?: true
    pedidoId?: true
  }

  export type PratoMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    price?: true
    category?: true
    available?: true
    cardapioId?: true
    pedidoId?: true
  }

  export type PratoMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    price?: true
    category?: true
    available?: true
    cardapioId?: true
    pedidoId?: true
  }

  export type PratoCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    price?: true
    category?: true
    available?: true
    cardapioId?: true
    pedidoId?: true
    _all?: true
  }

  export type PratoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prato to aggregate.
     */
    where?: PratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pratoes to fetch.
     */
    orderBy?: PratoOrderByWithRelationInput | PratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pratoes
    **/
    _count?: true | PratoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PratoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PratoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PratoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PratoMaxAggregateInputType
  }

  export type GetPratoAggregateType<T extends PratoAggregateArgs> = {
        [P in keyof T & keyof AggregatePrato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrato[P]>
      : GetScalarType<T[P], AggregatePrato[P]>
  }




  export type PratoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PratoWhereInput
    orderBy?: PratoOrderByWithAggregationInput | PratoOrderByWithAggregationInput[]
    by: PratoScalarFieldEnum[] | PratoScalarFieldEnum
    having?: PratoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PratoCountAggregateInputType | true
    _avg?: PratoAvgAggregateInputType
    _sum?: PratoSumAggregateInputType
    _min?: PratoMinAggregateInputType
    _max?: PratoMaxAggregateInputType
  }

  export type PratoGroupByOutputType = {
    id: number
    name: string
    image: string
    description: string
    price: number
    category: string
    available: boolean
    cardapioId: number
    pedidoId: number | null
    _count: PratoCountAggregateOutputType | null
    _avg: PratoAvgAggregateOutputType | null
    _sum: PratoSumAggregateOutputType | null
    _min: PratoMinAggregateOutputType | null
    _max: PratoMaxAggregateOutputType | null
  }

  type GetPratoGroupByPayload<T extends PratoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PratoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PratoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PratoGroupByOutputType[P]>
            : GetScalarType<T[P], PratoGroupByOutputType[P]>
        }
      >
    >


  export type PratoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    available?: boolean
    cardapioId?: boolean
    pedidoId?: boolean
    cardapioName?: boolean | CardapioDefaultArgs<ExtArgs>
    Pedido?: boolean | Prato$PedidoArgs<ExtArgs>
  }, ExtArgs["result"]["prato"]>

  export type PratoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    available?: boolean
    cardapioId?: boolean
    pedidoId?: boolean
    cardapioName?: boolean | CardapioDefaultArgs<ExtArgs>
    Pedido?: boolean | Prato$PedidoArgs<ExtArgs>
  }, ExtArgs["result"]["prato"]>

  export type PratoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    available?: boolean
    cardapioId?: boolean
    pedidoId?: boolean
    cardapioName?: boolean | CardapioDefaultArgs<ExtArgs>
    Pedido?: boolean | Prato$PedidoArgs<ExtArgs>
  }, ExtArgs["result"]["prato"]>

  export type PratoSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    available?: boolean
    cardapioId?: boolean
    pedidoId?: boolean
  }

  export type PratoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "description" | "price" | "category" | "available" | "cardapioId" | "pedidoId", ExtArgs["result"]["prato"]>
  export type PratoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cardapioName?: boolean | CardapioDefaultArgs<ExtArgs>
    Pedido?: boolean | Prato$PedidoArgs<ExtArgs>
  }
  export type PratoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cardapioName?: boolean | CardapioDefaultArgs<ExtArgs>
    Pedido?: boolean | Prato$PedidoArgs<ExtArgs>
  }
  export type PratoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cardapioName?: boolean | CardapioDefaultArgs<ExtArgs>
    Pedido?: boolean | Prato$PedidoArgs<ExtArgs>
  }

  export type $PratoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prato"
    objects: {
      cardapioName: Prisma.$CardapioPayload<ExtArgs>
      Pedido: Prisma.$PedidoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string
      description: string
      price: number
      category: string
      available: boolean
      cardapioId: number
      pedidoId: number | null
    }, ExtArgs["result"]["prato"]>
    composites: {}
  }

  type PratoGetPayload<S extends boolean | null | undefined | PratoDefaultArgs> = $Result.GetResult<Prisma.$PratoPayload, S>

  type PratoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PratoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PratoCountAggregateInputType | true
    }

  export interface PratoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prato'], meta: { name: 'Prato' } }
    /**
     * Find zero or one Prato that matches the filter.
     * @param {PratoFindUniqueArgs} args - Arguments to find a Prato
     * @example
     * // Get one Prato
     * const prato = await prisma.prato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PratoFindUniqueArgs>(args: SelectSubset<T, PratoFindUniqueArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PratoFindUniqueOrThrowArgs} args - Arguments to find a Prato
     * @example
     * // Get one Prato
     * const prato = await prisma.prato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PratoFindUniqueOrThrowArgs>(args: SelectSubset<T, PratoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoFindFirstArgs} args - Arguments to find a Prato
     * @example
     * // Get one Prato
     * const prato = await prisma.prato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PratoFindFirstArgs>(args?: SelectSubset<T, PratoFindFirstArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoFindFirstOrThrowArgs} args - Arguments to find a Prato
     * @example
     * // Get one Prato
     * const prato = await prisma.prato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PratoFindFirstOrThrowArgs>(args?: SelectSubset<T, PratoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pratoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pratoes
     * const pratoes = await prisma.prato.findMany()
     * 
     * // Get first 10 Pratoes
     * const pratoes = await prisma.prato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pratoWithIdOnly = await prisma.prato.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PratoFindManyArgs>(args?: SelectSubset<T, PratoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prato.
     * @param {PratoCreateArgs} args - Arguments to create a Prato.
     * @example
     * // Create one Prato
     * const Prato = await prisma.prato.create({
     *   data: {
     *     // ... data to create a Prato
     *   }
     * })
     * 
     */
    create<T extends PratoCreateArgs>(args: SelectSubset<T, PratoCreateArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pratoes.
     * @param {PratoCreateManyArgs} args - Arguments to create many Pratoes.
     * @example
     * // Create many Pratoes
     * const prato = await prisma.prato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PratoCreateManyArgs>(args?: SelectSubset<T, PratoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pratoes and returns the data saved in the database.
     * @param {PratoCreateManyAndReturnArgs} args - Arguments to create many Pratoes.
     * @example
     * // Create many Pratoes
     * const prato = await prisma.prato.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pratoes and only return the `id`
     * const pratoWithIdOnly = await prisma.prato.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PratoCreateManyAndReturnArgs>(args?: SelectSubset<T, PratoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prato.
     * @param {PratoDeleteArgs} args - Arguments to delete one Prato.
     * @example
     * // Delete one Prato
     * const Prato = await prisma.prato.delete({
     *   where: {
     *     // ... filter to delete one Prato
     *   }
     * })
     * 
     */
    delete<T extends PratoDeleteArgs>(args: SelectSubset<T, PratoDeleteArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prato.
     * @param {PratoUpdateArgs} args - Arguments to update one Prato.
     * @example
     * // Update one Prato
     * const prato = await prisma.prato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PratoUpdateArgs>(args: SelectSubset<T, PratoUpdateArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pratoes.
     * @param {PratoDeleteManyArgs} args - Arguments to filter Pratoes to delete.
     * @example
     * // Delete a few Pratoes
     * const { count } = await prisma.prato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PratoDeleteManyArgs>(args?: SelectSubset<T, PratoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pratoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pratoes
     * const prato = await prisma.prato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PratoUpdateManyArgs>(args: SelectSubset<T, PratoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pratoes and returns the data updated in the database.
     * @param {PratoUpdateManyAndReturnArgs} args - Arguments to update many Pratoes.
     * @example
     * // Update many Pratoes
     * const prato = await prisma.prato.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pratoes and only return the `id`
     * const pratoWithIdOnly = await prisma.prato.updateManyAndReturn({
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
    updateManyAndReturn<T extends PratoUpdateManyAndReturnArgs>(args: SelectSubset<T, PratoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prato.
     * @param {PratoUpsertArgs} args - Arguments to update or create a Prato.
     * @example
     * // Update or create a Prato
     * const prato = await prisma.prato.upsert({
     *   create: {
     *     // ... data to create a Prato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prato we want to update
     *   }
     * })
     */
    upsert<T extends PratoUpsertArgs>(args: SelectSubset<T, PratoUpsertArgs<ExtArgs>>): Prisma__PratoClient<$Result.GetResult<Prisma.$PratoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pratoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoCountArgs} args - Arguments to filter Pratoes to count.
     * @example
     * // Count the number of Pratoes
     * const count = await prisma.prato.count({
     *   where: {
     *     // ... the filter for the Pratoes we want to count
     *   }
     * })
    **/
    count<T extends PratoCountArgs>(
      args?: Subset<T, PratoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PratoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PratoAggregateArgs>(args: Subset<T, PratoAggregateArgs>): Prisma.PrismaPromise<GetPratoAggregateType<T>>

    /**
     * Group by Prato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PratoGroupByArgs} args - Group by arguments.
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
      T extends PratoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PratoGroupByArgs['orderBy'] }
        : { orderBy?: PratoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PratoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPratoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prato model
   */
  readonly fields: PratoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PratoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cardapioName<T extends CardapioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardapioDefaultArgs<ExtArgs>>): Prisma__CardapioClient<$Result.GetResult<Prisma.$CardapioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Pedido<T extends Prato$PedidoArgs<ExtArgs> = {}>(args?: Subset<T, Prato$PedidoArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Prato model
   */
  interface PratoFieldRefs {
    readonly id: FieldRef<"Prato", 'Int'>
    readonly name: FieldRef<"Prato", 'String'>
    readonly image: FieldRef<"Prato", 'String'>
    readonly description: FieldRef<"Prato", 'String'>
    readonly price: FieldRef<"Prato", 'Float'>
    readonly category: FieldRef<"Prato", 'String'>
    readonly available: FieldRef<"Prato", 'Boolean'>
    readonly cardapioId: FieldRef<"Prato", 'Int'>
    readonly pedidoId: FieldRef<"Prato", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Prato findUnique
   */
  export type PratoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * Filter, which Prato to fetch.
     */
    where: PratoWhereUniqueInput
  }

  /**
   * Prato findUniqueOrThrow
   */
  export type PratoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * Filter, which Prato to fetch.
     */
    where: PratoWhereUniqueInput
  }

  /**
   * Prato findFirst
   */
  export type PratoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * Filter, which Prato to fetch.
     */
    where?: PratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pratoes to fetch.
     */
    orderBy?: PratoOrderByWithRelationInput | PratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pratoes.
     */
    cursor?: PratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pratoes.
     */
    distinct?: PratoScalarFieldEnum | PratoScalarFieldEnum[]
  }

  /**
   * Prato findFirstOrThrow
   */
  export type PratoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * Filter, which Prato to fetch.
     */
    where?: PratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pratoes to fetch.
     */
    orderBy?: PratoOrderByWithRelationInput | PratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pratoes.
     */
    cursor?: PratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pratoes.
     */
    distinct?: PratoScalarFieldEnum | PratoScalarFieldEnum[]
  }

  /**
   * Prato findMany
   */
  export type PratoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * Filter, which Pratoes to fetch.
     */
    where?: PratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pratoes to fetch.
     */
    orderBy?: PratoOrderByWithRelationInput | PratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pratoes.
     */
    cursor?: PratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pratoes.
     */
    skip?: number
    distinct?: PratoScalarFieldEnum | PratoScalarFieldEnum[]
  }

  /**
   * Prato create
   */
  export type PratoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * The data needed to create a Prato.
     */
    data: XOR<PratoCreateInput, PratoUncheckedCreateInput>
  }

  /**
   * Prato createMany
   */
  export type PratoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pratoes.
     */
    data: PratoCreateManyInput | PratoCreateManyInput[]
  }

  /**
   * Prato createManyAndReturn
   */
  export type PratoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * The data used to create many Pratoes.
     */
    data: PratoCreateManyInput | PratoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prato update
   */
  export type PratoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * The data needed to update a Prato.
     */
    data: XOR<PratoUpdateInput, PratoUncheckedUpdateInput>
    /**
     * Choose, which Prato to update.
     */
    where: PratoWhereUniqueInput
  }

  /**
   * Prato updateMany
   */
  export type PratoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pratoes.
     */
    data: XOR<PratoUpdateManyMutationInput, PratoUncheckedUpdateManyInput>
    /**
     * Filter which Pratoes to update
     */
    where?: PratoWhereInput
    /**
     * Limit how many Pratoes to update.
     */
    limit?: number
  }

  /**
   * Prato updateManyAndReturn
   */
  export type PratoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * The data used to update Pratoes.
     */
    data: XOR<PratoUpdateManyMutationInput, PratoUncheckedUpdateManyInput>
    /**
     * Filter which Pratoes to update
     */
    where?: PratoWhereInput
    /**
     * Limit how many Pratoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prato upsert
   */
  export type PratoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * The filter to search for the Prato to update in case it exists.
     */
    where: PratoWhereUniqueInput
    /**
     * In case the Prato found by the `where` argument doesn't exist, create a new Prato with this data.
     */
    create: XOR<PratoCreateInput, PratoUncheckedCreateInput>
    /**
     * In case the Prato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PratoUpdateInput, PratoUncheckedUpdateInput>
  }

  /**
   * Prato delete
   */
  export type PratoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
    /**
     * Filter which Prato to delete.
     */
    where: PratoWhereUniqueInput
  }

  /**
   * Prato deleteMany
   */
  export type PratoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pratoes to delete
     */
    where?: PratoWhereInput
    /**
     * Limit how many Pratoes to delete.
     */
    limit?: number
  }

  /**
   * Prato.Pedido
   */
  export type Prato$PedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
  }

  /**
   * Prato without action
   */
  export type PratoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prato
     */
    select?: PratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prato
     */
    omit?: PratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PratoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    senha: 'senha',
    nome: 'nome'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const CardapioScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type CardapioScalarFieldEnum = (typeof CardapioScalarFieldEnum)[keyof typeof CardapioScalarFieldEnum]


  export const PratoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    description: 'description',
    price: 'price',
    category: 'category',
    available: 'available',
    cardapioId: 'cardapioId',
    pedidoId: 'pedidoId'
  };

  export type PratoScalarFieldEnum = (typeof PratoScalarFieldEnum)[keyof typeof PratoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    pedidos?: PedidoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    senha?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    pedidos?: PedidoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    usuarioId?: IntFilter<"Pedido"> | number
    pratos?: PratoListRelationFilter
    usuarioRel?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    pratos?: PratoOrderByRelationAggregateInput
    usuarioRel?: UsuarioOrderByWithRelationInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    usuarioId?: IntFilter<"Pedido"> | number
    pratos?: PratoListRelationFilter
    usuarioRel?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    usuarioId?: IntWithAggregatesFilter<"Pedido"> | number
  }

  export type CardapioWhereInput = {
    AND?: CardapioWhereInput | CardapioWhereInput[]
    OR?: CardapioWhereInput[]
    NOT?: CardapioWhereInput | CardapioWhereInput[]
    id?: IntFilter<"Cardapio"> | number
    nome?: StringFilter<"Cardapio"> | string
    pratos?: PratoListRelationFilter
  }

  export type CardapioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    pratos?: PratoOrderByRelationAggregateInput
  }

  export type CardapioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CardapioWhereInput | CardapioWhereInput[]
    OR?: CardapioWhereInput[]
    NOT?: CardapioWhereInput | CardapioWhereInput[]
    nome?: StringFilter<"Cardapio"> | string
    pratos?: PratoListRelationFilter
  }, "id">

  export type CardapioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: CardapioCountOrderByAggregateInput
    _avg?: CardapioAvgOrderByAggregateInput
    _max?: CardapioMaxOrderByAggregateInput
    _min?: CardapioMinOrderByAggregateInput
    _sum?: CardapioSumOrderByAggregateInput
  }

  export type CardapioScalarWhereWithAggregatesInput = {
    AND?: CardapioScalarWhereWithAggregatesInput | CardapioScalarWhereWithAggregatesInput[]
    OR?: CardapioScalarWhereWithAggregatesInput[]
    NOT?: CardapioScalarWhereWithAggregatesInput | CardapioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cardapio"> | number
    nome?: StringWithAggregatesFilter<"Cardapio"> | string
  }

  export type PratoWhereInput = {
    AND?: PratoWhereInput | PratoWhereInput[]
    OR?: PratoWhereInput[]
    NOT?: PratoWhereInput | PratoWhereInput[]
    id?: IntFilter<"Prato"> | number
    name?: StringFilter<"Prato"> | string
    image?: StringFilter<"Prato"> | string
    description?: StringFilter<"Prato"> | string
    price?: FloatFilter<"Prato"> | number
    category?: StringFilter<"Prato"> | string
    available?: BoolFilter<"Prato"> | boolean
    cardapioId?: IntFilter<"Prato"> | number
    pedidoId?: IntNullableFilter<"Prato"> | number | null
    cardapioName?: XOR<CardapioScalarRelationFilter, CardapioWhereInput>
    Pedido?: XOR<PedidoNullableScalarRelationFilter, PedidoWhereInput> | null
  }

  export type PratoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    available?: SortOrder
    cardapioId?: SortOrder
    pedidoId?: SortOrderInput | SortOrder
    cardapioName?: CardapioOrderByWithRelationInput
    Pedido?: PedidoOrderByWithRelationInput
  }

  export type PratoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PratoWhereInput | PratoWhereInput[]
    OR?: PratoWhereInput[]
    NOT?: PratoWhereInput | PratoWhereInput[]
    name?: StringFilter<"Prato"> | string
    image?: StringFilter<"Prato"> | string
    description?: StringFilter<"Prato"> | string
    price?: FloatFilter<"Prato"> | number
    category?: StringFilter<"Prato"> | string
    available?: BoolFilter<"Prato"> | boolean
    cardapioId?: IntFilter<"Prato"> | number
    pedidoId?: IntNullableFilter<"Prato"> | number | null
    cardapioName?: XOR<CardapioScalarRelationFilter, CardapioWhereInput>
    Pedido?: XOR<PedidoNullableScalarRelationFilter, PedidoWhereInput> | null
  }, "id">

  export type PratoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    available?: SortOrder
    cardapioId?: SortOrder
    pedidoId?: SortOrderInput | SortOrder
    _count?: PratoCountOrderByAggregateInput
    _avg?: PratoAvgOrderByAggregateInput
    _max?: PratoMaxOrderByAggregateInput
    _min?: PratoMinOrderByAggregateInput
    _sum?: PratoSumOrderByAggregateInput
  }

  export type PratoScalarWhereWithAggregatesInput = {
    AND?: PratoScalarWhereWithAggregatesInput | PratoScalarWhereWithAggregatesInput[]
    OR?: PratoScalarWhereWithAggregatesInput[]
    NOT?: PratoScalarWhereWithAggregatesInput | PratoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prato"> | number
    name?: StringWithAggregatesFilter<"Prato"> | string
    image?: StringWithAggregatesFilter<"Prato"> | string
    description?: StringWithAggregatesFilter<"Prato"> | string
    price?: FloatWithAggregatesFilter<"Prato"> | number
    category?: StringWithAggregatesFilter<"Prato"> | string
    available?: BoolWithAggregatesFilter<"Prato"> | boolean
    cardapioId?: IntWithAggregatesFilter<"Prato"> | number
    pedidoId?: IntNullableWithAggregatesFilter<"Prato"> | number | null
  }

  export type UsuarioCreateInput = {
    email: string
    senha: string
    nome: string
    pedidos?: PedidoCreateNestedManyWithoutUsuarioRelInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    email: string
    senha: string
    nome: string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioRelInput
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    pedidos?: PedidoUpdateManyWithoutUsuarioRelNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioRelNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    email: string
    senha: string
    nome: string
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoCreateInput = {
    pratos?: PratoCreateNestedManyWithoutPedidoInput
    usuarioRel: UsuarioCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    pratos?: PratoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    pratos?: PratoUpdateManyWithoutPedidoNestedInput
    usuarioRel?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    pratos?: PratoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    usuarioId: number
  }

  export type PedidoUpdateManyMutationInput = {

  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type CardapioCreateInput = {
    nome: string
    pratos?: PratoCreateNestedManyWithoutCardapioNameInput
  }

  export type CardapioUncheckedCreateInput = {
    id?: number
    nome: string
    pratos?: PratoUncheckedCreateNestedManyWithoutCardapioNameInput
  }

  export type CardapioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    pratos?: PratoUpdateManyWithoutCardapioNameNestedInput
  }

  export type CardapioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pratos?: PratoUncheckedUpdateManyWithoutCardapioNameNestedInput
  }

  export type CardapioCreateManyInput = {
    id?: number
    nome: string
  }

  export type CardapioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CardapioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PratoCreateInput = {
    name: string
    image: string
    description: string
    price: number
    category: string
    available: boolean
    cardapioName: CardapioCreateNestedOneWithoutPratosInput
    Pedido?: PedidoCreateNestedOneWithoutPratosInput
  }

  export type PratoUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    description: string
    price: number
    category: string
    available: boolean
    cardapioId: number
    pedidoId?: number | null
  }

  export type PratoUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    cardapioName?: CardapioUpdateOneRequiredWithoutPratosNestedInput
    Pedido?: PedidoUpdateOneWithoutPratosNestedInput
  }

  export type PratoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    cardapioId?: IntFieldUpdateOperationsInput | number
    pedidoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PratoCreateManyInput = {
    id?: number
    name: string
    image: string
    description: string
    price: number
    category: string
    available: boolean
    cardapioId: number
    pedidoId?: number | null
  }

  export type PratoUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PratoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    cardapioId?: IntFieldUpdateOperationsInput | number
    pedidoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type PratoListRelationFilter = {
    every?: PratoWhereInput
    some?: PratoWhereInput
    none?: PratoWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type PratoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type CardapioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CardapioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CardapioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CardapioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CardapioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CardapioScalarRelationFilter = {
    is?: CardapioWhereInput
    isNot?: CardapioWhereInput
  }

  export type PedidoNullableScalarRelationFilter = {
    is?: PedidoWhereInput | null
    isNot?: PedidoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PratoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    available?: SortOrder
    cardapioId?: SortOrder
    pedidoId?: SortOrder
  }

  export type PratoAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    cardapioId?: SortOrder
    pedidoId?: SortOrder
  }

  export type PratoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    available?: SortOrder
    cardapioId?: SortOrder
    pedidoId?: SortOrder
  }

  export type PratoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    available?: SortOrder
    cardapioId?: SortOrder
    pedidoId?: SortOrder
  }

  export type PratoSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    cardapioId?: SortOrder
    pedidoId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PedidoCreateNestedManyWithoutUsuarioRelInput = {
    create?: XOR<PedidoCreateWithoutUsuarioRelInput, PedidoUncheckedCreateWithoutUsuarioRelInput> | PedidoCreateWithoutUsuarioRelInput[] | PedidoUncheckedCreateWithoutUsuarioRelInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioRelInput | PedidoCreateOrConnectWithoutUsuarioRelInput[]
    createMany?: PedidoCreateManyUsuarioRelInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutUsuarioRelInput = {
    create?: XOR<PedidoCreateWithoutUsuarioRelInput, PedidoUncheckedCreateWithoutUsuarioRelInput> | PedidoCreateWithoutUsuarioRelInput[] | PedidoUncheckedCreateWithoutUsuarioRelInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioRelInput | PedidoCreateOrConnectWithoutUsuarioRelInput[]
    createMany?: PedidoCreateManyUsuarioRelInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PedidoUpdateManyWithoutUsuarioRelNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioRelInput, PedidoUncheckedCreateWithoutUsuarioRelInput> | PedidoCreateWithoutUsuarioRelInput[] | PedidoUncheckedCreateWithoutUsuarioRelInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioRelInput | PedidoCreateOrConnectWithoutUsuarioRelInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioRelInput | PedidoUpsertWithWhereUniqueWithoutUsuarioRelInput[]
    createMany?: PedidoCreateManyUsuarioRelInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioRelInput | PedidoUpdateWithWhereUniqueWithoutUsuarioRelInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioRelInput | PedidoUpdateManyWithWhereWithoutUsuarioRelInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioRelNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioRelInput, PedidoUncheckedCreateWithoutUsuarioRelInput> | PedidoCreateWithoutUsuarioRelInput[] | PedidoUncheckedCreateWithoutUsuarioRelInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioRelInput | PedidoCreateOrConnectWithoutUsuarioRelInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioRelInput | PedidoUpsertWithWhereUniqueWithoutUsuarioRelInput[]
    createMany?: PedidoCreateManyUsuarioRelInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioRelInput | PedidoUpdateWithWhereUniqueWithoutUsuarioRelInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioRelInput | PedidoUpdateManyWithWhereWithoutUsuarioRelInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PratoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PratoCreateWithoutPedidoInput, PratoUncheckedCreateWithoutPedidoInput> | PratoCreateWithoutPedidoInput[] | PratoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PratoCreateOrConnectWithoutPedidoInput | PratoCreateOrConnectWithoutPedidoInput[]
    createMany?: PratoCreateManyPedidoInputEnvelope
    connect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutPedidosInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PratoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PratoCreateWithoutPedidoInput, PratoUncheckedCreateWithoutPedidoInput> | PratoCreateWithoutPedidoInput[] | PratoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PratoCreateOrConnectWithoutPedidoInput | PratoCreateOrConnectWithoutPedidoInput[]
    createMany?: PratoCreateManyPedidoInputEnvelope
    connect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
  }

  export type PratoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PratoCreateWithoutPedidoInput, PratoUncheckedCreateWithoutPedidoInput> | PratoCreateWithoutPedidoInput[] | PratoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PratoCreateOrConnectWithoutPedidoInput | PratoCreateOrConnectWithoutPedidoInput[]
    upsert?: PratoUpsertWithWhereUniqueWithoutPedidoInput | PratoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PratoCreateManyPedidoInputEnvelope
    set?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    disconnect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    delete?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    connect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    update?: PratoUpdateWithWhereUniqueWithoutPedidoInput | PratoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PratoUpdateManyWithWhereWithoutPedidoInput | PratoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PratoScalarWhereInput | PratoScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    upsert?: UsuarioUpsertWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPedidosInput, UsuarioUpdateWithoutPedidosInput>, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type PratoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PratoCreateWithoutPedidoInput, PratoUncheckedCreateWithoutPedidoInput> | PratoCreateWithoutPedidoInput[] | PratoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PratoCreateOrConnectWithoutPedidoInput | PratoCreateOrConnectWithoutPedidoInput[]
    upsert?: PratoUpsertWithWhereUniqueWithoutPedidoInput | PratoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PratoCreateManyPedidoInputEnvelope
    set?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    disconnect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    delete?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    connect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    update?: PratoUpdateWithWhereUniqueWithoutPedidoInput | PratoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PratoUpdateManyWithWhereWithoutPedidoInput | PratoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PratoScalarWhereInput | PratoScalarWhereInput[]
  }

  export type PratoCreateNestedManyWithoutCardapioNameInput = {
    create?: XOR<PratoCreateWithoutCardapioNameInput, PratoUncheckedCreateWithoutCardapioNameInput> | PratoCreateWithoutCardapioNameInput[] | PratoUncheckedCreateWithoutCardapioNameInput[]
    connectOrCreate?: PratoCreateOrConnectWithoutCardapioNameInput | PratoCreateOrConnectWithoutCardapioNameInput[]
    createMany?: PratoCreateManyCardapioNameInputEnvelope
    connect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
  }

  export type PratoUncheckedCreateNestedManyWithoutCardapioNameInput = {
    create?: XOR<PratoCreateWithoutCardapioNameInput, PratoUncheckedCreateWithoutCardapioNameInput> | PratoCreateWithoutCardapioNameInput[] | PratoUncheckedCreateWithoutCardapioNameInput[]
    connectOrCreate?: PratoCreateOrConnectWithoutCardapioNameInput | PratoCreateOrConnectWithoutCardapioNameInput[]
    createMany?: PratoCreateManyCardapioNameInputEnvelope
    connect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
  }

  export type PratoUpdateManyWithoutCardapioNameNestedInput = {
    create?: XOR<PratoCreateWithoutCardapioNameInput, PratoUncheckedCreateWithoutCardapioNameInput> | PratoCreateWithoutCardapioNameInput[] | PratoUncheckedCreateWithoutCardapioNameInput[]
    connectOrCreate?: PratoCreateOrConnectWithoutCardapioNameInput | PratoCreateOrConnectWithoutCardapioNameInput[]
    upsert?: PratoUpsertWithWhereUniqueWithoutCardapioNameInput | PratoUpsertWithWhereUniqueWithoutCardapioNameInput[]
    createMany?: PratoCreateManyCardapioNameInputEnvelope
    set?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    disconnect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    delete?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    connect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    update?: PratoUpdateWithWhereUniqueWithoutCardapioNameInput | PratoUpdateWithWhereUniqueWithoutCardapioNameInput[]
    updateMany?: PratoUpdateManyWithWhereWithoutCardapioNameInput | PratoUpdateManyWithWhereWithoutCardapioNameInput[]
    deleteMany?: PratoScalarWhereInput | PratoScalarWhereInput[]
  }

  export type PratoUncheckedUpdateManyWithoutCardapioNameNestedInput = {
    create?: XOR<PratoCreateWithoutCardapioNameInput, PratoUncheckedCreateWithoutCardapioNameInput> | PratoCreateWithoutCardapioNameInput[] | PratoUncheckedCreateWithoutCardapioNameInput[]
    connectOrCreate?: PratoCreateOrConnectWithoutCardapioNameInput | PratoCreateOrConnectWithoutCardapioNameInput[]
    upsert?: PratoUpsertWithWhereUniqueWithoutCardapioNameInput | PratoUpsertWithWhereUniqueWithoutCardapioNameInput[]
    createMany?: PratoCreateManyCardapioNameInputEnvelope
    set?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    disconnect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    delete?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    connect?: PratoWhereUniqueInput | PratoWhereUniqueInput[]
    update?: PratoUpdateWithWhereUniqueWithoutCardapioNameInput | PratoUpdateWithWhereUniqueWithoutCardapioNameInput[]
    updateMany?: PratoUpdateManyWithWhereWithoutCardapioNameInput | PratoUpdateManyWithWhereWithoutCardapioNameInput[]
    deleteMany?: PratoScalarWhereInput | PratoScalarWhereInput[]
  }

  export type CardapioCreateNestedOneWithoutPratosInput = {
    create?: XOR<CardapioCreateWithoutPratosInput, CardapioUncheckedCreateWithoutPratosInput>
    connectOrCreate?: CardapioCreateOrConnectWithoutPratosInput
    connect?: CardapioWhereUniqueInput
  }

  export type PedidoCreateNestedOneWithoutPratosInput = {
    create?: XOR<PedidoCreateWithoutPratosInput, PedidoUncheckedCreateWithoutPratosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPratosInput
    connect?: PedidoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CardapioUpdateOneRequiredWithoutPratosNestedInput = {
    create?: XOR<CardapioCreateWithoutPratosInput, CardapioUncheckedCreateWithoutPratosInput>
    connectOrCreate?: CardapioCreateOrConnectWithoutPratosInput
    upsert?: CardapioUpsertWithoutPratosInput
    connect?: CardapioWhereUniqueInput
    update?: XOR<XOR<CardapioUpdateToOneWithWhereWithoutPratosInput, CardapioUpdateWithoutPratosInput>, CardapioUncheckedUpdateWithoutPratosInput>
  }

  export type PedidoUpdateOneWithoutPratosNestedInput = {
    create?: XOR<PedidoCreateWithoutPratosInput, PedidoUncheckedCreateWithoutPratosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPratosInput
    upsert?: PedidoUpsertWithoutPratosInput
    disconnect?: PedidoWhereInput | boolean
    delete?: PedidoWhereInput | boolean
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutPratosInput, PedidoUpdateWithoutPratosInput>, PedidoUncheckedUpdateWithoutPratosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PedidoCreateWithoutUsuarioRelInput = {
    pratos?: PratoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutUsuarioRelInput = {
    id?: number
    pratos?: PratoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutUsuarioRelInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutUsuarioRelInput, PedidoUncheckedCreateWithoutUsuarioRelInput>
  }

  export type PedidoCreateManyUsuarioRelInputEnvelope = {
    data: PedidoCreateManyUsuarioRelInput | PedidoCreateManyUsuarioRelInput[]
  }

  export type PedidoUpsertWithWhereUniqueWithoutUsuarioRelInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutUsuarioRelInput, PedidoUncheckedUpdateWithoutUsuarioRelInput>
    create: XOR<PedidoCreateWithoutUsuarioRelInput, PedidoUncheckedCreateWithoutUsuarioRelInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutUsuarioRelInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutUsuarioRelInput, PedidoUncheckedUpdateWithoutUsuarioRelInput>
  }

  export type PedidoUpdateManyWithWhereWithoutUsuarioRelInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutUsuarioRelInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: IntFilter<"Pedido"> | number
    usuarioId?: IntFilter<"Pedido"> | number
  }

  export type PratoCreateWithoutPedidoInput = {
    name: string
    image: string
    description: string
    price: number
    category: string
    available: boolean
    cardapioName: CardapioCreateNestedOneWithoutPratosInput
  }

  export type PratoUncheckedCreateWithoutPedidoInput = {
    id?: number
    name: string
    image: string
    description: string
    price: number
    category: string
    available: boolean
    cardapioId: number
  }

  export type PratoCreateOrConnectWithoutPedidoInput = {
    where: PratoWhereUniqueInput
    create: XOR<PratoCreateWithoutPedidoInput, PratoUncheckedCreateWithoutPedidoInput>
  }

  export type PratoCreateManyPedidoInputEnvelope = {
    data: PratoCreateManyPedidoInput | PratoCreateManyPedidoInput[]
  }

  export type UsuarioCreateWithoutPedidosInput = {
    email: string
    senha: string
    nome: string
  }

  export type UsuarioUncheckedCreateWithoutPedidosInput = {
    id?: number
    email: string
    senha: string
    nome: string
  }

  export type UsuarioCreateOrConnectWithoutPedidosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
  }

  export type PratoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: PratoWhereUniqueInput
    update: XOR<PratoUpdateWithoutPedidoInput, PratoUncheckedUpdateWithoutPedidoInput>
    create: XOR<PratoCreateWithoutPedidoInput, PratoUncheckedCreateWithoutPedidoInput>
  }

  export type PratoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: PratoWhereUniqueInput
    data: XOR<PratoUpdateWithoutPedidoInput, PratoUncheckedUpdateWithoutPedidoInput>
  }

  export type PratoUpdateManyWithWhereWithoutPedidoInput = {
    where: PratoScalarWhereInput
    data: XOR<PratoUpdateManyMutationInput, PratoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PratoScalarWhereInput = {
    AND?: PratoScalarWhereInput | PratoScalarWhereInput[]
    OR?: PratoScalarWhereInput[]
    NOT?: PratoScalarWhereInput | PratoScalarWhereInput[]
    id?: IntFilter<"Prato"> | number
    name?: StringFilter<"Prato"> | string
    image?: StringFilter<"Prato"> | string
    description?: StringFilter<"Prato"> | string
    price?: FloatFilter<"Prato"> | number
    category?: StringFilter<"Prato"> | string
    available?: BoolFilter<"Prato"> | boolean
    cardapioId?: IntFilter<"Prato"> | number
    pedidoId?: IntNullableFilter<"Prato"> | number | null
  }

  export type UsuarioUpsertWithoutPedidosInput = {
    update: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPedidosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type UsuarioUpdateWithoutPedidosInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PratoCreateWithoutCardapioNameInput = {
    name: string
    image: string
    description: string
    price: number
    category: string
    available: boolean
    Pedido?: PedidoCreateNestedOneWithoutPratosInput
  }

  export type PratoUncheckedCreateWithoutCardapioNameInput = {
    id?: number
    name: string
    image: string
    description: string
    price: number
    category: string
    available: boolean
    pedidoId?: number | null
  }

  export type PratoCreateOrConnectWithoutCardapioNameInput = {
    where: PratoWhereUniqueInput
    create: XOR<PratoCreateWithoutCardapioNameInput, PratoUncheckedCreateWithoutCardapioNameInput>
  }

  export type PratoCreateManyCardapioNameInputEnvelope = {
    data: PratoCreateManyCardapioNameInput | PratoCreateManyCardapioNameInput[]
  }

  export type PratoUpsertWithWhereUniqueWithoutCardapioNameInput = {
    where: PratoWhereUniqueInput
    update: XOR<PratoUpdateWithoutCardapioNameInput, PratoUncheckedUpdateWithoutCardapioNameInput>
    create: XOR<PratoCreateWithoutCardapioNameInput, PratoUncheckedCreateWithoutCardapioNameInput>
  }

  export type PratoUpdateWithWhereUniqueWithoutCardapioNameInput = {
    where: PratoWhereUniqueInput
    data: XOR<PratoUpdateWithoutCardapioNameInput, PratoUncheckedUpdateWithoutCardapioNameInput>
  }

  export type PratoUpdateManyWithWhereWithoutCardapioNameInput = {
    where: PratoScalarWhereInput
    data: XOR<PratoUpdateManyMutationInput, PratoUncheckedUpdateManyWithoutCardapioNameInput>
  }

  export type CardapioCreateWithoutPratosInput = {
    nome: string
  }

  export type CardapioUncheckedCreateWithoutPratosInput = {
    id?: number
    nome: string
  }

  export type CardapioCreateOrConnectWithoutPratosInput = {
    where: CardapioWhereUniqueInput
    create: XOR<CardapioCreateWithoutPratosInput, CardapioUncheckedCreateWithoutPratosInput>
  }

  export type PedidoCreateWithoutPratosInput = {
    usuarioRel: UsuarioCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutPratosInput = {
    id?: number
    usuarioId: number
  }

  export type PedidoCreateOrConnectWithoutPratosInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutPratosInput, PedidoUncheckedCreateWithoutPratosInput>
  }

  export type CardapioUpsertWithoutPratosInput = {
    update: XOR<CardapioUpdateWithoutPratosInput, CardapioUncheckedUpdateWithoutPratosInput>
    create: XOR<CardapioCreateWithoutPratosInput, CardapioUncheckedCreateWithoutPratosInput>
    where?: CardapioWhereInput
  }

  export type CardapioUpdateToOneWithWhereWithoutPratosInput = {
    where?: CardapioWhereInput
    data: XOR<CardapioUpdateWithoutPratosInput, CardapioUncheckedUpdateWithoutPratosInput>
  }

  export type CardapioUpdateWithoutPratosInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CardapioUncheckedUpdateWithoutPratosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoUpsertWithoutPratosInput = {
    update: XOR<PedidoUpdateWithoutPratosInput, PedidoUncheckedUpdateWithoutPratosInput>
    create: XOR<PedidoCreateWithoutPratosInput, PedidoUncheckedCreateWithoutPratosInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutPratosInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutPratosInput, PedidoUncheckedUpdateWithoutPratosInput>
  }

  export type PedidoUpdateWithoutPratosInput = {
    usuarioRel?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutPratosInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateManyUsuarioRelInput = {
    id?: number
  }

  export type PedidoUpdateWithoutUsuarioRelInput = {
    pratos?: PratoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutUsuarioRelInput = {
    id?: IntFieldUpdateOperationsInput | number
    pratos?: PratoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioRelInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type PratoCreateManyPedidoInput = {
    id?: number
    name: string
    image: string
    description: string
    price: number
    category: string
    available: boolean
    cardapioId: number
  }

  export type PratoUpdateWithoutPedidoInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    cardapioName?: CardapioUpdateOneRequiredWithoutPratosNestedInput
  }

  export type PratoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    cardapioId?: IntFieldUpdateOperationsInput | number
  }

  export type PratoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    cardapioId?: IntFieldUpdateOperationsInput | number
  }

  export type PratoCreateManyCardapioNameInput = {
    id?: number
    name: string
    image: string
    description: string
    price: number
    category: string
    available: boolean
    pedidoId?: number | null
  }

  export type PratoUpdateWithoutCardapioNameInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    Pedido?: PedidoUpdateOneWithoutPratosNestedInput
  }

  export type PratoUncheckedUpdateWithoutCardapioNameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    pedidoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PratoUncheckedUpdateManyWithoutCardapioNameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    pedidoId?: NullableIntFieldUpdateOperationsInput | number | null
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