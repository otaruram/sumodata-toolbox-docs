# Features Overview

SumoData Toolbox provides 10 powerful tools organized into 3 categories, plus a killer feature for comprehensive code quality auditing.

## 🔥 NEW: Data Quality Auditor (Killer Feature)

**Comprehensive multi-file code analysis for data professionals**

The Data Quality Auditor is a game-changing feature that automatically scans your Python and SQL files for issues that could cause production failures, performance problems, or maintainability headaches.

### What It Does

- 🔍 **Multi-File Analysis**: Select and analyze multiple files simultaneously
- ❌ **Critical Issue Detection**: Missing error handling, type safety problems, data validation gaps
- ⚡ **Performance Warnings**: Inefficient loops, memory issues, slow operations
- 💡 **Best Practice Suggestions**: Code style, documentation, maintainability improvements

### Why It's Powerful

Unlike generic linters, the Data Quality Auditor understands data engineering and ML workflows:

- Detects pandas anti-patterns (inefficient loops, memory issues)
- Identifies SQL performance problems (missing indexes, cartesian products)
- Catches data validation gaps that cause production crashes
- Provides specific, actionable fixes with line numbers

### Example Output

```markdown
## 🔍 Data Quality Audit Report

### ⚠️ Critical Issues (3 found)
- Reading CSV without error handling - Line 13
  - Impact: correctness/reliability (will crash on missing file)
  - Fix: wrap pd.read_csv in try/except, validate file existence

### ⚡ Performance Warnings (3 found)
- Inefficient Python loop (can be vectorized) - Lines 4-9
  - Impact: medium for large lists
  - Fix: use list comprehension or numpy vectorization

### 💡 Best Practice Suggestions (6 found)
- Add type hints and docstrings - Lines 1-2
  - Recommendation: annotate parameters/returns

### ✅ Summary
- Total issues: 12 (3 Critical, 3 Performance, 6 Best Practice)
- Estimated performance impact: Medium-High
- Recommended priority: High
```

### Use Cases

1. **Pre-Commit Reviews**: Catch issues before they reach production
2. **Legacy Code Cleanup**: Identify technical debt in old codebases
3. **Team Onboarding**: Help new members understand quality standards
4. **Performance Optimization**: Find bottlenecks across multiple files
5. **Production Readiness**: Ensure code meets reliability standards

### How to Use

1. Enable "📁 Multi-File Mode" in the sidebar
2. Click "🔍 Run Quality Audit"
3. Select files to analyze (Python, SQL, or both)
4. Review comprehensive report with actionable fixes

---

## 🎯 Philosophy

Unlike chatty AI assistants, SumoData Toolbox follows the **Swiss Army Knife** approach:

- **One-Click Actions**: Each tool does ONE thing exceptionally well
- **Token Efficient**: Minimalist prompts that save your API quota
- **No Conversation**: Direct results without back-and-forth
- **Context-Aware**: Tools appear based on file type (.py or .sql)

---

## 📂 Sumo Pipes (Data Engineering)

Tools for building and optimizing data pipelines.

| Tool | Purpose | Input | Output |
|------|---------|-------|--------|
| **SQL Optimizer** | Improve query performance | SQL query | Optimized SQL + indexes |
| **JSON to DDL** | Generate database schema | JSON structure | CREATE TABLE statements |
| **Cron Generator** | Create schedule expressions | Plain English | Cron expression |

[Learn more about Sumo Pipes →](/features/sumo-pipes)

---

## 📊 Sumo Lens (Data Analysis)

Tools for understanding and improving data analysis code.

| Tool | Purpose | Input | Output |
|------|---------|-------|--------|
| **Explain Regex** | Decode regex patterns | Regex pattern | Plain English explanation |
| **Pandas Cleaner** | Improve data cleaning | Pandas code | Optimized cleaning logic |
| **SQL Explainer** | Understand queries | SQL query | Step-by-step explanation |

[Learn more about Sumo Lens →](/features/sumo-lens)

---

## 🤖 Sumo Core (Data Science/ML)

Tools for ML development and code quality.

| Tool | Purpose | Input | Output |
|------|---------|-------|--------|
| **Generate Docstrings** | Add documentation | Python function | Google-style docstring |
| **Type Hinting** | Add type safety | Python code | Code with type hints |
| **ML Boilerplate** | Training loop template | Description | Complete training code |

[Learn more about Sumo Core →](/features/sumo-core)

---

## 🚀 Quick Comparison

### By Speed
1. 💨 SQL Optimizer (< 2s)
2. ⚡ Cron Generator (< 2s)
3. 📝 Generate Docstrings (< 3s)
4. 🔍 Explain Regex (< 3s)
5. 🧹 Pandas Cleaner (< 5s)

### By Complexity
1. 🟢 **Simple**: Cron Generator, Explain Regex
2. 🟡 **Medium**: SQL Optimizer, Docstrings, Type Hints
3. 🔴 **Complex**: ML Boilerplate, Pandas Cleaner, JSON to DDL

### By Use Frequency
1. 🔥 SQL Optimizer
2. 🔥 Generate Docstrings
3. 🔥 Pandas Cleaner
4. ⭐ Type Hinting
5. ⭐ SQL Explainer

---

## 💡 Usage Patterns

### For Daily Work
- SQL Optimizer before committing queries
- Generate Docstrings during code review
- Explain Regex when reviewing validation logic

### For New Projects
- JSON to DDL for schema design
- ML Boilerplate for training setup
- Type Hinting for better code quality

### For Learning
- SQL Explainer to understand complex queries
- Explain Regex to learn pattern matching
- Pandas Cleaner to learn best practices

---

## 🎨 How It Works

```mermaid
graph LR
    A[Select Code] --> B[Choose Tool]
    B --> C[AI Processing]
    C --> D[Results in New Tab]
    D --> E[Copy or Insert]
```

1. **Select** code in your editor
2. **Choose** tool from sidebar or context menu
3. **Wait** for AI processing (2-10 seconds)
4. **Review** results in new editor tab
5. **Apply** by copying or inserting at cursor

---

## 🔧 Customization

All tools respect your configuration:

- **Model Selection**: Choose speed vs quality
- **Max Code Length**: Limit input size
- **Timeout**: Adjust for slow connections
- **Context Menu**: Enable/disable right-click access

[Configure settings →](/guide/configuration)

---

## 📊 Feature Matrix

| Feature | Pipes | Lens | Core |
|---------|-------|------|------|
| SQL Support | ✅ | ✅ | ❌ |
| Python Support | ❌ | ✅ | ✅ |
| Code Generation | ✅ | ✅ | ✅ |
| Code Explanation | ❌ | ✅ | ❌ |
| Optimization | ✅ | ✅ | ❌ |
| Documentation | ❌ | ❌ | ✅ |

---

## 🎯 Next Steps

- [Get started with installation →](/guide/installation)
- [Learn basic usage →](/guide/basic-usage)
- [View advanced tips →](/guide/advanced-tips)
