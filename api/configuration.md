# Configuration API

Complete reference for all SumoData Toolbox configuration options.

## Settings Reference

### sumodata.baseUrl

- **Type**: `string`
- **Default**: `"https://ai.sumopod.com"`
- **Scope**: User, Workspace

API endpoint for sumopod.com service.

**Example:**
```json
{
  "sumodata.baseUrl": "https://ai.sumopod.com"
}
```

---

### sumodata.timeout

- **Type**: `number` (seconds)
- **Default**: `30`
- **Range**: `5` - `300`
- **Scope**: User, Workspace

Maximum time to wait for API response.

**Example:**
```json
{
  "sumodata.timeout": 60
}
```

---

### sumodata.model

- **Type**: `string`
- **Default**: `"claude-haiku-4-5"`
- **Scope**: User, Workspace

AI model to use for processing.

**Valid values:**
- `claude-haiku-4-5`
- `kimi-k2`
- `gemini/gemini-2.5-pro`
- `gemini/gemini-2.0-flash`
- `gpt-4o-mini`
- `gpt-5-mini`

**Example:**
```json
{
  "sumodata.model": "gemini/gemini-2.5-pro"
}
```

[View model comparison →](/api/models)

---

### sumodata.enableContextMenu

- **Type**: `boolean`
- **Default**: `true`
- **Scope**: User, Workspace

Show SumoData tools in editor context menu.

**Example:**
```json
{
  "sumodata.enableContextMenu": false
}
```

---

### sumodata.maxCodeLength

- **Type**: `number` (characters)
- **Default**: `10000`
- **Range**: `100` - `50000`
- **Scope**: User, Workspace

Maximum code snippet length to send to API.

**Example:**
```json
{
  "sumodata.maxCodeLength": 15000
}
```

---

## Configuration Scopes

### User Settings

Global settings for all workspaces.

**Location:**
- Windows: `%APPDATA%\Code\User\settings.json`
- macOS: `~/Library/Application Support/Code/User/settings.json`
- Linux: `~/.config/Code/User/settings.json`

### Workspace Settings

Project-specific settings.

**Location:** `.vscode/settings.json` in project root

**Priority:** Workspace settings override user settings.

---

## Environment Variables

Currently not supported. Use VS Code settings instead.

---

## API Key Storage

API keys are stored securely using VS Code's SecretStorage API.

**Storage location:**
- Encrypted system keychain
- Not in settings.json
- Not in version control

**Access:**
- Only via extension commands
- Never exposed in logs
- Sent only to configured API endpoint

---

## Configuration Examples

### Minimal Configuration

```json
{
  "sumodata.model": "claude-haiku-4-5"
}
```

### Recommended Configuration

```json
{
  "sumodata.baseUrl": "https://ai.sumopod.com",
  "sumodata.timeout": 30,
  "sumodata.model": "claude-haiku-4-5",
  "sumodata.enableContextMenu": true,
  "sumodata.maxCodeLength": 10000
}
```

### Performance-Optimized

```json
{
  "sumodata.model": "gemini/gemini-2.0-flash",
  "sumodata.timeout": 15,
  "sumodata.maxCodeLength": 5000
}
```

### Quality-Optimized

```json
{
  "sumodata.model": "gemini/gemini-2.5-pro",
  "sumodata.timeout": 90,
  "sumodata.maxCodeLength": 20000
}
```

---

## Validation

Settings are validated on change:

- **baseUrl**: Must be valid HTTPS URL
- **timeout**: Must be positive number
- **model**: Must be from allowed list
- **maxCodeLength**: Must be positive number

Invalid values show warning and use defaults.

---

## Migration

### From Version 0.x to 1.x

No breaking changes. All settings compatible.

---

## Next Steps

- [View all commands →](/api/commands)
- [Compare models →](/api/models)
- [Configuration guide →](/guide/configuration)
