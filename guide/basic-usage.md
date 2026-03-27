# Basic Usage

Learn how to use SumoData Toolbox effectively in your daily workflow.

## Three Ways to Use Tools

### Method 1: Sidebar (Recommended)

The sidebar provides organized access to all tools.

1. Click the **SumoData icon** in VS Code sidebar
2. Expand the category you need:
   - 📂 Sumo Pipes (Data Engineering)
   - 📊 Sumo Lens (Data Analysis)
   - 🤖 Sumo Core (DS/ML)
3. Click the tool button

**Pros:**
- Visual organization
- See all available tools
- Quick model switching

### Method 2: Context Menu (Fastest)

Right-click on selected code for quick access.

1. Select code in your editor
2. Right-click to open context menu
3. Choose **"🛡 SumoData"**
4. Select the tool

**Pros:**
- Fastest for frequent tasks
- Context-aware (only shows relevant tools)
- No need to switch to sidebar

### Method 3: Command Palette

Use keyboard shortcuts for power users.

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
2. Type "SumoData"
3. Select the tool from the list

**Pros:**
- Keyboard-driven workflow
- No mouse needed
- Searchable tool names

---

## Working with Results

### Viewing Results

Results open in a new editor tab beside your current file.

- **Syntax highlighting** based on detected language
- **Side-by-side view** for easy comparison
- **Unsaved document** so you can review before applying

### Applying Results

After reviewing, you have three options:

#### 1. Copy to Clipboard
Click **"Copy to Clipboard"** button to copy the entire result.

```
Result ready
[Copy to Clipboard] [Insert at Cursor]
```

#### 2. Insert at Cursor
Click **"Insert at Cursor"** to add result at your current cursor position.

#### 3. Manual Selection
Select specific parts of the result and copy manually.

---

## Common Workflows

### Workflow 1: SQL Optimization

```sql
-- 1. Write your query
SELECT * FROM users WHERE name LIKE '%john%'

-- 2. Select the query
-- 3. Right-click → SumoData → SQL Optimizer
-- 4. Review optimized version
-- 5. Replace original with optimized code
```

### Workflow 2: Adding Documentation

```python
# 1. Write your function
def calculate_metrics(data, threshold):
    return [x for x in data if x > threshold]

# 2. Select the function
# 3. Sidebar → Sumo Core → Generate Docstring
# 4. Insert docstring above function
```

### Workflow 3: Understanding Legacy Code

```sql
-- 1. Find complex query you don't understand
-- 2. Select the entire query
-- 3. Right-click → SumoData → SQL Logic Explainer
-- 4. Read explanation in new tab
-- 5. Add comments to original code
```

---

## Selection Tips

### What to Select

**✅ Good Selections:**
- Complete functions or queries
- Logical code blocks
- Self-contained snippets

**❌ Avoid:**
- Partial statements
- Mixed languages
- Extremely large files (>10,000 chars)

### No Selection?

If you don't select anything, the extension will prompt:

```
No code selected. Use entire document?
[Yes] [Cancel]
```

This is useful for:
- Small files
- Single-function files
- Complete scripts

---

## Model Selection

Choose the right model for your task:

### Quick Tasks (Use Fast Models)
- ⚡ Sumo Lightning
- 💨 Sumo Flash

**Examples:**
- SQL Optimizer
- Cron Generator
- Type Hints

### Complex Tasks (Use Powerful Models)
- 🔥 Sumo Titan Pro
- ⚡ Sumo Thunder

**Examples:**
- ML Boilerplate
- Complex SQL Explainer
- Advanced Pandas Cleaning

**Change model:**
1. Open sidebar
2. Use "AI Model" dropdown
3. Select preferred model

---

## Keyboard Shortcuts

While SumoData doesn't define custom shortcuts, you can create your own:

1. Open **Keyboard Shortcuts** (`Ctrl+K Ctrl+S`)
2. Search for "SumoData"
3. Assign shortcuts to frequently used tools

**Suggested shortcuts:**
- `Ctrl+Alt+O` - SQL Optimizer
- `Ctrl+Alt+D` - Generate Docstring
- `Ctrl+Alt+T` - Type Hinting

---

## Best Practices

### 1. Review Before Applying
Always review AI-generated code before using it in production.

### 2. Start Small
Test tools on small code snippets before using on large files.

### 3. Use Appropriate Models
Fast models for simple tasks, powerful models for complex ones.

### 4. Keep Code Focused
Select only the relevant code, not entire files.

### 5. Iterate
If results aren't perfect, try:
- Different model
- Better code selection
- More context in the code

---

## Troubleshooting Common Issues

### "No active editor"
**Solution:** Open a file before using tools.

### "Please select code"
**Solution:** Select code or choose to use entire document.

### "Request timeout"
**Solution:** 
- Check internet connection
- Increase timeout in settings
- Try a faster model

### Results not as expected
**Solution:**
- Try a more powerful model
- Provide more context in code
- Select more complete code blocks

---

## Next Steps

- [Learn advanced tips →](/guide/advanced-tips)
- [Configure settings →](/guide/configuration)
- [Explore all features →](/features/overview)
