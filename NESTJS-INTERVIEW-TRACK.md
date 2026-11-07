# NestJS interview track

This file is the course, the progress tracker, and the teaching contract. Any tutor (human or model) must follow it so the student learns NestJS the same way every session: one orders API, one layer at a time, and a test before the next phase.

The student is preparing for a **mid-level NestJS interview**. The goal is to explain where a request goes, put each feature in the right layer, and demo one small API from memory.

---

## Start a session

Paste this to any new tutor:

```text
Read NESTJS-INTERVIEW-TRACK.md in this project and teach the next unfinished day.
Follow the Tutor contract and the Modes. Start in Instruction mode.
Do not skip a build step, a done-when check, or a rubric point.
Do not teach the next step until I finish the current one.
At the end of the session, update Current position, the checkboxes, and the Session log in that file.
```

The student can switch mode in plain words. The tutor switches, answers inside that mode, then returns to the active step.

| The student says | Mode |
| --- | --- |
| continue, next, teach, let's build | Instruction |
| I don't get it, why, doubt, explain this | Doubt |
| error, it fails, fix this, I'm stuck on this code | Debug |
| quiz me, test me, grade me | Quiz |
| remind me, revise day N | Review |
| what about X, is this in the interview, later topic | Park |

---

## Current position

Tutors update this block at the end of every session. Do not rename these fields.

| Field | Value |
| --- | --- |
| Status | IN PROGRESS |
| Active phase | 3 |
| Active day | 6 |
| Active mode | Instruction |
| Active step | Not started — wait for continue |
| Last session | 2026-11-07 |
| Phase gates passed | 2 |
| Final verdict | IN PROGRESS |

Allowed `Status` values: `NOT STARTED`, `IN PROGRESS`, `READY`, `NOT READY`.

Allowed `Final verdict` values: `NOT STARTED`, `IN PROGRESS`, `READY`, `NOT READY`.

Set `READY` only after the Final gate passes. Set `NOT READY` when the Final gate fails, and write the repeat days in the Session log.

---

## Tutor contract

1. Read **Current position** and the checkboxes before teaching. Resume at the first unchecked day. Do not reteach a checked day unless the student asks or a later gate sends them back.
2. Teach **one day per session** unless the student finishes early and explicitly asks to continue. Never open a later phase’s design while an earlier phase gate is open.
3. The student writes the code. Give the next step, the file to create, and what “correct” looks like. After two failed attempts on the same step, show a short corrected snippet of that step only.
4. Ask the day’s oral question **before** showing the rubric. Grade it against **A passing answer must mention**. A pass names the required points in the student’s own words. Reciting this file is not a pass. Say what was missing, then let them answer once more.
5. Do not check a day until its build, its “done when” list, and its oral question all pass.
6. Do not check a phase gate until every day in that phase is checked and the phase test passes. Then set **Active phase** to the next phase and **Active day** to its first day.
7. On a failed gate, uncheck nothing that was honestly passed. Send the student back to the days listed under **If this gate fails**. Those days stay checked only if the student can still answer them. If they cannot, uncheck that day.
8. Keep one app: `nest-interview-api/`, created beside this file. Do not start a second tutorial project.
9. Prefer the official docs linked on each day over blog posts. If Nest’s current API disagrees with this file, Nest wins. Note the difference in the Session log and keep the layer rules.
10. At the end of every session, update **Current position**, the checkboxes you verified, and add one Session log row.
11. Do not study GraphQL, CQRS, or microservices during phases 1–6 unless a job description the student pasted names them. Days 15–18 stay locked until the Final gate is `READY` or the role explicitly needs them.
12. Review code against the layer rules before a phase test. If auth logic is in middleware, validation is in the controller, or a request-scoped provider has pulled a service off the singleton, the day is not done.
13. Every reply names its mode in the first line, stays inside that mode, and ends by naming the active day and the next unfinished step. A doubt, a bug, or a side question does not change the active day.
14. Explain the current step enough to build it and defend it. Do not skip a point in **Say this, then stop**. Do not add the next step, a second feature, or a framework survey.

### How to grade an oral answer

- **Pass:** every point under “A passing answer must mention” appears, and the student can point at their own class when one exists.
- **Weak:** the idea is right but a required point is missing. Say which point. One retry. A second weak answer fails the question.
- **Fail:** the wrong layer, a guessed order, or no connection to their code. Do not check the day.

### How a session runs

The session starts in Instruction mode on the active step.

1. First line: `Mode: Instruction · Phase N · Day N · step K of M`.
2. Teach that step with the depth rule below. Point at the doc link on the first step of the day only.
3. Wait for the student to do the step. Then mark the step done in **Active step** and move to the next build item.
4. After the last build item, walk **Done when**, then ask the oral question. That question is Quiz mode for one answer, then back to Instruction.
5. If the oral answer passes, check the day. If it was the last day of the phase, run the phase test only when the student still has time. Otherwise the next session is Quiz mode for that gate and no new material.
6. Update this file before the session ends. Set **Active mode** back to `Instruction` unless the student stopped mid-debug.

### Depth rule

Sufficient means the student can do the step and say why it lives in that layer. It is not a lecture, and it is not a hint with no reason.

Use this shape in Instruction and Doubt. Four parts, in this order, then stop:

1. **What it is.** Two to four sentences about this step only.
2. **Why here.** One or two sentences that name the layer and the interview reason.
3. **What to write.** The class, the method, or the registration. Not the whole feature.
4. **What correct looks like.** One check the student can run or see.

Do not skip:

- Any numbered build item, any **Done when** bullet, or any **A passing answer must mention** point.
- Anything under that day's **Say this, then stop**.

Do not add:

- The next build item, before this one works.
- A second example that introduces the next day.
- History, a tour of Nest packages, or more than one alternative.
- A full file when the step is one class or one registration.

If the student asks "more" while still on the same point, add one concrete example from their code, then stop. A third explanation of the same point means switch to Debug or ask them to point at the line that is unclear.

### Modes

Only one mode is active. The first line of the reply names it. The last line returns to the unfinished step: `Back to Instruction · Day N · step K: <the step>.`

#### Instruction

Default. Teach the active build step and nothing after it.

- Open with the mode line, including phase, day, and step number.
- Follow the depth rule.
- End with the single action the student takes now.
- Do not preview the next step "so they see where this is going."

#### Doubt

The student is confused about the current step, or about something already built.

- Restate the confusion in one sentence so they can correct you.
- Answer with the depth rule, tied to their class or their request. Four to eight sentences is the usual length. A short snippet is allowed when a sentence cannot show the shape.
- Use their names (`OrdersService`, `AuthGuard`), not a new sample domain.
- If the doubt is the current step, stay on that step afterward.
- If the doubt was already taught on an earlier day, answer from that day, then return to the active step. Do not rebuild the old day.
- If the doubt belongs to a later day, do not teach it. Switch to Park.

#### Debug

The current step does not run, or the result does not match **What correct looks like**.

- Name the error in one sentence.
- Name the cause in two or three sentences.
- Change only the broken step. Do not refactor ahead, rename the design, or add the next feature while fixing.
- Show the corrected lines for that step after two failed attempts, or sooner if the failure is an install, a missing import, or a Nest error they cannot see.
- When it runs, return to Instruction on the same step so they can confirm the check themselves.

#### Quiz

The student asked to be tested, or a day or phase is ready to be graded.

- Ask one question. Do not explain it first. Do not show the rubric.
- Grade with **How to grade an oral answer**.
- On a weak answer, name the missing point only, then allow one retry.
- On a pass, check the box that this quiz covers and return to the next unfinished step.
- Scope is fixed:
  - Mid-day: only the active day's oral question, and only after its build list is done.
  - Day complete, gate open: only that phase gate.
  - Days 13–14: the question bank and the placement drills.
- Do not run a later gate early. If they ask, say which day unlocks it and return to the active step.

#### Review

The student wants a past day back without leaving the track.

- Allowed only for a checked day, or for the active day up to the current step.
- Five minutes: what they built, the class name, and the oral point. No new code.
- Ask one question from that day.
- If they cannot answer, uncheck that day only when a gate says to repeat it, or when they ask to redo it. Otherwise note the miss in the Session log and continue the active day.
- Last line is the active unfinished step, not the reviewed day.

#### Park

The question is real and it is not this step. Parking it is how the track stays intact.

- Two sentences: what the thing is, and where it belongs.
- Belonging is one of: a later day number, the senior add-on, or out of scope.
- Append one row to **Parked questions**. Do not answer from a blog and do not start building it.
- Return to the active step in the same reply.
- A parked question becomes teachable only when its day is the active day.

Out of scope for phases 1–6, unless a pasted job description names it: GraphQL, CQRS, WebSockets, microservices, refresh-token rotation, and a second database. Refresh tokens may be defined in one sentence on day 8 and must not be built.

### Layer rules

Use these for every code review and every placement drill.

| Job | Layer | Why |
| --- | --- | --- |
| Request id, access log, CORS | Middleware | Runs before Nest has bound the handler |
| Is this caller allowed? | Guard | `ExecutionContext` can read handler metadata |
| Timing, response shape, cache | Interceptor | Wraps the handler and sees the return value |
| Validate or transform an argument | Pipe | Runs before the controller method |
| Turn a throw into the HTTP body | Exception filter | Last place that sees the error |
| Environment values | `ConfigModule` | Process config, read once |
| Password hashing and token signing | Auth service | Business operation, not the guard |
| Work that can fail after the HTTP success | Queue, after commit | The request returns without waiting |

Request order to teach and to demand back:

```text
Middleware
  → Guards            (global, then controller, then route)
  → Interceptors      (before the handler: global, controller, route)
  → Pipes             (global, controller, route, then parameter pipes)
  → Controller
  → Service
  → Interceptors      (after the handler, reverse: route, controller, global)
  → Exception filter  (route, then controller, then global) if something threw
```

Parameter pipes process the last parameter first. Mention it from day 3 onward. Do not treat it as optional trivia.

---

## Progress

Check a box only after the tutor has verified it. The student does not check their own gate.

### Phase 1 — How Nest is wired

- [x] Day 1 — Bootstrap and modules
- [x] Day 2 — Providers and dependency injection
- [x] Phase 1 gate

### Phase 2 — The request pipeline

- [x] Day 3 — Middleware, a guard, and validation
- [x] Day 4 — Interceptors and exception filters
- [x] Phase 2 gate

### Phase 3 — Dependency injection in a real app

- [x] Day 5 — Config and module boundaries
- [ ] Day 6 — Custom providers
- [ ] Day 7 — Scopes, then undo the request scope
- [ ] Phase 3 gate

### Phase 4 — Auth

- [ ] Day 8 — Register, login, and a signed token
- [ ] Day 9 — A global guard and `@Public()`
- [ ] Day 10 — Roles and ownership
- [ ] Phase 4 gate

### Phase 5 — Tests

- [ ] Day 11 — Unit test the service
- [ ] Day 12 — One e2e path, and three bugs on purpose
- [ ] Phase 5 gate

### Phase 6 — Interview rehearsal

- [ ] Day 13 — Whiteboard the API
- [ ] Day 14 — Timed question bank
- [ ] Final gate

### Senior add-on (locked until the Final gate is READY, or the job asks)

- [ ] Day 15 — Persistence and a transaction
- [ ] Day 16 — Cache the read, not the user
- [ ] Day 17 — A queue after the order commits
- [ ] Day 18 — When not to split the service
- [ ] Senior gate

---

## The app

Create `nest-interview-api/` next to this file with the Nest CLI. One process. In-memory stores through phase 5. No second sample app.

Target module map by the end of phase 4:

| Module | Owns | Exports |
| --- | --- | --- |
| `AppModule` | `ConfigModule.forRoot`, global `ValidationPipe`, `APP_GUARD`, `APP_FILTER` | Nothing feature-specific |
| `UsersModule` | `UsersService` and the user store | `UsersService` |
| `AuthModule` | Register, login, `JwtStrategy`, JWT guard, roles guard | Guards are global through `APP_GUARD` |
| `OrdersModule` | `OrdersController`, `OrdersService`, `ORDER_REPOSITORY` | Nothing, unless another module must place an order |

Target behavior by the end of phase 4:

- `POST /auth/register` creates a customer. The password is stored as a hash. The hash is never returned.
- `POST /auth/login` returns a bearer token that expires in 15 minutes.
- `POST /orders` requires that token. `userId` comes from `request.user`, never from the body.
- `GET /orders` returns only the caller’s orders.
- `GET /admin/orders` requires role `admin`. A customer token gets **403**. A missing token gets **401**.
- A bad body gets **400** and never enters the controller.
- An unknown order id becomes the filter’s JSON shape, not a stack trace.

Daily time box, about two hours:

- 30 minutes on the linked doc
- 70 minutes building that day’s list
- 20 minutes answering the oral question with the editor closed

---

## Phase 1 — How Nest is wired

**Days:** 1–2. **Outcome:** the student can draw the module graph and explain constructor injection from their project.

**Tutor moves:** Stay inside modules, controllers, and providers. Do not introduce guards, pipes, or JWT. The first list can be a hardcoded array inside the service.

### Day 1 — Bootstrap and modules

Read: [Modules](https://docs.nestjs.com/modules) and [First steps](https://docs.nestjs.com/first-steps).

Say this, then stop:

- `main.ts` calls `NestFactory.create(AppModule)`, then listens. That call builds the module graph and the HTTP adapter.
- `@Module()` holds `controllers`, `providers`, `imports`, and `exports`. Today only controllers and imports are needed.
- A controller method is the route. The decorator maps the path. Business rules wait for the service on day 2.
- Stop before guards, pipes, JWT, and constructor metadata.

Build:

1. `nest new nest-interview-api` in this study folder.
2. Add `OrdersModule` and `OrdersController`.
3. `GET /orders` returns a hardcoded JSON list.
4. Import `OrdersModule` from `AppModule`.

Done when:

- The server starts and `GET /orders` returns JSON.
- The student draws `AppModule` → `OrdersModule` → `OrdersController`.
- The student says what `NestFactory.create(AppModule)` does.

Oral question: **What is a module, and why does Nest make you declare one?**

A passing answer must mention:

- A module lists controllers, providers, imports, and exports.
- Nest builds the application from that graph.
- Another module can inject a provider only if this module exports it.

### Day 2 — Providers and dependency injection

Read: [Providers](https://docs.nestjs.com/providers).

Say this, then stop:

- `@Injectable()` marks a class the container is allowed to construct.
- Put it on `providers` and inject it as a constructor parameter. The controller must not call `new`.
- With decorator metadata enabled, Nest reads `design:paramtypes` and treats the parameter type as the token.
- `@Inject()` and a custom token are how an interface will be injected. Name that, and build it on day 6.
- Stop before `useFactory`, scopes, and the request pipeline.

Build:

1. Add `OrdersService.findAll()` and move the array there.
2. Inject `OrdersService` through the controller constructor.
3. Register it on `OrdersModule`’s `providers`.
4. Remove any `new OrdersService()` from the controller.

Done when:

- `GET /orders` still returns the service’s data.
- The student can point at `@Injectable()` and the `providers` array.
- The student knows an unexported provider is invisible to importers.

Oral question: **How does Nest know what to pass into a constructor?**

A passing answer must mention:

- `emitDecoratorMetadata` records constructor parameter types as `design:paramtypes`.
- The container resolves each type.
- The class must be registered as a provider.
- An interface or a duplicate type needs a custom token. They do not have to build the token until day 6.

### Phase 1 gate

Run only after day 1 and day 2 are checked. Ask both questions one at a time. Then inspect the code. Do not accept a screenshot in place of the running route.

**Oral**

1. Draw or describe the module graph of this app.
2. Explain constructor injection without opening the docs.

**Practical**

- [x] `GET /orders` returns JSON from `OrdersService`.
- [x] `OrdersModule` is imported by `AppModule`.
- [x] The controller does not construct the service with `new`.
- [x] `OrdersService` is on `providers`.

**Score:** both oral answers pass, and every practical box is true.

**If this gate fails:** repeat the failed day. Do not start middleware.

---

## Phase 2 — The request pipeline

**Days:** 3–4. **Outcome:** the student walks one real request through their own classes, in order.

**Tutor moves:** Add one layer at a time and make the student predict what happens before they send the request. The auth guard is a stub that reads the `x-user` header. Do not install Passport yet.

### Day 3 — Middleware, a guard, and validation

Read: [Middleware](https://docs.nestjs.com/middleware), [Guards](https://docs.nestjs.com/guards), [Pipes](https://docs.nestjs.com/pipes), and [Request lifecycle](https://docs.nestjs.com/faq/request-lifecycle).

Say this, then stop:

- The module implements `NestModule`. `configure(consumer)` applies middleware. Middleware calls `next()` or ends the response. It cannot see the handler.
- A guard implements `CanActivate`. It returns true or throws. `UnauthorizedException` is 401.
- The DTO is the pipe’s input. `whitelist` strips unknown fields. `transform` turns the JSON into the class instance.
- `ParseIntPipe` is the built-in for a numeric param. Name it. Add it only if this id is a number.
- Stop before Passport, interceptors, and filters.

Build:

1. `LoggerMiddleware` logs method and URL, then calls `next()`.
2. Apply it to the orders routes from `OrdersModule.configure()`.
3. Stub `AuthGuard`: missing `x-user` throws `UnauthorizedException`.
4. `CreateOrderDto`: `productId` is a non-empty string, `qty` is an integer of at least 1, using `class-validator`.
5. `POST /orders` takes that DTO.
6. Register `ValidationPipe` globally with `whitelist: true` and `transform: true`.

Done when:

- A bad body returns 400 and the controller method does not run.
- A request without `x-user` returns 401.
- The student states the order: middleware, guard, interceptor, pipe, controller.

Oral question: **Walk one HTTP request through Nest, in order.**

A passing answer must mention:

- Middleware, then guards, then interceptors before the handler, then pipes, then the controller.
- Guard binding order: global, controller, route.
- Interceptors run again on the way out in reverse binding order.
- A throw is handled by an exception filter.
- Parameter pipes run last-parameter first.

### Day 4 — Interceptors and exception filters

Read: [Interceptors](https://docs.nestjs.com/interceptors) and [Exception filters](https://docs.nestjs.com/exception-filters).

Say this, then stop:

- An interceptor implements `NestInterceptor`. `next.handle()` is an Observable of the rest of the call. `tap` looks at the result and does not change it. `map` would change the body. Timing uses `tap`.
- A filter implements `ExceptionFilter`, with `@Catch()`. It receives `ArgumentsHost` and uses `switchToHttp()` for the request and response.
- Guards and interceptors receive `ExecutionContext`, which also knows the handler class and method. A filter does not need the handler, because the handler already failed.
- `APP_FILTER` registers that filter for every route. A route-level filter would run before this global one.
- `NotFoundException` is an `HttpException` with status 404. The filter only shapes the JSON.
- Stop before config, custom tokens, and real JWT.

Build:

1. `TimingInterceptor` records a start time and logs duration in `tap()` on `next.handle()`.
2. Bind it on `OrdersController`.
3. `GET /orders/:id` calls the service. An unknown id throws `NotFoundException`.
4. `AllExceptionsFilter` returns `statusCode`, `message`, `path`, and `timestamp`.
5. Register that filter with `APP_FILTER`.

Done when:

- A successful request logs duration after the handler returns.
- An unknown id returns the filter body and no stack trace.
- The student assigns one job each to guard, pipe, interceptor, and filter.

Oral question: **What can an interceptor do that a guard and a pipe cannot?**

A passing answer must mention:

- `next.handle()` is an Observable of the handler result.
- The interceptor can time, map, cache, or skip the handler.
- A guard only admits or denies. A pipe only prepares arguments.
- Filters are tried route, then controller, then global.

### Phase 2 gate

**Oral**

1. Walk `POST /orders` and name the student’s real classes at each step.
2. Four placements, asked one at a time. The answer is the layer plus one reason.
   - Attach a request id to every log line.
   - Reject a caller who is not allowed to create an order.
   - Reject `qty` less than 1.
   - Hide stack traces.

**Practical**

- [x] Logger middleware runs and calls `next()`.
- [x] Missing `x-user` returns 401 from the guard.
- [x] `{ "productId": "", "qty": 0 }` returns 400 and does not enter the controller.
- [x] An extra JSON field is stripped by `whitelist`.
- [x] Unknown id returns the filter’s JSON shape.
- [x] The timing log is written after the handler, not before.

**Score:** both oral answers pass (all four placements correct), and every practical box is true.

**If this gate fails:** lifecycle mistakes go back to day 3. Filter or interceptor mistakes go back to day 4. Do not start `ConfigModule`.

---

## Phase 3 — Dependency injection in a real app

**Days:** 5–7. **Outcome:** the student chooses a provider shape and a scope and can defend it.

**Tutor moves:** Make them break the boundary once so they see `UnknownDependenciesException`, then fix it. On day 7 they must create the request-scoped design, observe it, and remove it. Leaving `OrdersService` request-scoped fails the day.

### Day 5 — Config and module boundaries

Read: [Configuration](https://docs.nestjs.com/techniques/configuration).

Say this, then stop:

- `ConfigModule.forRoot({ isGlobal: true })` loads the environment once. Other modules can inject `ConfigService` without importing config again.
- `forRoot` is the one app-wide setup. `forFeature` is the slice a single feature registers. `forRootAsync` is that same setup when the options need injection. Do not build the async form today. Day 8 uses it for JWT.
- `providers` is private. `exports` is what importers may inject. A missing export surfaces as `UnknownDependenciesException`.
- Stop before custom tokens and request scope.

Build:

1. `ConfigModule.forRoot({ isGlobal: true })`. Read `PORT` from the environment.
2. `UsersModule` with an in-memory `UsersService`: `id`, `email`, `passwordHash`, `role`.
3. Export `UsersService`. Import `UsersModule` into `OrdersModule`.
4. Once, import `OrdersModule`’s need for `UsersService` without the export, read the error, then export it.

Done when:

- The app boots using `PORT` from `.env`.
- The student can contrast `providers` and `exports`.
- The student can say why `forRoot` belongs on the root import.

Oral question: **What is the difference between providers and exports, and between forRoot and forFeature?**

A passing answer must mention:

- `providers` constructs the object in this module. `exports` lets importers inject it.
- `forRoot` configures the module once for the app.
- `forFeature` registers the slice one feature needs, such as one entity repository.
- Calling `forRoot` in every feature duplicates that configuration.

### Day 6 — Custom providers

Read: [Custom providers](https://docs.nestjs.com/fundamentals/custom-providers).

Say this, then stop:

- Interfaces disappear at runtime, so an interface cannot be the injection token. `ORDER_REPOSITORY` is the token. `@Inject(ORDER_REPOSITORY)` selects it.
- Register `useClass` first so Nest constructs the repository. Then switch to `useFactory` because the object depends on config.
- Say what `useValue` and `useExisting` are for. Do not add extra providers only to demonstrate them.
- Stop before scopes. Do not add a database.

Build:

1. An `OrderRepository` interface with `save`, `findAll`, and `findById`.
2. `InMemoryOrderRepository`.
3. Token `ORDER_REPOSITORY`, first registered with `useClass`.
4. Inject it with `@Inject(ORDER_REPOSITORY)` in `OrdersService`.
5. Change the registration to `useFactory` that reads `ORDER_STORE` from `ConfigService` and returns the in-memory store. Leave a short comment where a database store would branch.

Done when:

- `OrdersService` depends on the token, not the concrete class.
- The student gives one use each for `useClass`, `useValue`, `useFactory`, and `useExisting`.
- Create and list still work.

Oral question: **When do you use useFactory instead of useClass?**

A passing answer must mention:

- `useClass` constructs one class and fills its constructor.
- `useFactory` runs a function so you can read config, take several tokens, and choose the object.
- `useValue` supplies a constant.
- `useExisting` aliases one token to another so they share an instance.

### Day 7 — Scopes, then undo the request scope

Read: [Injection scopes](https://docs.nestjs.com/fundamentals/injection-scopes) and [Lifecycle events](https://docs.nestjs.com/fundamentals/lifecycle-events).

Say this, then stop:

- `DEFAULT` is one instance for the app, created during startup. `REQUEST` is one instance per request. `TRANSIENT` is one instance per class that injects it.
- Bubble-up is the cost to show in the constructor logs, then remove. The guard writes `request.user`. `OrdersService` stays a singleton.
- `OnModuleInit` runs once when this module’s dependencies are ready. Name `OnApplicationBootstrap` (after every module is ready) and `OnModuleDestroy` (on shutdown). Do not implement those two.
- Stop before password hashing.

Build:

1. A request-scoped current-user provider that reads `x-user`.
2. Inject it into `OrdersService`. Log both constructors. Confirm the service is constructed per request.
3. Remove that injection. The guard sets `request.user` instead.
4. Add `OnModuleInit` on `OrdersService` and confirm the log happens once at startup.

Done when:

- The student saw the request-scoped dependency pull the service off the singleton.
- The finished code keeps `OrdersService` as the default singleton.
- The student can explain bubble-up.

Oral question: **What does request scope cost, and when is it worth it?**

A passing answer must mention:

- `DEFAULT` is one instance for the app. `REQUEST` is one per request. `TRANSIENT` is one per consumer.
- A singleton that injects a request-scoped provider becomes request-scoped, and that bubbles upward.
- The usual place for the current user is `request.user`, set by the guard.
- Request scope is for something that truly cannot be shared, not for convenience.

### Phase 3 gate

**Oral**

1. `providers` versus `exports`.
2. Name the four custom provider shapes and when `useFactory` is the one you want.
3. What happens to `OrdersService` if it injects a request-scoped user?

**Practical**

- [ ] `PORT` comes from config.
- [ ] `UsersService` is exported, and `OrdersModule` imports `UsersModule`.
- [ ] `OrdersService` injects `ORDER_REPOSITORY`, registered with `useFactory`.
- [ ] No request-scoped provider remains in the orders path.
- [ ] `OnModuleInit` runs once at startup.
- [ ] The student can still create and list an order with the `x-user` stub.

**Score:** all three oral answers pass, and every practical box is true.

**If this gate fails:** boundary mistakes go back to day 5. Token mistakes go back to day 6. Scope mistakes go back to day 7. Do not start password hashing.

---

## Phase 4 — Auth

**Days:** 8–10. **Outcome:** the student can protect routes, explain 401 versus 403, and show why role checks do not belong in middleware.

**Tutor moves:** Remove the `x-user` stub on day 9, not before login works. `userId` on an order must come from the token’s user. A body field named `userId` must be ignored or stripped.

### Day 8 — Register, login, and a signed token

Read: [Authentication](https://docs.nestjs.com/security/authentication).

Say this, then stop:

- `AuthService` hashes on register and compares on login. The controller never sees the hash algorithm.
- The returned object has no `passwordHash`. Do not add a serializer package for this.
- `JwtModule.registerAsync` injects `ConfigService` so the secret is not a hardcoded string. `JwtService.sign` creates the access token.
- An access token is the credential this route returns. A refresh token would be a second, longer-lived secret and a second endpoint. Define that in one sentence if they ask, and do not build it. Park the question.
- Leave route protection to day 9. The `x-user` stub may stay until that day.
- Stop before `JwtStrategy` and `APP_GUARD`.

Build:

1. `POST /auth/register` creates a user. Hash the password with bcrypt. Default role is `customer`.
2. `POST /auth/login` compares the hash and returns a signed access token that expires in 15 minutes.
3. `JwtModule.registerAsync` reads `JWT_SECRET` and `JWT_EXPIRES_IN` from `ConfigService`.
4. Hashing, comparing, and signing live in `AuthService`. The controller maps HTTP.

Done when:

- Register, then login, returns a token.
- A wrong password throws `UnauthorizedException` from the service.
- Responses never include `passwordHash`.

Oral question: **Where is the password checked, and why is that not the guard?**

A passing answer must mention:

- Register and login are `AuthService` operations: hash on write, compare on login, then sign.
- The guard runs on later requests and checks the token, not the password store.
- Putting password rules in the guard couples every route to credential storage.

### Day 9 — A global guard and `@Public()`

Read: [Authorization](https://docs.nestjs.com/security/authorization).

Say this, then stop:

- `JwtStrategy.validate()` returns the object Passport assigns to `request.user`. It does not return a boolean. A failure here is 401.
- `APP_GUARD` applies the guard to every route. `@Public()` writes metadata. `Reflector` reads that metadata from the handler, then from the class.
- Global guards run in the order they are registered. Today there is one. The roles guard is registered after it on day 10.
- Remove the `x-user` stub only after register and login work without a token.
- Stop before `@Roles()`.

Build:

1. `JwtStrategy` reads the bearer token. `validate()` returns `userId`, `email`, and `role`. Passport assigns that to `request.user`.
2. `JwtAuthGuard` extends `AuthGuard('jwt')`.
3. Register it as `APP_GUARD`.
4. `@Public()` uses `SetMetadata`. The guard reads it with `Reflector` and allows those handlers.
5. Mark register and login public. Delete the day-3 `x-user` stub.

Done when:

- `GET /orders` without a token returns 401.
- Login works without a token.
- The student can point at the metadata key the guard reads.

Oral question: **Why a global guard plus `@Public()`, instead of decorating every private route?**

A passing answer must mention:

- The safe default is deny, applied once with `APP_GUARD`.
- `@Public()` opts a handler out through metadata.
- A forgotten per-route decorator would ship an open route.
- A guard can see the handler. Middleware cannot.

### Day 10 — Roles and ownership

Read: [Custom decorators](https://docs.nestjs.com/custom-decorators).

Say this, then stop:

- `@Roles()` is metadata, the same mechanism as `@Public()`. No `@Roles()` means any authenticated user.
- 401 comes from the JWT guard when there is no identity. 403 comes from `ForbiddenException` in `RolesGuard` when the identity is known and not allowed.
- Ownership is a filter on `request.user.userId`. A `userId` in the body or query must not choose the owner.
- Stop before tests, refresh tokens, OAuth, and a permissions table.

Build:

1. `@Roles('admin')` stores metadata with `SetMetadata`.
2. `RolesGuard` reads it with `Reflector`. No `@Roles()` means any authenticated user may call the route.
3. A known user with the wrong role throws `ForbiddenException`.
4. Register `RolesGuard` as a second `APP_GUARD`, after the JWT guard.
5. `GET /orders` returns only that user’s orders.
6. `GET /admin/orders` requires `admin` and returns every order.
7. `POST /orders` sets `userId` from `request.user`.

Done when:

- A customer token receives 403 on `/admin/orders`.
- A customer cannot read another customer’s order by guessing an id.
- The student explains 401 and 403 with these two guards.

Oral question: **Why can’t middleware enforce `@Roles()` the way a guard can?**

A passing answer must mention:

- Middleware runs before the handler is bound, so it cannot read route metadata.
- `ExecutionContext` plus `Reflector` is how the guard sees `@Roles()`.
- 401 is no valid identity. 403 is a known user who is not allowed.

### Phase 4 gate

This is the practical interview. The tutor runs it, or watches the student run it.

**Demo script**

1. Register two customers and one admin (seed the admin in the user store or add a register path the tutor specifies).
2. Login as customer A. Create an order. List orders. Only A’s order is returned.
3. Login as customer B. B does not see A’s order. B gets 403 on `GET /admin/orders`.
4. Call `GET /orders` with no token. Expect 401.
5. Login as admin. `GET /admin/orders` returns every order.
6. `POST /orders` with `"qty": 0` returns 400.
7. `POST /orders` with an extra `"userId"` does not create the order for that id.

**Oral**

1. Where is the password checked?
2. Why is the auth guard global?
3. What is 401 versus 403 in this app?
4. Why is the role check not middleware?

**Score:** the demo script matches the expected statuses, and all four oral answers pass.

**If this gate fails:** token and password bugs go back to day 8. Public-route bugs go back to day 9. Role or ownership bugs go back to day 10. Do not start the test phase on a broken demo.

---

## Phase 5 — Tests

**Days:** 11–12. **Outcome:** the student can test a service without HTTP and can explain three failures they have already caused.

**Tutor moves:** Do not accept a test that boots a port for the service spec. Do not leave `forwardRef` in the finished code.

### Day 11 — Unit test the service

Read: [Testing](https://docs.nestjs.com/fundamentals/testing).

Say this, then stop:

- `Test.createTestingModule` builds a small container. `overrideProvider(ORDER_REPOSITORY).useValue(fake)` replaces the factory.
- Call the service method. Assert `NotFoundException` in the test runner. Do not assert an HTTP status in this file.
- The fake is a plain object with the methods the service calls. It is not the in-memory class.
- Stop before e2e and `forwardRef`.

Build:

1. `orders.service.spec.ts` creates a `TestingModule` with `OrdersService`.
2. `overrideProvider(ORDER_REPOSITORY)` supplies a fake `save` and `findById`.
3. Cover create, find one, and not-found.
4. Do not call `app.listen` in this file.

Done when:

- `npm test` passes.
- The fake is a plain object, not `InMemoryOrderRepository`.
- The student says this test does not cover pipes, guards, or status codes.

Oral question: **How do you unit test a Nest service that depends on a repository?**

A passing answer must mention:

- `TestingModule`, the service, and `overrideProvider` on the repository token.
- Call the service methods directly.
- HTTP status belongs in an e2e test.

### Day 12 — One e2e path, and three bugs on purpose

Read: [End-to-end testing](https://docs.nestjs.com/fundamentals/testing#end-to-end-testing).

Say this, then stop:

- The e2e test boots the app and sends HTTP. It proves status codes, the token, and the body. It does not replace the unit test.
- `forwardRef` only delays a circular lookup. See it work if the cycle is already there, then remove the cycle before the day ends.
- One extra DTO field is enough to show `whitelist`.
- Removing the provider must throw `UnknownDependenciesException`. Restore the provider before the session ends. Do not leave the app broken.
- Stop before the whiteboard day.

Build:

1. An e2e test: register, login, create an order, list it, and expect 401 with no token.
2. Cause a circular dependency between `UsersService` and `OrdersService`. See `forwardRef` work if you want, then remove the cycle by moving the shared work so neither service constructs the other.
3. Send an extra field on `CreateOrderDto` and show that `whitelist` strips it.
4. Remove `OrdersService` from `providers`, read `UnknownDependenciesException`, then restore it.

Done when:

- The e2e test passes.
- The student can tell the story of the cycle, the stripped field, and the missing provider.
- `forwardRef` is not in the finished code.

Oral question: **What is forwardRef, and why is it a smell?**

A passing answer must mention:

- It delays lookup so two classes can construct each other.
- It means the split of work or exports is wrong.
- A third, smaller provider that both can import is the usual fix.
- `UnknownDependenciesException` means the token is not provided here and not exported by an import.

### Phase 5 gate

**Oral**

1. What does the unit test prove, and what does it leave to e2e?
2. Tell the three bug stories: the cycle, `whitelist`, and the missing provider.

**Practical**

- [ ] `npm test` passes.
- [ ] The e2e command passes.
- [ ] The service spec does not listen on a port.
- [ ] The repository is overridden by token.
- [ ] No `forwardRef` remains.

**Score:** both oral answers pass, and every practical box is true.

**If this gate fails:** spec shape goes back to day 11. The e2e or the three bugs go back to day 12. Do not start the whiteboard day.

---

## Phase 6 — Interview rehearsal

**Days:** 13–14. **Outcome:** the student gives the architecture with the laptop closed and clears the question bank.

**Tutor moves:** No new features. If the student opens the repo during the oral, that attempt does not count. They may open it afterward to check themselves.

### Day 13 — Whiteboard the API

No new docs. Use the code they wrote. The lifecycle page is only a fallback if they freeze: [Request lifecycle](https://docs.nestjs.com/faq/request-lifecycle).

Say this, then stop:

- Every box on the drawing is a class that exists in the repo.
- Five minutes, laptop closed. Opening the repo voids that attempt.
- One placement drill is enough for the 30-second check. The full set waits for day 14.
- Stop before scoring all 18 questions.

Build, on paper or in a blank note:

1. Draw `AppModule`, `ConfigModule`, `UsersModule`, `AuthModule`, and `OrdersModule`. Exports are arrows.
2. Trace `POST /orders` and name their real classes.
3. Trace login, then a later request through `JwtStrategy.validate` and `RolesGuard`.
4. Give that explanation in five minutes.

Done when:

- The drawing is finished without the repo open.
- Every class on the drawing exists.
- A new requirement is placed on a layer in under 30 seconds. Use the placement drills.

Oral question: **Give the five-minute architecture of this service.**

A passing answer must mention:

- Who owns users, who owns tokens, who owns orders.
- The request path: middleware, JWT guard, roles guard, validation, controller, service.
- `userId` comes from `request.user`.
- Services stay singletons.
- The filter shapes errors and the interceptor times the call.

### Day 14 — Timed question bank

Say this, then stop:

- One question at a time. Two minutes. Rubric hidden until after the attempt.
- A miss is a fail or a second weak answer. Write the question number in the Session log.
- More than 3 misses: do not check this day. Repeat days 3, 7, and 9, then run day 14 again.
- Stop before the senior add-on, including when they pass.

Ask all 18 questions below, one at a time, two minutes each. Do not show the rubric first. Record misses by question number.

A miss is a fail or a second weak answer. Hesitation that still hits every required point is a pass.

Done when:

- The student misses 3 or fewer.
- `npm test` and the e2e test still pass.
- The phase 4 demo still works.

If they miss more than 3, do not check day 14. Repeat days 3, 7, and 9, then run day 14 again. Those three days are the lifecycle, the scope, and the guards.

### The 18 questions

Grade each against the points listed. The student does not need this wording.

1. **What is a module?** Module graph, controllers and providers, exports are the only public providers.
2. **How does constructor injection work?** `design:paramtypes`, the container, the provider must be registered, custom tokens when the type is not enough.
3. **Walk a request from the socket to the response.** The order in the Layer rules, including the reverse interceptor path and filter order.
4. **Why is authorization a guard and not middleware?** `ExecutionContext`, handler metadata, middleware has no handler yet.
5. **What does a pipe do, and when does it run?** It prepares arguments before the method. A failed validation pipe throws. Global, then controller, then route. Last parameter first.
6. **What can an interceptor see that a guard cannot?** The return stream from `next.handle()`, so it can time, map, cache, or skip.
7. **Who turns a thrown `NotFoundException` into HTTP?** An exception filter. Route, then controller, then global. The filter is where stack traces disappear.
8. **`providers` versus `exports`? `forRoot` versus `forFeature`?** Same points as day 5.
9. **The four custom provider shapes?** Same points as day 6.
10. **What does request scope cost?** Same points as day 7, including bubble-up.
11. **Where is the password checked?** `AuthService`, not the guard.
12. **Why a global auth guard plus `@Public()`?** Default deny. Metadata opt-out. A forgotten decorator must not leave a route open.
13. **What is 401 versus 403 in this app?** JWT guard versus roles guard. 403 is a known user.
14. **How do you unit test `OrdersService`?** `TestingModule` and `overrideProvider`. No port.
15. **What is `forwardRef`?** A delayed lookup and a design smell. Fix the cycle.
16. **What does `ExecutionContext` give you that the raw request does not?** The handler class and method, plus `switchToHttp()`, `switchToRpc()`, and `switchToWs()`.
17. **What do `whitelist` and `transform` do?** `whitelist` strips undecorated properties. `forbidNonWhitelisted` throws instead. `transform` builds a DTO instance and converts primitives. Without `transform`, the parameter type is only a compile-time hint.
18. **Five-minute architecture of this API.** Same points as day 13.

### Placement drills

Ask these with the Layer column covered. A final-gate pass includes at least 7 of 8.

| Requirement | Layer | Why that layer |
| --- | --- | --- |
| Add a request id to every log line | Middleware | Every request, no need for the handler. Set it on the request and call `next()`. |
| Only an admin may list every order | Guard | `RolesGuard` reads `@Roles('admin')`. Middleware cannot. |
| Wrap success bodies as `{ data }` | Interceptor | `map()` on `next.handle()` changes the return value. |
| Reject `qty` less than 1 | Pipe | `class-validator` on `CreateOrderDto`, enforced by `ValidationPipe`. |
| Hide stack traces from clients | Exception filter | It writes the error response. |
| Read `JWT_SECRET` from the environment | `ConfigModule` | Process config. `JwtModule.registerAsync` injects `ConfigService`. |
| Email the customer after the order is saved | Queue | Enqueue after commit. Return 201 without waiting. |
| Know the caller inside `OrdersService` | `request.user` | The JWT guard set it. A request-scoped user would change the service scope. |

### Final gate

Run after day 13 and day 14 are checked.

**Score sheet**

| Part | Pass mark |
| --- | --- |
| Question bank | 15 or more of 18 |
| Placement drills | 7 or more of 8 |
| Five-minute architecture | Pass on the day 13 rubric |
| Demo | Phase 4 demo script still matches |
| Tests | Unit test and e2e pass |

**Verdict**

- All five rows pass: set `Status` and `Final verdict` to `READY`.
- Any row fails: set them to `NOT READY`. Write the missed question numbers and the repeat days in the Session log. Lifecycle misses repeat day 3. Scope misses repeat day 7. Guard and 401/403 misses repeat day 9 or 10. Test misses repeat day 11 or 12. Architecture misses repeat day 13.

The interview is bookable only when the verdict is `READY`.

---

## Senior add-on

Locked until `Final verdict` is `READY`, or the student pastes a job description that asks for the topic. Do not let this block a mid-level interview.

### Day 15 — Persistence and a transaction

Read: [Database](https://docs.nestjs.com/techniques/database).

Say this, then stop:

- One library, TypeORM or Prisma. The connection is registered once. The order slice uses `forFeature` or the repository token they already have.
- Both writes share one transaction in the service. The controller does not open it.
- The day 11 test still overrides the token and does not open a database.
- Stop before caching and a second service.

Build: replace the in-memory order store. Creating an order decrements stock, and both writes commit or both roll back.

A passing answer must mention: the two writes are one business fact, the boundary sits in the service or a unit of work, and the service test still overrides the repository token.

### Day 16 — Cache the read, not the user

Read: [Caching](https://docs.nestjs.com/techniques/caching).

Say this, then stop:

- Cache one public read. The key is the route, not a user.
- `GET /orders` stays uncached, or its key includes the user id. Say what a shared key leaks.
- An interceptor may return a cached body and skip `next.handle()`.
- Stop before queues.

Build: cache a public product list. Do not reuse that key for `GET /orders`. If orders were cached, the key would include the user id.

A passing answer must mention: a shared key serves one caller’s body to the next caller, and an interceptor can skip the handler on a hit.

### Day 17 — A queue after the order commits

Read: [Queues](https://docs.nestjs.com/techniques/queues).

Say this, then stop:

- Enqueue only after the order transaction commits.
- The HTTP handler returns 201 without awaiting the job.
- The processor is its own provider. A retry does not roll the order back.
- Stop before a second deployable service.

Build: after the order transaction commits, enqueue a confirmation job. `POST /orders` returns 201 without waiting. A failed job retries and does not roll back the order.

A passing answer must mention: mail is slow and fails independently, and enqueueing before commit can notify for an order that never landed.

### Day 18 — When not to split the service

Read: [Microservices](https://docs.nestjs.com/microservices/basics). Do not build a second process.

Say this, then stop:

- A split is for an independent deploy, scale, or failure domain, or a separate team.
- The module boundaries already in the app are the seam.
- Naming TCP, Redis, or NATS is enough. Do not scaffold a microservice.

A passing answer must mention: split when a part must deploy, scale, or fail alone, or when another team owns it. Until then the module boundaries are the seam. Naming TCP, Redis, or NATS is enough.

### Senior gate

Oral: the four passing-answer points above, one per day. Practical: a failed stock update leaves no order row, the order list is not served from a global cache key, and stopping the mailer does not fail `POST /orders`.

**If this gate fails:** repeat only the failed day. The mid-level `READY` verdict stays unless the student broke the phase 4 demo.

---

## Out of scope until a job description names them

GraphQL, CQRS, WebSockets, and a multi-service mesh. Refresh-token rotation is defined in one sentence on day 8 and is not built. If the student asks about any of these, use Park mode: two sentences, one row in Parked questions, then the active step.

---

## Session log

Tutors append one row per session. Keep the newest row at the bottom.

| Date | Day | Mode at end | Result | Notes |
| --- | --- | --- | --- | --- |
| — | — | — | — | No session yet. |
| 2026-11-05 | 1 | Instruction | Day 1 checked | `GET /orders` returns the hardcoded list from `OrdersController`. Graph and `NestFactory.create` passed. Oral passed in the student’s own words from `OrdersModule`. `AuthModule` was added early and left for day 8. Day 2 not started. |
| 2026-11-06 | 2 | Quiz | Day 2 checked | `OrdersService.findAll()` is injected into `OrdersController` and registered on `providers`. `GET /orders` returns that list. Export rule passed. Oral passed in the student’s own words, including an interface or duplicate type needing a custom token. Phase 1 gate is next. |
| 2026-11-06 | 1 gate | Quiz | Gate not passed | Question 1 passed: `main.ts` → `AppModule` → `OrdersModule` → `OrdersController` → `OrdersService`. Question 2 retry missed `OrdersController` as the injection site. Repeat Day 2’s constructor explanation. Day 2 stays checked. Middleware not started. |
| 2026-11-06 | 1 gate | Quiz | Phase 1 gate passed | Question 2 passed from the controller: design metadata supplies the parameter, `providers` or `UnknownDependenciesException`, interface or duplicate type needs a custom token. `GET /orders` returned the two orders from `OrdersService`. Phase 2 not started. |
| 2026-11-06 | 3 | Instruction | Day 3 checked | `LoggerMiddleware` logs orders routes. `AuthGuard` returns 401 without `x-user`. `ValidationPipe` returns 400 for an empty `productId` and `qty` 0. Oral passed in the student’s own words, including guard order global then controller then route. Day 4 not started. |
| 2026-11-07 | 4 | Quiz | Day 4 checked | `TimingInterceptor` on `OrdersController`; `APP_FILTER` registers `AllExceptionsFilter`. `GET /orders` logs `duration` after success; `GET /orders/999` returns `{ statusCode, message, path, timestamp }` with no duration. Oral passed in the student’s own words: `next.handle()` is the handler result, interceptor can time/map/cache/skip, guard admits or denies, filters are route then controller then global. Phase 2 gate is next. |
| 2026-11-07 | 2 gate | Quiz | Phase 2 gate passed | Walk was carried (service + filter-only-on-throw still need to be named). Placements: middleware for request id (retry; interceptor was after the guard), `AuthGuard`, `ValidationPipe`+`CreateOrderDto`, `AllExceptionsFilter`. Practical: 401 without `x-user`, 400 on empty `productId`/`qty` 0, extra JSON stripped, filter JSON on `/orders/999`, duration after successful handler. Phase 3 not started. |
| 2026-11-07 | 5 | Instruction | Step 3 seen | `OrdersModule` imports `UserModule`. `OrdersService` injects `UserService`. Startup threw `UnknownDependenciesException`: `UserService` at index 0 is not available in `OrdersModule` because `UserModule` has no `exports`. Export is next. |
| 2026-11-07 | 5 | Instruction | Step 4 seen | `UserModule` exports `UserService`. Restart reached `Nest application successfully started` with `OrdersModule` initialized. `.env` has no `PORT`, so listen still uses the `?? 3000` fallback. Oral not asked. |
| 2026-11-07 | 5 | Quiz | Build done | `PORT=3001` in `.env`. `curl http://localhost:3001/` returned `Hello World!`, so `ConfigService` supplied the port. Oral not answered. |
| 2026-11-07 | 5 | Quiz | Oral weak | Providers answer covered privacy plus export and import. Missed: `providers` constructs in that module; `forRoot` is one app setup (not the same as global); repeating `forRoot` duplicates config; `forFeature` is one feature’s slice. One retry left. Did not name `UserModule` or `AppModule`. |
| 2026-11-07 | 5 | Quiz | Oral failed | Retry named the export crash: `OrdersModule` cannot inject until `UserModule` exports and `OrdersModule` imports. `forRoot` answer described `isGlobal` (`ConfigService` in `main.ts` without importing config again). Still missing: `providers` constructs `UserService`; `forRoot` is one app setup; repeating it duplicates config; `forFeature` is one feature’s slice. Day 5 stays unchecked. |
| 2026-11-07 | 5 | Doubt | Retaught | Explained `providers` constructs `UserService`, `exports` shares it, `forRoot` once on `AppModule`, `isGlobal` is separate, `forFeature` is one feature slice, repeating `forRoot` duplicates config. Waiting for their own restatement. |
| 2026-11-07 | 5 | Quiz | Oral recited | Restatement included every required point and named `UserModule`, `OrdersModule`, and `AppModule`, but it follows the reteach paragraph. Not a pass. Own-words answer still required. Day 5 stays unchecked. |
| 2026-11-07 | 5 | Quiz | Oral recited again | Second write-up still follows the reteach: `providers`/`exports` on `UserModule`, `forRoot` once on `AppModule`, `isGlobal` separate, `forFeature` as a TypeORM repository. Content is complete. Wording is the same article. Not a pass. Day 5 stays unchecked. |
| 2026-11-07 | 5 | Quiz | Day 5 checked | Own-words oral: Nest creates `UserService` in `UserModule`; `OrdersModule` needs the export plus the import or `OrdersService` cannot use it; `forRoot` is the app setup on the main module and repeating it sets the same config up again; `isGlobal` is separate; `forFeature` registers one feature’s repository. `PORT=3001` already proved config. Day 6 not started. |

---

## Parked questions

Tutors append a row when they use Park mode. Teach the row only when its day is active, then check **Cleared**.

| Asked on day | Question | Belongs on | Cleared |
| --- | --- | --- | --- |
| 3 | Put the auth guard in a common folder so every module can use it | Day 9 — global guard | |
