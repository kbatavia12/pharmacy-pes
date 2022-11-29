import React from 'react'
import Footer from '../components/Footer';
import LibraryPdf from '../assets/NEW LIBRARY INFORMATION 22.doc.pdf';
import Navbar from '../components/Navbar';
import TitleBar from '../components/TitleBar';
import LinkBar from '../components/LinkBar';

const Library = () => {
    return (
        <div>
            <Navbar />
            <TitleBar text="Library" />
            <LinkBar />

            <div className="main-area">
                <h2>Library Details</h2>
                <object
                    className="pdfFile"
                    data={LibraryPdf}
                    type="application/pdf"
                    width="80%"
                    height="800px"
                ></object>

            </div>

            <Footer />
        </div>
    )
}

export default Library;