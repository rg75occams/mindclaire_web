const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#f4f5ff] px-4 text-center">
            <div className="relative">
                <img src="/assets/page_not_found.svg" alt="404" className="w-full" />

                <h1 className="text-[25px] inter_semibold text-black mt-6">
                    This Page Does Not Exist
                </h1>

                <p className="max-w-2xl mt-1 text-[#6D7081] text-base inter">
                    Sorry, the page you are looking for could not be found. It's just an accident that was not intentional.
                </p>
            </div>
        </div>
    );
};

export default NotFound