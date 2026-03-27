# Configuration

Customize SumoData Toolbox to match your workflow and preferences.

## Quick Configuration

### Via Settings UI

1. Open VS Code Settings (`Ctrl+,` or `Cmd+,`)
2. Search for **"SumoData"**
3. Adjust settings as needed

### Via settings.json

Edit `.vscode/settings.json` directly:

```json
{
  "sumodata.baseUrl": "https://ai.sumopod.com",
  "sumodata.timeout": 30,
  "sumodata.model": "claude-haiku-4-5",
  "sumodata.enableContextMenu": true,
  "sumodata.maxCodeLength": 10000
}
```

---

## Available Settings

### sumodata.baseUrl

**Type:** `string`  
**Default:** `"https://ai.sumopod.com"`

API endpoint for sumopod.com service.

```json
{
  "sumodata.baseUrl": "https://ai.sumopod.com"
}
```

**When to change:**
- Using custom API endpoint
- Testing with local server
- Enterprise deployment

---

### sumodata.timeout

**Type:** `number`  
**Default:** `30`

Request timeout in seconds.

```json
{
  "sumodata.timeout": 60
}
```

**Recommended values:**
- `15-20s` - Fast models, simple tasks
- `30s` - Default, balanced
- `60s+` - Complex tasks, slow connection

---

### sumodata.model

**Type:** `string`  
**Default:** `"claude-haiku-4-5"`

AI model to use for processing.

```json
{
  "sumodata.model": "gemini/gemini-2.5-pro"
}
```

**Available options:**
- `claude-haiku-4-5` - ⚡ Sumo Lightning
- `kimi-k2` - ⚡ Sumo Thunder
- `gemini/gemini-2.5-pro` - 🔥 Sumo Titan Pro
- `gemini/gemini-2.0-flash` - 💨 Sumo Flash
- `gpt-4o-mini` - ✨ Sumo Spark
- `gpt-5-mini` - 🌟 Sumo Nova

[Learn more about models →](/api/models)

---

### sumodata.enableContextMenu

**Type:** `boolean`  
**Default:** `true`

Show SumoData tools in right-click context menu.

```json
{
  "sumodata.enableContextMenu": false
}
```

**Set to `false` if:**
- Context menu is too cluttered
- Prefer sidebar-only workflow
- Using keyboard shortcuts exclusively

---

### sumodata.maxCodeLength

**Type:** `number`  
**Default:** `10000`

Maximum code snippet length in characters.

```json
{
  "sumodata.maxCodeLength": 5000
}
```

**Considerations:**
- Lower values = faster processing, lower costs
- Higher values = handle larger files
- API may have its own limits
- Truncation warning shown if exceeded

---

## Configuration Scopes

### User Settings (Global)

Apply to all VS Code workspaces:

**Location:** `~/.config/Code/User/settings.json` (Linux/Mac)  
**Location:** `%APPDATA%\Code\User\settings.json` (Windows)

```json
{
  "sumodata.model": "claude-haiku-4-5",
  "sumodata.timeout": 30
}
```

### Workspace Settings (Project)

Apply to specific project:

**Location:** `.vscode/settings.json` in project root

```json
{
  "sumodata.model": "gemini/gemini-2.5-pro",
  "sumodata.maxCodeLength": 15000
}
```

**Workspace settings override user settings.**

### Folder Settings (Multi-root)

Different settings per folder in multi-root workspace:

```
workspace.code-workspace:
{
  "folders": [
    { "path": "project-a" },
    { "path": "project-b" }
  ],
  "settings": {
    "sumodata.model": "claude-haiku-4-5"
  }
}

project-a/.vscode/settings.json:
{
  "sumodata.model": "gpt-4o-mini"
}
```

---

## API Key Management

### Setting API Key

**Via Command:**
1. Press `Ctrl+Shift+P`
2. Type "SumoData: Set API Key"
3. Enter your API key

**Via Sidebar:**
1. Click SumoData icon
2. Click "⚙️ Configure API Key"
3. Enter your API key

### Security

- API keys stored in VS Code SecretStorage
- Never committed to version control
- Encrypted at rest
- Only sent to configured API endpoint

### Updating API Key

Simply set a new key using the same method. Old key is automatically replaced.

### Removing API Key

Currently no UI for removal. To reset:
1. Uninstall extension
2. Reinstall extension
3. Configure new API key

---

## Project-Specific Configuration

### Example: Data Engineering Project

```json
{
  "sumodata.model": "claude-haiku-4-5",
  "sumodata.maxCodeLength": 8000,
  "sumodata.timeout": 45,
  "sumodata.enableContextMenu": true
}
```

**Rationale:**
- Fast model for quick SQL optimization
- Moderate code length for typical queries
- Longer timeout for complex operations

### Example: ML Research Project

```json
{
  "sumodata.model": "gemini/gemini-2.5-pro",
  "sumodata.maxCodeLength": 15000,
  "sumodata.timeout": 90,
  "sumodata.enableContextMenu": true
}
```

**Rationale:**
- Powerful model for complex ML code
- Large code length for training loops
- Extended timeout for detailed generation

### Example: Team Collaboration

```json
{
  "sumodata.model": "gpt-4o-mini",
  "sumodata.maxCodeLength": 10000,
  "sumodata.timeout": 30,
  "sumodata.enableContextMenu": true
}
```

**Rationale:**
- Balanced model for diverse tasks
- Standard limits for consistency
- Context menu enabled for accessibility

---

## Environment-Specific Settings

### Development

```json
{
  "sumodata.model": "claude-haiku-4-5",
  "sumodata.timeout": 20
}
```

Fast iterations, quick feedback.

### Production

```json
{
  "sumodata.model": "gemini/gemini-2.5-pro",
  "sumodata.timeout": 60
}
```

Quality over speed, thorough results.

### Testing

```json
{
  "sumodata.baseUrl": "http://localhost:8000",
  "sumodata.timeout": 120
}
```

Local testing, extended timeouts.

---

## Troubleshooting Configuration

### Settings Not Applied

**Check:**
1. Settings syntax is valid JSON
2. Workspace settings override user settings
3. Reload VS Code after changes
4. Check for typos in setting names

### API Key Issues

**Solutions:**
1. Verify key is correct (starts with `sk-`)
2. Check key hasn't expired
3. Ensure key has proper permissions
4. Try re-entering the key

### Performance Issues

**Optimize:**
1. Reduce `maxCodeLength` for faster processing
2. Decrease `timeout` to fail faster
3. Use faster model for simple tasks
4. Check network connection

---

## Best Practices

### 1. Version Control

**Commit to repo:**
- `.vscode/settings.json` (workspace settings)
- Team-agreed configurations

**Never commit:**
- API keys
- Personal preferences
- Sensitive URLs

### 2. Team Standards

Create shared configuration:

```json
// .vscode/settings.json (committed)
{
  "sumodata.model": "claude-haiku-4-5",
  "sumodata.maxCodeLength": 10000,
  "sumodata.enableContextMenu": true
}
```

### 3. Documentation

Document project-specific settings:

```markdown
# SumoData Configuration

We use Sumo Lightning for fast iterations.
Timeout set to 45s for complex SQL queries.
```

### 4. Regular Review

Periodically review and update:
- Model selection based on new releases
- Timeout based on actual usage
- Code length limits based on typical files

---

## Advanced Configuration

### Custom Keybindings

Add keyboard shortcuts:

```json
// keybindings.json
[
  {
    "key": "ctrl+alt+o",
    "command": "sumodata.sqlOptimizer",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+alt+d",
    "command": "sumodata.generateDocstring",
    "when": "editorTextFocus && editorLangId == python"
  }
]
```

### Conditional Settings

Use VS Code's when clauses:

```json
{
  "[python]": {
    "sumodata.maxCodeLength": 15000
  },
  "[sql]": {
    "sumodata.maxCodeLength": 8000
  }
}
```

---

## Next Steps

- [Learn basic usage →](/guide/basic-usage)
- [Explore advanced tips →](/guide/advanced-tips)
- [View all models →](/api/models)
