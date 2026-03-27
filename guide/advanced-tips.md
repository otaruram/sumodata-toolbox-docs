# Advanced Tips

Master SumoData Toolbox with these advanced techniques and workflows.

## Power User Workflows

### Chaining Tools

Combine multiple tools for complex tasks:

```python
# Step 1: Generate boilerplate with ML Boilerplate
# Step 2: Add docstrings with Generate Docstring
# Step 3: Add type hints with Type Hinting
# Result: Production-ready, well-documented code
```

### Batch Processing

Process multiple files efficiently:

1. Open first file, select code, run tool
2. While AI processes, open next file
3. Review first result, apply changes
4. Repeat for remaining files

### Template Creation

Save frequently used results as templates:

1. Generate code with SumoData
2. Save result as snippet or template
3. Customize for specific use cases
4. Reuse across projects

---

## Model Strategy

### Cost Optimization

Minimize API costs with smart model selection:

**Free/Cheap Tasks:**
- Use ⚡ Lightning for SQL optimization
- Use 💨 Flash for cron expressions
- Use ✨ Spark for docstrings

**Worth the Cost:**
- Use 🔥 Titan Pro for ML boilerplate
- Use ⚡ Thunder for complex explanations
- Use 🌟 Nova for cutting-edge features

### Quality vs Speed

Balance based on your needs:

| Scenario | Recommended Model | Why |
|----------|------------------|-----|
| Prototyping | Lightning/Flash | Speed matters |
| Production code | Titan Pro/Thunder | Quality matters |
| Learning | Spark/Nova | Balance both |
| Code review | Lightning | Quick feedback |

---

## Integration with VS Code

### Workspace Settings

Create project-specific settings:

```json
// .vscode/settings.json
{
  "sumodata.model": "claude-haiku-4-5",
  "sumodata.maxCodeLength": 5000,
  "sumodata.timeout": 60
}
```

### Multi-Root Workspaces

Different settings per project:

```
workspace/
├── project-a/
│   └── .vscode/settings.json  (uses Lightning)
├── project-b/
│   └── .vscode/settings.json  (uses Titan Pro)
```

### Tasks Integration

Automate with VS Code tasks:

```json
// .vscode/tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Optimize All SQL",
      "type": "shell",
      "command": "echo 'Run SQL Optimizer on all .sql files'"
    }
  ]
}
```

---

## Advanced Techniques

### Context Enhancement

Improve results by adding context:

**Before:**
```python
def process(data):
    return data * 2
```

**Better (with context):**
```python
# This function processes sales data by doubling revenue
# Input: list of revenue numbers
# Output: doubled revenue for forecasting
def process(data):
    return data * 2
```

### Incremental Refinement

Refine results iteratively:

1. Generate initial code
2. Review and identify issues
3. Add comments with requirements
4. Run tool again on updated code
5. Repeat until satisfied

### Combining with Other Extensions

Integrate with your existing tools:

- **Prettier/Black**: Format after inserting code
- **ESLint/Pylint**: Validate generated code
- **GitLens**: Track AI-generated changes
- **Code Spell Checker**: Verify documentation

---

## Team Collaboration

### Shared Configuration

Create team standards:

```json
// .vscode/settings.json (committed to repo)
{
  "sumodata.model": "claude-haiku-4-5",
  "sumodata.enableContextMenu": true,
  "sumodata.maxCodeLength": 8000
}
```

### Code Review Guidelines

Establish team practices:

1. **Mark AI-generated code** with comments
2. **Review before committing** to version control
3. **Test thoroughly** especially for critical code
4. **Document changes** in commit messages

### Knowledge Sharing

Share successful patterns:

- Create internal wiki with examples
- Share useful prompts/contexts
- Document model selection strategies
- Build team-specific templates

---

## Performance Optimization

### Reduce Latency

Speed up tool execution:

1. **Use faster models** for simple tasks
2. **Select smaller code blocks** when possible
3. **Increase timeout** for complex operations
4. **Check network connection** quality

### Manage API Quota

Avoid hitting rate limits:

1. **Monitor usage** in sumopod.com dashboard
2. **Use appropriate models** for each task
3. **Batch similar tasks** together
4. **Cache common results** as snippets

---

## Debugging Generated Code

### Validation Checklist

Before using generated code:

- [ ] Syntax is correct
- [ ] Logic matches requirements
- [ ] Edge cases are handled
- [ ] Performance is acceptable
- [ ] Security is not compromised
- [ ] Tests pass

### Common Issues

**Issue: Generated code doesn't run**
- Check for missing imports
- Verify variable names match
- Ensure proper indentation

**Issue: Logic is incorrect**
- Provide more context in original code
- Try a more powerful model
- Add comments explaining requirements

**Issue: Style doesn't match project**
- Run formatter after insertion
- Adjust manually for consistency
- Create style guide in comments

---

## Advanced Use Cases

### Data Pipeline Automation

```python
# 1. Generate SQL with JSON to DDL
# 2. Optimize with SQL Optimizer
# 3. Add Python wrapper with ML Boilerplate
# 4. Document with Generate Docstring
# Result: Complete ETL pipeline
```

### ML Experiment Tracking

```python
# 1. Generate training loop with ML Boilerplate
# 2. Add type hints for better IDE support
# 3. Document with Google-style docstrings
# 4. Integrate with MLflow/Weights & Biases
```

### Legacy Code Modernization

```python
# 1. Understand with SQL/Code Explainer
# 2. Add type hints to old code
# 3. Generate docstrings
# 4. Optimize with appropriate tools
```

---

## Customization

### Environment Variables

Set defaults via environment:

```bash
# .env or shell profile
export SUMODATA_MODEL="claude-haiku-4-5"
export SUMODATA_TIMEOUT="60"
```

### Extension Settings

Fine-tune behavior:

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

## Troubleshooting Advanced Issues

### Performance Problems

**Slow responses:**
- Switch to faster model
- Reduce code selection size
- Check network latency
- Verify API endpoint status

**High API costs:**
- Use cheaper models for simple tasks
- Reduce unnecessary tool usage
- Cache common results
- Monitor quota usage

### Quality Issues

**Inconsistent results:**
- Use same model for similar tasks
- Provide consistent context
- Add detailed comments
- Try more powerful model

**Incorrect output:**
- Verify input code is correct
- Add more context/comments
- Try different model
- Report issue on GitHub

---

## Next Steps

- [View all features →](/features/overview)
- [Check troubleshooting guide →](/guide/troubleshooting)
- [Explore API reference →](/api/configuration)
