# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Projects

- `GET /api/projects`
  - Projects index/search
  - accepts `tag_name` query param to list projects by tag
- `POST /api/projects`
- `GET /api/projects/:id`
- `PATCH /api/projects/:id`
- `DELETE /api/projects/:id`

### Tags

- A projects's tags will be included in the note show template
- `GET /api/tags`
- `POST /api/project/:project_id/tags`: add tag to project by name
  - if note doesn't already exist, it will be created
- `DELETE /api/project/:project_id/tags/:tag_name`: remove tag from note by
  name
