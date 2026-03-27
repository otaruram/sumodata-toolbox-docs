# Troubleshooting

Common issues and solutions for SumoData Toolbox.

## Installation Issues

### Extension Not Appearing

**Symptoms:**
- SumoData icon not in sidebar
- Commands not in command palette

**Solutions:**
1. Reload VS Code (`Ctrl+Shift+P` → "Reload Window")
2. Check Extensions panel for installation status
3. Verify VS Code version (need 1.80.0+)
4. Try reinstalling the extension

### Installation Failed

**Symptoms:**
- Error during installation
- Extension shows as "Failed to install"

**Solutions:**
1. Check internet connection
2. Clear VS Code extension cache
3. Install from VSIX file manually
4. Check VS Code logs for details

---

## API Key Issues

### "Invalid API Key"

**Symptoms:**
- ⚠️ Invalid API Key in sidebar
- Error message when using tools

**Solutions:**
1. Verify key format (should start with `sk-`)
2. Check for extra spaces when pasting
3. Get new key from sumopod.com
4. Re-enter key via "⚙️ Configure API Key"

**Verify your key:**
```bash
# Key should look like:
sk-EHhzGdATSQS5iR7CG-Avwg
```

### "API Key not configured"

**Symptoms:**
- Prompt to set API key
- Tools don't work

**Solutions:**
1. Click "Set API Key" in error message
2. Or use sidebar "⚙️ Configure API Key"
3. Enter valid API key from sumopod.com

---

## Connection Issues

### "Cannot connect to ai.sumopod.com"

**Symptoms:**
- 🔴 Disconnected status
- Network error messages

**Solutions:**
1. **Check internet connection**
   ```bash
   ping ai.sumopod.com
   ```

2. **Verify firewall settings**
   - Allow VS Code through firewall
   - Check corporate proxy settings

3. **Check API endpoint**
   - Verify `sumodata.baseUrl` in settings
   - Default: `https://ai.sumopod.com`

4. **Try different network**
   - Switch to different WiFi
   - Try mobile hotspot
   - Check VPN settings

### Request Timeout

**Symptoms:**
- "Request timeout" error
- Long wait times

**Solutions:**
1. **Increase timeout**
   ```json
   {
     "sumodata.timeout": 60
   }
   ```

2. **Use faster model**
   - Switch to ⚡ Lightning or 💨 Flash

3. **Reduce code size**
   - Select smaller code blocks
   - Lower `maxCodeLength` setting

4. **Check network speed**
   - Test internet speed
   - Close bandwidth-heavy apps

---

## Usage Issues

### "No active editor"

**Symptoms:**
- Error when clicking tool button
- "Please open a file" message

**Solutions:**
1. Open a file in editor
2. Make sure file is focused (click in editor)
3. Don't use tools from Welcome screen

### "Please select code"

**Symptoms:**
- Error when no code selected
- Prompt to select code

**Solutions:**
1. **Select code** before using tool
2. Or choose **"Use entire document"** when prompted
3. Make sure selection is visible (highlighted)

### Context Menu Not Showing

**Symptoms:**
- Right-click doesn't show "🛡 SumoData"
- Context menu missing

**Solutions:**
1. **Check file type**
   - Only works for `.py` and `.sql` files
   - Won't show for `.txt`, `.md`, etc.

2. **Check settings**
   ```json
   {
     "sumodata.enableContextMenu": true
   }
   ```

3. **Reload window**
   - `Ctrl+Shift+P` → "Reload Window"

---

## Result Issues

### Poor Quality Results

**Symptoms:**
- Generated code doesn't work
- Results don't match expectations
- Logic is incorrect

**Solutions:**
1. **Try more powerful model**
   - Switch to 🔥 Titan Pro or ⚡ Thunder

2. **Provide more context**
   ```python
   # Add comments explaining what you need
   # Input: list of user IDs
   # Output: filtered active users only
   def filter_users(users):
       pass
   ```

3. **Select complete code blocks**
   - Include function signatures
   - Include relevant imports
   - Avoid partial statements

4. **Check input code**
   - Ensure original code is correct
   - Fix syntax errors first

### Results Not Inserting

**Symptoms:**
- "Insert at Cursor" doesn't work
- Nothing happens when clicking button

**Solutions:**
1. Make sure original editor is still open
2. Click in editor to focus it
3. Try "Copy to Clipboard" instead
4. Manually copy and paste

### Syntax Errors in Results

**Symptoms:**
- Generated code has syntax errors
- Code doesn't run

**Solutions:**
1. **Review before using**
   - Always check generated code
   - Test in isolated environment

2. **Report patterns**
   - Note what causes errors
   - Try different model
   - Adjust input code

3. **Manual fixes**
   - Fix minor syntax issues
   - Adjust to your code style

---

## Performance Issues

### Slow Response Times

**Symptoms:**
- Tools take too long
- Frequent timeouts

**Solutions:**
1. **Use faster models**
   | Model | Speed |
   |-------|-------|
   | 💨 Flash | Fastest |
   | ⚡ Lightning | Very Fast |
   | ✨ Spark | Fast |
   | ⚡ Thunder | Medium |
   | 🔥 Titan Pro | Slower |

2. **Reduce code size**
   ```json
   {
     "sumodata.maxCodeLength": 5000
   }
   ```

3. **Check network**
   - Test connection speed
   - Close other apps
   - Try different time of day

### High API Costs

**Symptoms:**
- Unexpected API charges
- Quota exceeded quickly

**Solutions:**
1. **Use cheaper models**
   - ⚡ Lightning for simple tasks
   - 💨 Flash for quick operations

2. **Optimize usage**
   - Don't process entire files
   - Select only necessary code
   - Cache common results

3. **Monitor usage**
   - Check sumopod.com dashboard
   - Set up usage alerts
   - Review monthly costs

---

## Error Messages

### "Rate limit exceeded"

**Meaning:** Too many requests in short time

**Solutions:**
1. Wait a few minutes
2. Reduce request frequency
3. Upgrade API plan if needed
4. Batch similar tasks together

### "Server error"

**Meaning:** API endpoint having issues

**Solutions:**
1. Wait and retry
2. Check sumopod.com status page
3. Try different model
4. Report if persistent

### "Code too long"

**Meaning:** Selected code exceeds limit

**Solutions:**
1. Select smaller code block
2. Increase `maxCodeLength` (if API allows)
3. Split into multiple requests
4. Process in chunks

---

## Debugging Steps

### 1. Check Extension Output

View detailed logs:
1. Open Output panel (`Ctrl+Shift+U`)
2. Select "SumoData Toolbox" from dropdown
3. Look for error messages

### 2. Check VS Code Developer Tools

For advanced debugging:
1. `Help` → `Toggle Developer Tools`
2. Check Console tab for errors
3. Look for network errors

### 3. Verify Configuration

Check all settings:
```json
{
  "sumodata.baseUrl": "https://ai.sumopod.com",
  "sumodata.timeout": 30,
  "sumodata.model": "claude-haiku-4-5",
  "sumodata.enableContextMenu": true,
  "sumodata.maxCodeLength": 10000
}
```

### 4. Test with Minimal Example

Try simplest possible case:
```python
# test.py
def add(a, b):
    return a + b
```

Select and run "Generate Docstring"

---

## Getting Help

### Before Reporting Issues

1. Check this troubleshooting guide
2. Search existing GitHub issues
3. Try with default settings
4. Test with minimal example

### Reporting Bugs

Include:
- VS Code version
- Extension version
- Operating system
- Steps to reproduce
- Error messages
- Screenshots if relevant

**GitHub Issues:** [github.com/yourusername/sumodata-toolbox/issues](https://github.com/yourusername/sumodata-toolbox/issues)

### Community Support

- GitHub Discussions
- Stack Overflow (tag: sumodata-toolbox)
- VS Code Extension Marketplace Q&A

---

## Known Issues

### Windows Path Issues

**Issue:** Paths with spaces may cause problems

**Workaround:** Use paths without spaces

### Large File Performance

**Issue:** Very large files (>50KB) may be slow

**Workaround:** Select specific sections instead

### Multi-root Workspace

**Issue:** Settings may not apply correctly

**Workaround:** Set in each workspace folder

---

## Next Steps

- [Review configuration →](/guide/configuration)
- [Learn advanced tips →](/guide/advanced-tips)
- [Check API reference →](/api/configuration)
