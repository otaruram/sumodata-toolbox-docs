# Commands API

Complete reference for all SumoData Toolbox commands.

## Command List

### Configuration Commands

#### sumodata.setApiKey

Set or update your sumopod.com API key.

**Usage:**
- Command Palette: `SumoData: Set API Key`
- Sidebar: Click "⚙️ Configure API Key"

**Parameters:** None

**Returns:** Success/error message

---

### Sumo Pipes Commands

#### sumodata.sqlOptimizer

Optimize SQL queries for better performance.

**Usage:**
- Command Palette: `SumoData: SQL Optimizer`
- Context Menu: Right-click → 🛡 SumoData → SQL Optimizer
- Sidebar: Sumo Pipes → SQL Optimizer

**Input:** Selected SQL code or entire document

**Output:** Optimized SQL with index suggestions

**Example:**
```sql
-- Input
SELECT * FROM users WHERE name LIKE '%john%'

-- Output
SELECT id, name, email FROM users 
WHERE name LIKE 'john%'
-- CREATE INDEX idx_name ON users(name);
```

---

#### sumodata.jsonToDDL

Convert JSON structure to database schema.

**Usage:**
- Command Palette: `SumoData: JSON to DDL Schema`
- Context Menu: Right-click → 🛡 SumoData → JSON to DDL Schema
- Sidebar: Sumo Pipes → JSON to DDL Schema

**Input:** JSON structure

**Output:** CREATE TABLE statements

**Example:**
```json
// Input
{"name": "John", "age": 30}

// Output
CREATE TABLE users (
  name VARCHAR(255),
  age INT
);
```

---

#### sumodata.cronGenerator

Generate cron expressions from descriptions.

**Usage:**
- Command Palette: `SumoData: Cron Expression Generator`
- Context Menu: Right-click → 🛡 SumoData → Cron Expression Generator
- Sidebar: Sumo Pipes → Cron Expression Generator

**Input:** Plain English description

**Output:** Cron expression with explanation

**Example:**
```
// Input
Run every day at 3 AM

// Output
0 3 * * *  # Every day at 3:00 AM
```

---

### Sumo Lens Commands

#### sumodata.explainRegex

Explain regex patterns in plain English.

**Usage:**
- Command Palette: `SumoData: Explain Complex Regex`
- Context Menu: Right-click → 🛡 SumoData → Explain Complex Regex
- Sidebar: Sumo Lens → Explain Complex Regex

**Input:** Regex pattern

**Output:** Plain English explanation

---

#### sumodata.pandasCleaner

Suggest improvements for pandas data cleaning code.

**Usage:**
- Command Palette: `SumoData: Pandas Cleaning Logic Suggester`
- Context Menu: Right-click → 🛡 SumoData → Pandas Cleaning Logic Suggester
- Sidebar: Sumo Lens → Pandas Cleaning Logic Suggester

**Input:** Pandas code

**Output:** Improved cleaning logic

---

#### sumodata.sqlExplainer

Explain SQL query logic in plain English.

**Usage:**
- Command Palette: `SumoData: SQL Logic Explainer`
- Context Menu: Right-click → 🛡 SumoData → SQL Logic Explainer
- Sidebar: Sumo Lens → SQL Logic Explainer

**Input:** SQL query

**Output:** Step-by-step explanation

---

### Sumo Core Commands

#### sumodata.generateDocstring

Generate Google-style docstrings for Python functions.

**Usage:**
- Command Palette: `SumoData: Auto-generate Google-style Docstrings`
- Context Menu: Right-click → 🛡 SumoData → Auto-generate Google-style Docstrings
- Sidebar: Sumo Core → Auto-generate Google-style Docstrings

**Input:** Python function

**Output:** Function with docstring

---

#### sumodata.addTypeHints

Add type hints to Python code.

**Usage:**
- Command Palette: `SumoData: Type Hinting for Python`
- Context Menu: Right-click → 🛡 SumoData → Type Hinting for Python
- Sidebar: Sumo Core → Type Hinting for Python

**Input:** Python code

**Output:** Code with type annotations

---

#### sumodata.mlBoilerplate

Generate ML training loop boilerplate.

**Usage:**
- Command Palette: `SumoData: PyTorch/Scikit-learn Training Loop Boilerplate`
- Context Menu: Right-click → 🛡 SumoData → PyTorch/Scikit-learn Training Loop
- Sidebar: Sumo Core → PyTorch/Scikit-learn Training Loop

**Input:** Description or partial code

**Output:** Complete training loop

---

## Command Behavior

### Selection Handling

**With selection:**
- Processes selected code only
- Respects `maxCodeLength` setting
- Truncates if too long

**Without selection:**
- Prompts to use entire document
- User can accept or cancel
- Useful for small files

### Error Handling

All commands handle errors gracefully:

- **No API key**: Prompts to configure
- **No active editor**: Shows error message
- **Network error**: Shows connection error
- **Timeout**: Shows timeout message
- **API error**: Shows specific error

### Result Display

Results open in new editor tab:

- **Language detection**: Auto-detects output language
- **Syntax highlighting**: Applied automatically
- **Side-by-side**: Opens beside current file
- **Unsaved**: Review before saving

### Action Buttons

After completion, shows buttons:

- **Copy to Clipboard**: Copy entire result
- **Insert at Cursor**: Insert at current position

---

## Keyboard Shortcuts

No default shortcuts. Create custom ones:

```json
// keybindings.json
[
  {
    "key": "ctrl+alt+o",
    "command": "sumodata.sqlOptimizer"
  },
  {
    "key": "ctrl+alt+d",
    "command": "sumodata.generateDocstring",
    "when": "editorLangId == python"
  }
]
```

---

## Command Context

### When Commands Are Available

**Always available:**
- `sumodata.setApiKey`

**Requires active editor:**
- All tool commands

**File type specific:**
- SQL tools: `.sql` files (context menu)
- Python tools: `.py` files (context menu)
- All tools: Any file (command palette, sidebar)

---

## Programmatic Usage

Commands can be triggered programmatically:

```javascript
// Execute command
vscode.commands.executeCommand('sumodata.sqlOptimizer');

// With context
vscode.commands.executeCommand('sumodata.generateDocstring');
```

---

## Next Steps

- [View configuration options →](/api/configuration)
- [Compare models →](/api/models)
- [Learn basic usage →](/guide/basic-usage)
