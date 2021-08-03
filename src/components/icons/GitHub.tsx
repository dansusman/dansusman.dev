import React from "react";

interface HeartProps {}

const GitHub: React.FC<HeartProps> = () => {
  return (
    <a target="_blank" href="https://github.com/dansusman">
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>github</title>
        <path d="M9.67617 0.238342C4.33314 0.238342 0 4.5709 0 9.91571C0 14.1906 2.77252 17.818 6.61791 19.0982C7.10207 19.1868 7.27851 18.8879 7.27851 18.6313C7.27851 18.4013 7.2701 17.793 7.26504 16.9857C4.57332 17.5702 4.0054 15.6883 4.0054 15.6883C3.5652 14.5702 2.93073 14.2726 2.93073 14.2726C2.0521 13.6726 2.99724 13.6844 2.99724 13.6844C3.96854 13.7528 4.47944 14.6819 4.47944 14.6819C5.34263 16.1605 6.74461 15.7334 7.29591 15.4857C7.38381 14.8607 7.63393 14.4342 7.91017 14.1924C5.76144 13.9476 3.5022 13.1177 3.5022 9.40957C3.5022 8.35272 3.87944 7.48954 4.49845 6.8129C4.39859 6.56814 4.06656 5.58434 4.5936 4.25185C4.5936 4.25185 5.40567 3.99167 7.25442 5.24338C8.02611 5.02891 8.85424 4.92198 9.67703 4.91782C10.4992 4.92119 11.3267 5.02896 12.0996 5.24338C13.9472 3.99167 14.7581 4.25185 14.7581 4.25185C15.2862 5.58434 14.9541 6.56814 14.8549 6.8129C15.4751 7.48954 15.8494 8.35272 15.8494 9.40957C15.8494 13.1272 13.5866 13.9452 11.4313 14.1846C11.7782 14.4834 12.0877 15.074 12.0877 15.977C12.0877 17.2703 12.0759 18.314 12.0759 18.6313C12.0759 18.8903 12.2506 19.1915 12.7413 19.097C16.5837 17.8144 19.3538 14.19 19.3538 9.91571C19.3538 4.5709 15.0207 0.238342 9.67591 0.238342" />
      </svg>
    </a>
  );
};

export default GitHub;
