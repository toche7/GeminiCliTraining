fix problem

1. on module C 
prompt 1.
Using @content-pack-v2.md, generate a single-file landing page HTML with embedded CSS.
Include: hero headline, subheadline, CTA button, one trust section, and one footer.
Keep it responsive and preserve the bilingual tone.
Return HTML only.

prompt 2
Save html content to landing-page-v1.html

prompt 3
Create a simple fullstack webapp-starter with an HTML form and a Node.js
  backend that saves submissions to a local CSV file.

prompt 4
Revise @landing-page-v1.html for better readability and stronger CTA hierarchy.
Keep output as single-file HTML and preserve bilingual tone.


prompt 5 
revise @landing-page-v2.html to have form that team can be apply and update
   to database where database is csv file 



======
prompt 1
Read @demodata.csv and analys for report to CEO 

prompt 2 
Create a visualization dashboard

prompt 3
i want Team Size Distribution Histogram
===

Basics:                                                                                                      │
│ Add context: Use @ to specify files for context (e.g., @src/myFile.ts) to target specific files or folders.  │
│ Shell mode: Execute shell commands via ! (e.g., !npm run start) or use natural language (e.g. start server). │
│                                                                                                              │
│ Commands:                                                                                                    │
│  /about - Show version info                                                                                  │
│  /auth - Manage authentication                                                                               │
│    signin - Sign in or change the authentication method                                                      │
│    signout - Sign out and clear all cached credentials                                                       │
│  /bug - Submit a bug report                                                                                  │
│  /chat - Browse auto-saved conversations and manage chat checkpoints                                         │
│    list - List saved manual conversation checkpoints                                                         │
│    save - Save the current conversation as a checkpoint. Usage: /resume save <tag>                           │
│    resume - Resume a conversation from a checkpoint. Usage: /resume resume <tag>                             │
│    delete - Delete a conversation checkpoint. Usage: /resume delete <tag>                                    │
│    share - Share the current conversation to a markdown or json file. Usage: /resume share <file>            │
│    debug - Export the most recent API request as a JSON payload                                              │
│  /clear - Clear the screen and conversation history                                                          │
│  /commands - Manage custom slash commands. Usage: /commands [reload]                                         │
│    reload - Reload custom command definitions from .toml files. Usage: /commands reload                      │
│  /compress - Compresses the context by replacing it with a summary                                           │
│  /copy - Copy the last result or code snippet to clipboard                                                   │
│  /docs - Open full Gemini CLI documentation in your browser                                                  │
│  /directory - Manage workspace directories                                                                   │
│    add - Add directories to the workspace. Use comma to separate multiple paths                              │
│    show - Show all directories in the workspace                                                              │
│  /editor - Set external editor preference                                                                    │
│  /extensions - Manage extensions                                                                             │
│    list - List active extensions                                                                             │
│    update - Update extensions. Usage: update <extension-names>|--all                                         │
│    explore - Open extensions page in your browser                                                            │
│    reload - Reload all extensions                                                                            │
│  /help - For help on gemini-cli                                                                              │
│  /footer - Configure which items appear in the footer (statusline)                                           │
│  /shortcuts - Toggle the shortcuts panel above the input                                                     │
│  /hooks - Manage hooks                                                                                       │
│    panel - Display all registered hooks with their status                                                    │
│    enable - Enable a hook by name                                                                            │
│    disable - Disable a hook by name                                                                          │
│    enable-all - Enable all disabled hooks                                                                    │
│    disable-all - Disable all enabled hooks                                                                   │
│  /rewind - Jump back to a specific message and restart the conversation                                      │
│  /ide - Manage IDE integration                                                                               │
│  /init - Analyzes the project and creates a tailored GEMINI.md file                                          │
│  /oncall - Oncall related commands                                                                           │
│    dedup - Triage issues labeled as status/possible-duplicate                                                │
│    audit - Triage issues labeled as status/need-triage                                                       │
│  /mcp - Manage configured Model Context Protocol (MCP) servers                                               │
│    list - List configured MCP servers and tools                                                              │
│    desc - List configured MCP servers and tools with descriptions                                            │
│    schema - List configured MCP servers and tools with descriptions and schemas                              │
│    auth - Authenticate with an OAuth-enabled MCP server                                                      │
│    reload - Reloads MCP servers                                                                              │
│    enable - Enable a disabled MCP server                                                                     │
│    disable - Disable an MCP server                                                                           │
│  /memory - Commands for interacting with memory                                                              │
│    show - Show the current memory contents                                                                   │
│    add - Add content to the memory                                                                           │
│    reload - Reload the memory from the source                                                                │
│    list - Lists the paths of the GEMINI.md files in use                                                      │
│  /model - Manage model configuration                                                                         │
│    manage - Opens a dialog to configure the model                                                            │
│    set - Set the model to use. Usage: /model set <model-name> [--persist]                                    │
│  /permissions - Manage folder trust settings and other permissions                                           │
│    trust - Manage folder trust settings. Usage: /permissions trust [<directory-path>]                        │
│  /plan - Switch to Plan Mode and view current plan                                                           │
│    copy - Copy the currently approved plan to your clipboard                                                 │
│  /policies - Manage policies                                                                                 │
│    list - List all active policies grouped by mode                                                           │
│  /privacy - Display the privacy notice                                                                       │
│  /quit - Exit the cli                                                                                        │
│  /resume - Browse auto-saved conversations and manage chat checkpoints                                       │
│    list - List saved manual conversation checkpoints                                                         │
│    save - Save the current conversation as a checkpoint. Usage: /resume save <tag>                           │
│    resume - Resume a conversation from a checkpoint. Usage: /resume resume <tag>                             │
│    delete - Delete a conversation checkpoint. Usage: /resume delete <tag>                                    │
│    share - Share the current conversation to a markdown or json file. Usage: /resume share <file>            │
│    debug - Export the most recent API request as a JSON payload                                              │
│  /stats - Check session stats. Usage: /stats [session|model|tools]                                           │
│    session - Show session-specific usage statistics                                                          │
│    model - Show model-specific usage statistics                                                              │
│    tools - Show tool-specific usage statistics                                                               │
│  /theme - Change the theme                                                                                   │
│  /tools - List available Gemini CLI tools. Use /tools desc to include descriptions.                          │
│    list - List available Gemini CLI tools.                                                                   │
│    desc - List available Gemini CLI tools with descriptions.                                                 │
│  /skills - List, enable, disable, or reload Gemini CLI agent skills. Usage: /skills [list | disable <name>   │
│ |...                                                                                                         │
│    list - List available agent skills. Usage: /skills list [nodesc] [all]                                    │
│    link - Link an agent skill from a local path. Usage: /skills link <path> [--scope user|workspace]         │
│    disable - Disable a skill by name. Usage: /skills disable <name>                                          │
│    enable - Enable a disabled skill by name. Usage: /skills enable <name>                                    │
│    reload - Reload the list of discovered skills. Usage: /skills reload                                      │
│  /settings - View and edit Gemini CLI settings                                                               │
│  /shells - Toggle background shells view                                                                     │
│  /vim - Toggle vim mode on/off                                                                               │
│  /setup-github - Set up GitHub Actions                                                                       │
│  /terminal-setup - Configure terminal keybindings for multiline input (VS Code, Cursor, Windsurf)            │
│  /upgrade - Upgrade your Gemini Code Assist tier for higher limits                                           │
│  ! - shell command                                                                                           │
│ [MCP] - Model Context Protocol command (from external servers)                                               │
│                                                                                                              │
│ Keyboard Shortcuts:                                                                                          │
│ Ctrl+Left/Ctrl+Right - Jump through words in the input                                                       │
│ Ctrl+C - Quit application                                                                                    │
│ Ctrl+Enter - New line                                                                                        │
│ Ctrl+L - Clear the screen                                                                                    │
│ Ctrl+S - Enter selection mode to copy text                                                                   │
│ Ctrl+X - Open input in external editor                                                                       │
│ Ctrl+Y - Toggle YOLO mode                                                                                    │
│ Enter - Send message                                                                                         │
│ Esc - Cancel operation / Clear input (double press)                                                          │
│ Page Up/Page Down - Scroll page up/down                                                                      │
│ Shift+Tab - Toggle auto-accepting edits                                                                      │
│ Ctrl+P/Ctrl+N - Cycle through your prompt history                                                            │
│                                                                                                              │
│ For a full list of shortcuts, see https://geminicli.com/docs/cli/keyboard-shortcuts/                         │
│                                                                                       