const useSteps = ({hasBackend, backendLanguage, frontendFramework}) => {

    /**
     * Don't think about it. These variables represent a complex set of logic to simple determine if a status should
     * display "Completed", "In Progress", or "Incomplete"
     */
    const backendStatus = hasBackend !== null ? "Completed" : "In Progress"; 
    const backendLanguageStatus = hasBackend ? (backendLanguage ? "Completed" : "In Progress") : "N/A";
    const frontendFrameworkStatus = frontendFramework ? "Completed" : (hasBackend ? (backendLanguage ? "In Progress" : "Incomplete") : (hasBackend !== null ? "In Progress" : "Incomplete"));
    const finalStatus = frontendFrameworkStatus === "Completed" ? "Completed" : "Incomplete";

    return [
        {
            title: "Backend",
            content: hasBackend === null ? "---" : hasBackend ? "Yes, include backend" : "No backend",
            status: backendStatus
        },
        ...(hasBackend ? [{
            title: "Backend (Language)",
            content: backendLanguage ??  "---",
            status: backendLanguageStatus 
        }] : []),
        {
            title: "Frontend (Framework)",
            content: frontendFramework ?? "---",
            status: frontendFrameworkStatus
        },
        {
            title: "Start Hacking!",
            content: "",
            status: finalStatus
        },
    ];
}

export default useSteps;
