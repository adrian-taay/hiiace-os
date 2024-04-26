import MathelMemoryProvider from "./utils/MathelMemoryProvider";
import PageSwitcher from "./utils/PageSwitcher";

function MathelMemory() {
  return (
    <div className="bg-[url('./assets/mathel-memory/mathel-main-bg.jpg')] bg-cover bg-center text-sm h-full flex justify-center items-center overflow-hidden">
      <MathelMemoryProvider>
        <PageSwitcher />
      </MathelMemoryProvider>
    </div>
  );
}

export default MathelMemory;
