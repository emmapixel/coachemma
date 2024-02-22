export default function Index() {
    return (
        <div className="bg-swiss-coffee opacity-70 flex">
            <div className="w-1/2 h-80">
                <img src="/images/flower.jpg" alt="A picture of a pink flower" className="h-full object-contain" />
            </div>
            <div className="w-1/2 h-80 flex flex-col items-center justify-center space-y-3">
                <p className="text-clam-shell">Hejsan</p>
                <p className="font-cutive text-2xl">Detta är förstasidan</p>
                <p className="text-clam-shell">Hejsan</p>
            </div>
        </div>
    );
}