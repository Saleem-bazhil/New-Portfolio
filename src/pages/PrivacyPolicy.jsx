import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Saleem Bazhil</title>
                <meta
                    name="description"
                    content="Privacy Policy for Saleem Bazhil's portfolio website detailing information collection, use, and data protection."
                />
            </Helmet>

            <section className="section-padding min-h-screen">
                <div className="max-w-4xl mx-auto pb-20">
                    <h1 className="text-4xl md:text-5xl font-bold mb-10 text-white">Privacy Policy</h1>
                    <p className="text-white-50 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="space-y-10 text-white-50 leading-relaxed">

                        {/* Introduction */}
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
                            <p>
                                Welcome to my portfolio website. I value your privacy and aim to protect your personal information.
                                This Privacy Policy explains what information I collect, how it is used, and your rights concerning your data
                                when you visit my website.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                            <p className="mb-2">I may collect the following types of information:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Personal Data:</strong> such as your name, email address, and any messages you send via the contact form.</li>
                                <li><strong>Usage Data:</strong> information on how the website is accessed and used, including your IP address, browser type, and interaction metrics.</li>
                            </ul>
                        </div>

                        {/* How We Use Information */}
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Information</h2>
                            <p className="mb-2">Any of the information we collect from you may be used in one of the following ways:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To respond to your inquiries or suggestions sent through the contact form.</li>
                                <li>To improve my website based on the information and feedback received.</li>
                                <li>To analyze traffic patterns and enhance user experience.</li>
                            </ul>
                        </div>

                        {/* Cookies */}
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
                            <p>
                                This website may use "cookies" to enhance user experience. You can choose to set your web browser to refuse
                                cookies, or to alert you when cookies are being sent. If you do so, note that some parts of the Site may not
                                function properly.
                            </p>
                        </div>

                        {/* Data Protection */}
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-4">Data Protection</h2>
                            <p>
                                We adopt appropriate data collection, storage, and processing practices and security measures to protect
                                against unauthorized access, alteration, disclosure, or destruction of your personal information, username,
                                password, transaction information, and data stored on our site.
                            </p>
                        </div>

                        {/* Third-Party Services */}
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
                            <p>
                                I utilize third-party services like hosting providers, analytics, and form processors. These third parties
                                have their own privacy policies dictating how they handle the information they gather. I am not responsible
                                for the privacy practices or the content of these third-party websites.
                            </p>
                        </div>

                        {/* User Rights */}
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-4">User Rights</h2>
                            <p>
                                Depending on your location, you may have the right to access, update, or delete the information I have on you.
                                If you wish to be informed what Personal Data I hold about you and if you want it to be removed from my systems,
                                please contact me.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
                            <p>
                                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site,
                                please contact me at: <a href="mailto:saleembazhil@gmail.com" className="text-white hover:underline transition-colors">saleembazhil@gmail.com</a>.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;
