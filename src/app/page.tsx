import { Icons } from "@/components/icons";
import { EmailForm } from "@/components/email_form";

export default function ComingSoon() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="z-10 w-full max-w-2xl text-center space-y-8">
        <header className="space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-semibold tracking-widest uppercase text-indigo-400">
            Launching Soon
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            Building something <br /> meaningful.
          </h1>
        </header>

        <EmailForm />

        <footer className="pt-12 border-t border-slate-900/50 flex flex-col items-center gap-8">
          <div className="flex items-center gap-4">
            <a href="https://github.com/iamtalhakhalid" className="text-slate-500 hover:text-white">
              <Icons.Github />
            </a>
            <a href="mailto:hafiz.talhakh@gmail.com" className="text-slate-500 hover:text-white">
              <Icons.Gmail />
            </a>
            <a href="https://www.linkedin.com/in/iamtalhakhalid/" className="text-slate-500 hover:text-white">
              <Icons.LinkedIn />
            </a>
          </div>
          <p className="text-xs text-slate-600 font-mono tracking-widest uppercase">
            &lt; Happy Coding /&gt;
          </p>
        </footer>
      </div>
    </main>
  );
}
