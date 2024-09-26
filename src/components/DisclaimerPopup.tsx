/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState, useEffect } from "react";

const DisclaimerPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const acceptedDisclaimer = localStorage.getItem("disclaimerAccepted");
    if (!acceptedDisclaimer) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50 flex items-center justify-center backdrop-blur-xl p-5">
      <div className="p-8 rounded-lg shadow-lg text-center max-w-lg w-full h-full mx-4 bg-color-2 border-2 border-color-5 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4 text-color-4">Disclaimer</h2>
        <p className="mb-6 text-color-5 text-left">
          <strong>User Acknowledgement:</strong> By proceeding further and
          clicking on the "AGREE" button herein below, I acknowledge that I of
          my own accord wish to know more about Munindra Kumar Vaidya &
          Associates for my own information and use. I further acknowledge that
          there has been no solicitation, invitation or inducement of any sort
          whatsoever from Munindra Kumar Vaidya & Associates or any of its
          members to create an Attorney-Client relationship through this
          knowledge-site. I further acknowledge having read and understood the
          Disclaimer below.
        </p>
        <p className="mb-6 text-color-5 text-left">
          <strong>Disclaimer:</strong> This knowledge-site
          (www.mkvaidyaassociates.com) is owned and operated by Munindra Kumar
          Vaidya & Associates (“M. K. VAIDYA & ASSOCIATES”), and is a resource
          for your informational and educational purposes only.
        </p>
        <p className="mb-6 text-color-5 text-left">
          <strong>No Warranty:</strong> M. K. VAIDYA & ASSOCIATES does not
          warrant that any content or information contained on this
          knowledge-site is accurate, correct, complete or up-to-date, and
          hereby disclaims any and all liability to any person for any actual or
          threatened loss or damage caused by errors or omissions, whether such
          errors or omissions result from negligence, accident or otherwise. M.
          K. VAIDYA & ASSOCIATES assumes no liability for the interpretation
          and/or use of the content and/or information contained on this
          knowledge-site, nor does it offer any warranty of any kind, either
          expressed or implied in relation to such content or information.
        </p>
        <p className="mb-6 text-color-5 text-left">
          <strong>Third-Party Links:</strong> M. K. VAIDYA & ASSOCIATES does not
          intend that links / URLs contained on this knowledge-site re-directing
          users to third party websites be considered as referrals to,
          endorsements of, or affiliations with any such third party website
          operators. M. K. VAIDYA & ASSOCIATES is not responsible for, and makes
          no representations or warranties, express or implied, about the
          content or information contained on such third party websites to which
          links may be provided on this knowledge-site.
        </p>
        <p className="mb-6 text-color-5 text-left">
          <strong>No Legal Advice:</strong> By clicking ‘I agree’ and proceeding
          further, you acknowledge, represent and undertake that you on your own
          accord wish to know more about M. K. VAIDYA & ASSOCIATES, its
          capabilities and research content and information contained on the
          knowledge-site, for your own knowledge and personal use. The content
          and information contained on this knowledge-site should not be
          construed as nor relied upon as legal advice. You as a reader or
          recipient of content or information contained in this knowledge-site
          should not act, nor refrain from acting, based upon any or all of such
          content or information, but should always seek the advice of competent
          legal counsel licensed to practice the relevant law in the appropriate
          jurisdiction.
        </p>
        <button
          onClick={handleAccept}
          className="px-4 py-2 sticky bottom-0 left-0 rounded bg-color-5 font-semibold text-color-1"
        >
          I HAVE READ THE DISCLAIMER AND AGREE TO IT
        </button>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
