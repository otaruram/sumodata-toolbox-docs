# Getting Started

Get up and running with SumoData Toolbox in under 5 minutes.

## Prerequisites

- VS Code 1.80.0 or higher
- Active sumopod.com account
- API key from sumopod.com

## Installation

### From VS Code Marketplace

1. Open VS Code
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
3. Search for "SumoData Toolbox"
4. Click **Install**

### From VSIX File

1. Download the `.vsix` file from releases
2. Open VS Code
3. Press `Ctrl+Shift+P` and type "Install from VSIX"
4. Select the downloaded file

## Configuration

### Step 1: Get Your API Key

1. Visit [sumopod.com](https://sumopod.com)
2. Sign up or log in
3. Navigate to API settings
4. Copy your API key (starts with `sk-`)

### Step 2: Configure Extension

1. Click the SumoData icon in the VS Code sidebar
2. Click "⚙️ Configure API Key"
3. Paste your API key
4. Press Enter

::: tip
Your API key is stored securely using VS Code's SecretStorage. It never leaves your machine except when making API calls.
:::

## First Use

Let's optimize a SQL query as your first task!

### 1. Create a test file

Create a new file `test.sql`:

```sql
SELECT * FROM users WHERE name LIKE '%john%'
```

### 2. Select the code

Highlight the entire SQL query.

### 3. Use the tool

**Method A: Sidebar**
- Click SumoData icon in sidebar
- Expand "📂 Sumo Pipes"
- Click "SQL Optimizer"

**Method B: Context Menu**
- Right-click on selected code
- Choose "🛡 SumoData" → "SQL Optimizer"

### 4. View results

Results open in a new tab with:
- Optimized query
- Index suggestions
- Performance tips

## What's Next?

- [Explore all features](/features/overview)
- [Learn advanced tips](/guide/advanced-tips)
- [Configure settings](/guide/configuration)

## Need Help?

- Check [Troubleshooting](/guide/troubleshooting)
- Open an issue on GitHub
- Join our community discussions
