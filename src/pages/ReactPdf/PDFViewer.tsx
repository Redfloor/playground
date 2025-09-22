import { Document, Page, pdfjs } from 'react-pdf';
    import { useEffect, useState } from 'react';

    pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

    export const ReactPdf = () => {
        const [numPages, setNumPages] = useState<number>();
        const [pdfUrl, setPdfUrl] = useState<string>();

        useEffect(() => {
            fetch('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf')
                .then(res => res.blob())
                .then(blob => setPdfUrl(URL.createObjectURL(blob)));
            // Cleanup the object URL on unmount
            return () => {
                if (pdfUrl) URL.revokeObjectURL(pdfUrl);
            };
        }, []);

        {isAdmin && <Component /> }
        {isAdmin ? <Component1 /> : <Component2 /> }

        return (
            <Document
                file={pdfUrl}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                onLoadError={console.log}
            >
                {numPages &&
                    Array.from(new Array(numPages), (el, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                    ))
                }
            </Document>
        );
    };
