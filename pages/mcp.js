import Layout from '../components/Layout';

export default function Mcp() {
  return (
    <Layout title="MCP Server - Software Testing with AI">
      <div className="container-fluid py-5" style={{background: '#0a0a14'}}>
        <div className="container">
          <section id="mcp" className="section">
            <h2><i className="fas fa-server"></i> MCP Server</h2>
            <p className="lead">Model Context Protocol (MCP) is a bridge between AI and your system.</p>

            <h4 style={{color: '#00d4ff'}} className="mt-5">What is MCP Server?</h4>
            <p>An MCP server gives Claude access to real-world data and tools — bridging AI with your DB, API, Jira, logs, and more.</p>

            <div className="row mt-4">
              <div className="col-md-4"><div className="card"><div className="card-body"><div className="icon-box"><i className="fas fa-ticket"></i></div><h5 className="card-title text-center">Read Jira Tickets</h5><p className="card-text text-center">Access requirements and issues directly from Jira.</p></div></div></div>
              <div className="col-md-4"><div className="card"><div className="card-body"><div className="icon-box"><i className="fas fa-database"></i></div><h5 className="card-title text-center">Query Database</h5><p className="card-text text-center">Execute queries and fetch real data.</p></div></div></div>
              <div className="col-md-4"><div className="card"><div className="card-body"><div className="icon-box"><i className="fas fa-file-lines"></i></div><h5 className="card-title text-center">Analyze Logs</h5><p className="card-text text-center">Process and understand error logs.</p></div></div></div>
            </div>

            <div className="highlight-box mt-5">
              <h5><i className="fas fa-list-check"></i> View List of MCP Servers</h5>
              <div className="code-block">claude mcp list</div>
            </div>

            <div className="row mt-3">
              <div className="col-lg-6 mb-4">
                <h5 style={{color: '#00d4ff'}}><i className="fas fa-plus-circle"></i> Add Jira MCP</h5>
                <div className="code-block">claude mcp add --scope user jira-mcp node ~/jira-mcp/src/index.js</div>
              </div>
              <div className="col-lg-6 mb-4">
                <h5 style={{color: '#00d4ff'}}><i className="fas fa-plus-circle"></i> Add DB MCP</h5>
                <div className="code-block">claude mcp add --scope user db-mcp node ~/db-mcp/dist/index.js</div>
              </div>
            </div>

            <h4 style={{color: '#00d4ff'}} className="mt-5"><i className="fas fa-store"></i> MCP Marketplace — Install in One Click</h4>
            <p>Browse and install hundreds of pre-built MCP integrations from the official registry at <a href="https://mcpmarket.com/businesses/claude" target="_blank" style={{color: '#00d4ff'}}>mcpmarket.com/businesses/claude</a></p>

            <div className="row mt-4 mb-3">
              <div className="col-md-4 mb-3"><div className="card" style={{borderColor: '#00d4ff'}}><div className="card-body text-center"><div className="icon-box"><i className="fab fa-github"></i></div><h5 className="card-title" style={{color: '#00d4ff'}}>GitHub MCP</h5><p style={{fontSize: '0.85rem', color: '#a0a0b0'}}>Read repos, commits, PRs, issues</p></div></div></div>
              <div className="col-md-4 mb-3"><div className="card" style={{borderColor: '#00ff88'}}><div className="card-body text-center"><div className="icon-box" style={{background: 'linear-gradient(135deg, #00ff88, #00a855)'}}><i className="fas fa-database"></i></div><h5 className="card-title" style={{color: '#00ff88'}}>PostgreSQL MCP</h5><p style={{fontSize: '0.85rem', color: '#a0a0b0'}}>Query your PostgreSQL database</p></div></div></div>
              <div className="col-md-4 mb-3"><div className="card" style={{borderColor: '#00ff88'}}><div className="card-body text-center"><div className="icon-box" style={{background: 'linear-gradient(135deg, #00ff88, #00a855)'}}><i className="fas fa-layer-group"></i></div><h5 className="card-title" style={{color: '#00ff88'}}>Context7 MCP</h5><p style={{fontSize: '0.85rem', color: '#a0a0b0'}}>Multi-layer context retrieval and fusion</p></div></div></div>
              <div className="col-md-4 mb-3"><div className="card" style={{borderColor: '#a855f7'}}><div className="card-body text-center"><div className="icon-box" style={{background: 'linear-gradient(135deg, #a855f7, #7c3aed)'}}><i className="fas fa-magnifying-glass"></i></div><h5 className="card-title" style={{color: '#a855f7'}}>Brave Search MCP</h5><p style={{fontSize: '0.85rem', color: '#a0a0b0'}}>Search the web in real-time</p></div></div></div>
              <div className="col-md-4 mb-3"><div className="card" style={{borderColor: '#ff6b6b'}}><div className="card-body text-center"><div className="icon-box" style={{background: 'linear-gradient(135deg, #ff6b6b, #cc0000)'}}><i className="fas fa-folder-open"></i></div><h5 className="card-title" style={{color: '#ff6b6b'}}>Filesystem MCP</h5><p style={{fontSize: '0.85rem', color: '#a0a0b0'}}>Read/write controlled directories</p></div></div></div>
              <div className="col-md-4 mb-3"><div className="card" style={{borderColor: '#00d4ff'}}><div className="card-body text-center"><div className="icon-box"><i className="fas fa-slack"></i></div><h5 className="card-title" style={{color: '#00d4ff'}}>Slack MCP</h5><p style={{fontSize: '0.85rem', color: '#a0a0b0'}}>Send messages and search Slack</p></div></div></div>
            </div>

            <div className="row mt-3">
              <div className="col-lg-6">
                <div className="highlight-box">
                  <strong style={{color: '#00d4ff'}}>Method 1: Claude Desktop (GUI)</strong>
                  <ol className="mt-2 mb-0" style={{fontSize: '0.9rem'}}>
                    <li>Open Claude Desktop → <strong>Settings → Integrations</strong></li>
                    <li>Browse or search the MCP catalog</li>
                    <li>Click <strong>Install</strong> → configure credentials</li>
                    <li>Restart Claude — MCP is active ✅</li>
                  </ol>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="highlight-box">
                  <strong style={{color: '#00d4ff'}}>Method 2: CLI (from registry)</strong>
                  <div className="code-block mt-2" style={{marginBottom: 0}}><pre style={{color: '#00ff88', margin: 0, whiteSpace: 'pre-wrap', fontFamily: "'Courier New', monospace", fontSize: '0.85rem'}}>{`claude mcp add --scope user github-mcp \\
  npx @modelcontextprotocol/server-github

claude mcp add --scope user postgres-mcp \\
  npx @modelcontextprotocol/server-postgres \\
  postgresql://localhost/mydb`}</pre></div>
                </div>
              </div>
            </div>
            <div className="highlight-box mt-3">
              <strong style={{color: '#00d4ff'}}><i className="fas fa-lightbulb"></i> MCP Registry:</strong>
              <p className="mt-2 mb-0" style={{fontSize: '0.9rem'}}>Official registry at <a href="https://github.com/modelcontextprotocol/servers" target="_blank" style={{color: '#00d4ff'}}>github.com/modelcontextprotocol/servers</a> — all official and community MCPs with installation instructions.</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
