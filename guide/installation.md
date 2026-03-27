# Installation

## From VS Code Marketplace (Recommended)

1. Open VS Code
2. Click Extensions icon in sidebar (`Ctrl+Shift+X`)
3. Search for **"SumoData Toolbox"**
4. Click **Install**
5. Reload VS Code if prompted

## From GitHub Releases

1. Go to [GitHub Releases](https://github.com/yourusername/sumodata-toolbox/releases)
2. Download the latest `.vsix` file
3. Open VS Code
4. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
5. Type "Extensions: Install from VSIX"
6. Select the downloaded file

## From Source (Developers)

```bash
# Clone repository
git clone https://github.com/yourusername/sumodata-toolbox.git
cd sumodata-toolbox

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Package extension
npm install -g @vscode/vsce
vsce package

# Install the generated .vsix file
code --install-extension sumodata-toolbox-0.1.0.vsix
```

## Verify Installation

1. Look for the SumoData icon in the VS Code sidebar
2. Click it to open the toolbox
3. You should see the connection status and tool categories

## Next Steps

- [Configure your API key](/guide/getting-started#step-2-configure-extension)
- [Learn basic usage](/guide/basic-usage)
- [Explore features](/features/overview)
