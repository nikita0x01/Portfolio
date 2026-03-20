import { motion } from "framer-motion"

const TOKENS = [
  "<div>", "</div>", "{ }", "( )", "[ ]", "=>", "const", "let", "function",
  "< />", "return", "map()", "filter()", "useState()", "useEffect()",
  "<Component/>", "props", "className", "&&", "||", "=== ", "!==",
  "import", "export", "<Route/>", "<span>", "</span>","<Nikita/>",

  // Added latest modern tokens
  "<section>", "</section>",
  "<header>", "</header>",
  "<main>", "</main>",
  "<footer>", "</footer>",
  "async", "await",
  "try { }", "catch { }",
  "Promise", "resolve()", "reject()",
  "JSON.stringify()", "JSON.parse()",
  "axios.get()", "axios.post()",
  "fetch()", 
  "<Link/>", "<Outlet/>",
  "useRef()", "useMemo()", "useCallback()",
  "React.Fragment", "<Fragment/>",
  "<Suspense/>", "<ErrorBoundary/>",
  "npm install", "yarn add",
  "console.log()", "console.error()",
  "<svg>", "</svg>",
  "<img />",
  "<button>", "</button>",
  "<input />",
  "<form>", "</form>"
];


function rand(min, max) { return Math.random() * (max - min) + min }

export default function CodeBackground() {
  const items = Array.from({ length: 70 }).map((_, i) => {
    const size = rand(12, 22)
    const x = rand(-5, 105)
    const y = rand(-10, 110)
    const dur = rand(4, 9)
    const delay = rand(0, 10)
    const opacity = rand(0.2, 0.6)
    const token = TOKENS[i % TOKENS.length]
    return { id: i, size, x, y, dur, delay, opacity, token }
  })

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_50%_10%,rgba(100,255,218,0.08),transparent_70%)]" />
      {items.map(item => (
        <motion.span
          key={item.id}
          className="absolute text-accent/70 select-none"
          style={{ left: `${item.x}%`, top: `${item.y}%`, fontSize: item.size }}
          initial={{ opacity: 0, y: 20, rotate: 0 }}
          animate={{ opacity: item.opacity, y: [-10, 10, -10], rotate: [0, 10, -10, 0] }}
          transition={{ duration: item.dur, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {item.token}
        </motion.span>
      ))}
    </div>
  )
}