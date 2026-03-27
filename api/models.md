# AI Models

SumoData Toolbox supports multiple AI models from sumopod.com. Choose the right model for your needs.

## Available Models

### ⚡ Sumo Lightning
**Model ID:** `claude-haiku-4-5`

- **Best for:** Fast, everyday tasks
- **Speed:** ⚡⚡⚡⚡⚡
- **Capability:** ⭐⭐⭐
- **Cost:** 💰

Perfect for quick optimizations, simple explanations, and rapid iterations.

**Use cases:**
- SQL optimization
- Regex explanations
- Quick docstring generation

---

### ⚡ Sumo Thunder
**Model ID:** `kimi-k2`

- **Best for:** Complex reasoning tasks
- **Speed:** ⚡⚡⚡⚡
- **Capability:** ⭐⭐⭐⭐
- **Cost:** 💰💰

Great for tasks requiring deeper analysis and understanding.

**Use cases:**
- Complex SQL query explanations
- Advanced pandas optimization
- Detailed code analysis

---

### 🔥 Sumo Titan Pro
**Model ID:** `gemini/gemini-2.5-pro`

- **Best for:** Maximum capability tasks
- **Speed:** ⚡⚡⚡
- **Capability:** ⭐⭐⭐⭐⭐
- **Cost:** 💰💰💰

The most powerful option for complex, multi-step tasks.

**Use cases:**
- Complex ML training loops
- Advanced schema design
- Comprehensive code refactoring

---

### 💨 Sumo Flash
**Model ID:** `gemini/gemini-2.0-flash`

- **Best for:** Ultra-fast responses
- **Speed:** ⚡⚡⚡⚡⚡
- **Capability:** ⭐⭐⭐
- **Cost:** 💰

Blazing fast for simple, straightforward tasks.

**Use cases:**
- Type hint generation
- Simple SQL queries
- Cron expression generation

---

### ✨ Sumo Spark
**Model ID:** `gpt-4o-mini`

- **Best for:** Balanced performance
- **Speed:** ⚡⚡⚡⚡
- **Capability:** ⭐⭐⭐⭐
- **Cost:** 💰💰

Well-rounded model for most tasks.

**Use cases:**
- General purpose tasks
- Mixed workloads
- Team collaboration

---

### 🌟 Sumo Nova
**Model ID:** `gpt-5-mini`

- **Best for:** Next-generation features
- **Speed:** ⚡⚡⚡⚡
- **Capability:** ⭐⭐⭐⭐
- **Cost:** 💰💰

Latest model with cutting-edge capabilities.

**Use cases:**
- Experimental features
- Advanced reasoning
- Future-proof workflows

---

## Changing Models

### Via Settings

1. Open VS Code Settings (`Ctrl+,`)
2. Search for "SumoData"
3. Find "Model" setting
4. Select from dropdown

### Via Sidebar

1. Click SumoData icon in sidebar
2. Use the "AI Model" dropdown
3. Select your preferred model

### Via Configuration File

Edit `.vscode/settings.json`:

```json
{
  "sumodata.model": "claude-haiku-4-5"
}
```

---

## Model Selection Guide

### For Speed
1. 💨 Sumo Flash
2. ⚡ Sumo Lightning
3. ✨ Sumo Spark

### For Quality
1. 🔥 Sumo Titan Pro
2. ⚡ Sumo Thunder
3. 🌟 Sumo Nova

### For Cost Efficiency
1. ⚡ Sumo Lightning
2. 💨 Sumo Flash
3. ✨ Sumo Spark

### For Complex Tasks
1. 🔥 Sumo Titan Pro
2. 🌟 Sumo Nova
3. ⚡ Sumo Thunder

---

## Performance Tips

- **Start with Lightning**: Good for 80% of tasks
- **Upgrade when needed**: Switch to Titan Pro for complex work
- **Batch similar tasks**: Use same model for consistency
- **Monitor usage**: Check your API quota regularly

---

## Model Comparison

| Feature | Lightning | Thunder | Titan Pro | Flash | Spark | Nova |
|---------|-----------|---------|-----------|-------|-------|------|
| Speed | ⚡⚡⚡⚡⚡ | ⚡⚡⚡⚡ | ⚡⚡⚡ | ⚡⚡⚡⚡⚡ | ⚡⚡⚡⚡ | ⚡⚡⚡⚡ |
| Quality | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Cost | 💰 | 💰💰 | 💰💰💰 | 💰 | 💰💰 | 💰💰 |
| Best Use | Quick tasks | Analysis | Complex | Ultra-fast | Balanced | Advanced |
