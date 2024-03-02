# rootdata

A package to use node-fetch to access the Rootdata API

- [x] 1. Search
- [x] 2. Project Query
- [ ] 3. Organization Query
- [ ] 4. Query Investors (Plus, Pro)
- [ ] 5. Query Investment and Financing (Plus, Pro)
- [ ] 6. Synchronous Updates (Pro)

## Installation

```bash
npm install rootdata
```

## Usage

```typescript
import { search } from "rootdata";

const projects = await search("rootdata");

const result = await projectQuery({ project_id: 1391 });
```

## License

MIT
