import React from 'react';
import { Button } from '~/components/ui/Button';
import { Card, CardContent, CardHeader } from '~/components/ui/Card';
import {
  Cpu,
  Server,
  Settings,
  ExternalLink,
  Code,
  Database,
  CheckCircle,
  AlertCircle,
  Activity,
  ArrowLeft,
  Download,
  Shield,
  Terminal,
  Monitor,
  Wifi,
  Zap,
} from 'lucide-react';

// Setup Guide Component
function SetupGuide({ onBack }: { onBack: () => void }) {
  return (
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="bg-transparent hover:bg-transparent text-nova-elements-textSecondary hover:text-nova-elements-textPrimary transition-all duration-200 p-2"
          aria-label="Back to Dashboard"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h2 className="text-xl font-semibold text-nova-elements-textPrimary">Local Provider Setup Guide</h2>
          <p className="text-sm text-nova-elements-textSecondary">
            Complete setup instructions for running AI models locally
          </p>
        </div>
      </div>

      {/* Hardware Requirements Overview */}
      <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-nova-elements-textPrimary">System Requirements</h3>
              <p className="text-sm text-nova-elements-textSecondary">Recommended hardware for optimal performance</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-green-500" />
                <span className="font-medium text-nova-elements-textPrimary">CPU</span>
              </div>
              <p className="text-nova-elements-textSecondary">8+ cores, modern architecture (for CPU inference)</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-500" />
                <span className="font-medium text-nova-elements-textPrimary">RAM</span>
              </div>
              <p className="text-nova-elements-textSecondary">16GB minimum, 32GB+ for larger models</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-purple-500" />
                <span className="font-medium text-nova-elements-textPrimary">GPU (Optional)</span>
              </div>
              <p className="text-nova-elements-textSecondary">NVIDIA CUDA or Apple Metal for GPU acceleration</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* llama.cpp Server Setup Section */}
      <Card className="bg-nova-elements-background-depth-2 shadow-sm">
        <CardHeader className="pb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center ring-1 ring-purple-500/30">
              <Cpu className="w-6 h-6 text-purple-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-nova-elements-textPrimary">llama.cpp Server Setup</h3>
              <p className="text-sm text-nova-elements-textSecondary">
                Lightweight, high-performance local inference server with OpenAI-compatible API
              </p>
            </div>
            <span className="px-3 py-1 bg-purple-500/10 text-purple-500 text-xs font-medium rounded-full">
              Recommended
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Install */}
          <div className="space-y-4">
            <h4 className="font-medium text-nova-elements-textPrimary flex items-center gap-2">
              <Download className="w-4 h-4" />
              1. Download &amp; Install
            </h4>

            {/* Pre-built binaries */}
            <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-green-500" />
                <h5 className="font-medium text-green-500">🆕 Pre-built Binaries (Recommended)</h5>
              </div>
              <p className="text-sm text-nova-elements-textSecondary mb-3">
                Download the latest release for your platform — no compilation needed.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-500/10 to-purple-600/10 hover:from-purple-500/20 hover:to-purple-600/20 border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 gap-2 group shadow-sm hover:shadow-lg font-medium"
                _asChild
              >
                <a
                  href="https://github.com/ggml-org/llama.cpp/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0" />
                  <span className="font-medium">Download Latest Release</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                </a>
              </Button>
              <div className="mt-3 grid md:grid-cols-3 gap-3 text-xs">
                <div className="p-2 rounded bg-nova-elements-background-depth-3 text-nova-elements-textSecondary">
                  <strong className="text-nova-elements-textPrimary block mb-1">Windows</strong>
                  llama-*-bin-win-*.zip
                </div>
                <div className="p-2 rounded bg-nova-elements-background-depth-3 text-nova-elements-textSecondary">
                  <strong className="text-nova-elements-textPrimary block mb-1">macOS (Metal)</strong>
                  llama-*-bin-macos-arm64.zip
                </div>
                <div className="p-2 rounded bg-nova-elements-background-depth-3 text-nova-elements-textSecondary">
                  <strong className="text-nova-elements-textPrimary block mb-1">Linux (CUDA)</strong>
                  llama-*-bin-ubuntu-x64.zip
                </div>
              </div>
            </div>

            {/* Build from source */}
            <div className="p-4 rounded-lg bg-nova-elements-background-depth-3">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-5 h-5 text-nova-elements-textPrimary" />
                <h5 className="font-medium text-nova-elements-textPrimary">Build from Source (Advanced)</h5>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-nova-elements-background-depth-4">
                  <strong className="text-nova-elements-textPrimary text-xs block mb-2">
                    CPU only (all platforms)
                  </strong>
                  <div className="text-xs font-mono text-nova-elements-textPrimary space-y-1">
                    <div>git clone https://github.com/ggml-org/llama.cpp</div>
                    <div>cd llama.cpp</div>
                    <div>cmake -B build</div>
                    <div>cmake --build build --config Release</div>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-nova-elements-background-depth-4">
                  <strong className="text-nova-elements-textPrimary text-xs block mb-2">NVIDIA CUDA</strong>
                  <div className="text-xs font-mono text-nova-elements-textPrimary space-y-1">
                    <div>cmake -B build -DGGML_CUDA=ON</div>
                    <div>cmake --build build --config Release</div>
                  </div>
                  <strong className="text-nova-elements-textPrimary text-xs block mt-3 mb-2">Apple Metal</strong>
                  <div className="text-xs font-mono text-nova-elements-textPrimary space-y-1">
                    <div>cmake -B build -DGGML_METAL=ON</div>
                    <div>cmake --build build --config Release</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Get a Model */}
          <div className="space-y-4">
            <h4 className="font-medium text-nova-elements-textPrimary flex items-center gap-2">
              <Code className="w-4 h-4" />
              2. Download a GGUF Model
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-nova-elements-background-depth-3">
                <h5 className="font-medium text-nova-elements-textPrimary mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4 text-green-500" />
                  Recommended Coding Models
                </h5>
                <div className="space-y-2 text-xs bg-nova-elements-background-depth-4 p-3 rounded font-mono text-nova-elements-textPrimary">
                  <div># Qwen2.5 Coder (7B) — best for coding</div>
                  <div>huggingface-cli download bartowski/</div>
                  <div>Qwen2.5-Coder-7B-Instruct-GGUF</div>
                  <div className="mt-2"># DeepSeek Coder V2 (lightweight)</div>
                  <div>huggingface-cli download bartowski/</div>
                  <div>DeepSeek-Coder-V2-Lite-Instruct-GGUF</div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-nova-elements-background-depth-3">
                <h5 className="font-medium text-nova-elements-textPrimary mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-500" />
                  General Purpose Models
                </h5>
                <div className="space-y-2 text-xs bg-nova-elements-background-depth-4 p-3 rounded font-mono text-nova-elements-textPrimary">
                  <div># Llama 3.2 (3B) — fast &amp; efficient</div>
                  <div>huggingface-cli download bartowski/</div>
                  <div>Llama-3.2-3B-Instruct-GGUF</div>
                  <div className="mt-2"># Mistral 7B</div>
                  <div>huggingface-cli download TheBloke/</div>
                  <div>Mistral-7B-Instruct-v0.2-GGUF</div>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
              <p className="text-xs text-nova-elements-textSecondary">
                <strong className="text-blue-400">Tip:</strong> Use Q4_K_M quantization for the best balance of quality
                and speed. Look for files ending in{' '}
                <code className="bg-nova-elements-background-depth-4 px-1 rounded">-Q4_K_M.gguf</code> on HuggingFace.
              </p>
            </div>
          </div>

          {/* Step 3: Start the server */}
          <div className="space-y-4">
            <h4 className="font-medium text-nova-elements-textPrimary flex items-center gap-2">
              <Zap className="w-4 h-4" />
              3. Start the Server
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-nova-elements-background-depth-3">
                <h5 className="font-medium text-nova-elements-textPrimary mb-2">Basic (CPU)</h5>
                <div className="text-xs bg-nova-elements-background-depth-4 p-3 rounded font-mono text-nova-elements-textPrimary space-y-1">
                  <div>./llama-server \</div>
                  <div> -m /path/to/model.gguf \</div>
                  <div> --host 127.0.0.1 \</div>
                  <div> --port 8080 \</div>
                  <div> -c 32768</div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-nova-elements-background-depth-3">
                <h5 className="font-medium text-nova-elements-textPrimary mb-2">GPU Accelerated</h5>
                <div className="text-xs bg-nova-elements-background-depth-4 p-3 rounded font-mono text-nova-elements-textPrimary space-y-1">
                  <div>./llama-server \</div>
                  <div> -m /path/to/model.gguf \</div>
                  <div> --host 127.0.0.1 \</div>
                  <div> --port 8080 \</div>
                  <div> -c 32768 \</div>
                  <div> -ngl 99</div>
                  <div className="text-nova-elements-textTertiary"># -ngl = GPU layers</div>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-purple-500" />
                <span className="font-medium text-purple-500">In Nova.diy</span>
              </div>
              <p className="text-xs text-nova-elements-textSecondary">
                Set the API Endpoint to{' '}
                <code className="bg-nova-elements-background-depth-4 px-1 rounded">http://127.0.0.1:8080</code> in the
                LlamaCpp provider card above, then enable it. Nova will automatically detect loaded models.
              </p>
            </div>
          </div>

          {/* Step 4: Troubleshooting */}
          <div className="space-y-4">
            <h4 className="font-medium text-nova-elements-textPrimary flex items-center gap-2">
              <Settings className="w-4 h-4" />
              4. Troubleshooting &amp; Useful Flags
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                <h5 className="font-medium text-red-500 mb-2">Common Issues</h5>
                <ul className="text-xs text-nova-elements-textSecondary space-y-1">
                  <li>
                    • Port 8080 in use: Change with{' '}
                    <code className="bg-nova-elements-background-depth-4 px-0.5 rounded">--port 8081</code>
                  </li>
                  <li>• Out of memory: Use smaller model or Q3/Q4 quant</li>
                  <li>
                    • Slow responses: Add{' '}
                    <code className="bg-nova-elements-background-depth-4 px-0.5 rounded">-ngl 99</code> for GPU
                  </li>
                  <li>• Model not found: Check the full path to .gguf file</li>
                  <li>• No /v1/models: Server must be version ≥ b3142</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                <h5 className="font-medium text-green-500 mb-2">Useful Server Flags</h5>
                <div className="text-xs bg-nova-elements-background-depth-4 p-3 rounded font-mono text-nova-elements-textPrimary space-y-1">
                  <div>
                    <span className="text-nova-elements-textTertiary"># Context size</span>
                  </div>
                  <div>-c 32768</div>
                  <div>
                    <span className="text-nova-elements-textTertiary"># CPU threads</span>
                  </div>
                  <div>-t 8</div>
                  <div>
                    <span className="text-nova-elements-textTertiary"># Parallel slots</span>
                  </div>
                  <div>--parallel 2</div>
                  <div>
                    <span className="text-nova-elements-textTertiary"># Flash attention</span>
                  </div>
                  <div>-fa</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* LM Studio Setup Section */}
      <Card className="bg-nova-elements-background-depth-2 shadow-sm">
        <CardHeader className="pb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center ring-1 ring-blue-500/30">
              <Monitor className="w-6 h-6 text-blue-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-nova-elements-textPrimary">LM Studio Setup</h3>
              <p className="text-sm text-nova-elements-textSecondary">
                User-friendly GUI for running local models with excellent model management
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Installation */}
          <div className="space-y-4">
            <h4 className="font-medium text-nova-elements-textPrimary flex items-center gap-2">
              <Download className="w-4 h-4" />
              1. Download &amp; Install
            </h4>
            <div className="p-4 rounded-lg bg-nova-elements-background-depth-3">
              <p className="text-sm text-nova-elements-textSecondary mb-3">
                Download LM Studio for Windows, macOS, or Linux from the official website.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 gap-2 group shadow-sm hover:shadow-lg hover:shadow-blue-500/20 font-medium"
                _asChild
              >
                <a
                  href="https://lmstudio.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0" />
                  <span className="flex-1 text-center font-medium">Download LM Studio</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                </a>
              </Button>
            </div>
          </div>

          {/* Configuration */}
          <div className="space-y-4">
            <h4 className="font-medium text-nova-elements-textPrimary flex items-center gap-2">
              <Settings className="w-4 h-4" />
              2. Configure Local Server
            </h4>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-nova-elements-background-depth-3">
                <h5 className="font-medium text-nova-elements-textPrimary mb-2">Start Local Server</h5>
                <ol className="text-xs text-nova-elements-textSecondary space-y-1 list-decimal list-inside">
                  <li>Download a model from the "My Models" tab</li>
                  <li>Go to "Local Server" tab</li>
                  <li>Select your downloaded model</li>
                  <li>Set port to 1234 (default)</li>
                  <li>Click "Start Server"</li>
                </ol>
              </div>

              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span className="font-medium text-red-500">Critical: Enable CORS</span>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-nova-elements-textSecondary">
                    To work with Nova DIY, you MUST enable CORS in LM Studio:
                  </p>
                  <ol className="text-xs text-nova-elements-textSecondary space-y-1 list-decimal list-inside ml-2">
                    <li>In Server Settings, check "Enable CORS"</li>
                    <li>Set Network Interface to "0.0.0.0" for external access</li>
                    <li>
                      Alternatively, use CLI:{' '}
                      <code className="bg-nova-elements-background-depth-4 px-1 rounded">lms server start --cors</code>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Optimization */}
      <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 shadow-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <Activity className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-nova-elements-textPrimary">Performance Tips</h3>
              <p className="text-sm text-nova-elements-textSecondary">Get the most out of local inference</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium text-nova-elements-textPrimary">Hardware Optimizations</h4>
              <ul className="text-sm text-nova-elements-textSecondary space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Use NVIDIA GPU with CUDA for 5-10x speedup (add{' '}
                    <code className="bg-nova-elements-background-depth-3 px-0.5 rounded text-xs">-ngl 99</code>)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Apple Silicon: Metal is used automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Use SSD storage for faster model loading</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-nova-elements-textPrimary">Software Optimizations</h4>
              <ul className="text-sm text-nova-elements-textSecondary space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Use Q4_K_M quantized models for quality vs. speed balance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Enable Flash Attention with{' '}
                    <code className="bg-nova-elements-background-depth-3 px-0.5 rounded text-xs">-fa</code>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Set <code className="bg-nova-elements-background-depth-3 px-0.5 rounded text-xs">--parallel 2</code>{' '}
                    for concurrent requests
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alternative Options */}
      <Card className="bg-nova-elements-background-depth-2 shadow-sm">
        <CardHeader className="pb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center ring-1 ring-orange-500/30">
              <Wifi className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-nova-elements-textPrimary">Cloud Alternatives</h3>
              <p className="text-sm text-nova-elements-textSecondary">Fast cloud inference with open-source models</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-3 rounded-lg bg-nova-elements-background-depth-3">
              <div className="flex items-center gap-2 mb-1">
                <Server className="w-4 h-4 text-orange-500" />
                <span className="font-medium text-nova-elements-textPrimary">OpenRouter</span>
              </div>
              <p className="text-xs text-nova-elements-textSecondary">Access to 100+ models through unified API</p>
            </div>
            <div className="p-3 rounded-lg bg-nova-elements-background-depth-3">
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-4 h-4 text-pink-500" />
                <span className="font-medium text-nova-elements-textPrimary">Groq</span>
              </div>
              <p className="text-xs text-nova-elements-textSecondary">Ultra-fast LPU inference for open models</p>
            </div>
            <div className="p-3 rounded-lg bg-nova-elements-background-depth-3">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-blue-500" />
                <span className="font-medium text-nova-elements-textPrimary">Together AI</span>
              </div>
              <p className="text-xs text-nova-elements-textSecondary">Fast inference with open-source models</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SetupGuide;
