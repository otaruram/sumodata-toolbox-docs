# Features Overview

SumoData Toolbox provides 9 powerful tools organized into 3 categories, each designed for specific data workflows.

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
- [Explore use cases by role →](/features/use-case-de)
