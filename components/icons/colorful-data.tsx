function ColorfulData() {
  return (
    <svg width='100%' height='100%' viewBox='0 0 58 58' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <title>Data</title>
      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-1'>
          <stop stopColor='#FFFFFF' stopOpacity='0.265269886' offset='0%'></stop>
          <stop stopColor='#835AF5' stopOpacity='0.158157029' offset='100%'></stop>
        </linearGradient>
        <path
          d='M20,0 C31.0455,0 40,8.95449998 40,20 C40,31.0455 31.0455,40 20,40 C8.95450002,40 0,31.0455 0,20 C0,8.95450002 8.95450002,0 20,0 Z'
          id='path-2'
        ></path>
        <filter x='-40.0%' y='-27.5%' width='180.0%' height='180.0%' filterUnits='objectBoundingBox' id='filter-3'>
          <feOffset dx='0' dy='5' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset>
          <feGaussianBlur stdDeviation='4.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur>
          <feComposite in='shadowBlurOuter1' in2='SourceAlpha' operator='out' result='shadowBlurOuter1'></feComposite>
          <feColorMatrix
            values='0 0 0 0 0.431060178   0 0 0 0 0.219607843   0 0 0 0 0.960784314  0 0 0 0.39138986 0'
            type='matrix'
            in='shadowBlurOuter1'
          ></feColorMatrix>
        </filter>
        <filter x='-46.2%' y='-33.8%' width='192.5%' height='192.5%' filterUnits='objectBoundingBox' id='filter-4'>
          <feMorphology radius='3' operator='erode' in='SourceAlpha' result='shadowSpreadInner1'></feMorphology>
          <feGaussianBlur stdDeviation='6' in='shadowSpreadInner1' result='shadowBlurInner1'></feGaussianBlur>
          <feOffset dx='0' dy='4' in='shadowBlurInner1' result='shadowOffsetInner1'></feOffset>
          <feComposite
            in='shadowOffsetInner1'
            in2='SourceAlpha'
            operator='arithmetic'
            k2='-1'
            k3='1'
            result='shadowInnerInner1'
          ></feComposite>
          <feColorMatrix
            values='0 0 0 0 0.897046494   0 0 0 0 0.900578771   0 0 0 0 1  0 0 0 1 0'
            type='matrix'
            in='shadowInnerInner1'
          ></feColorMatrix>
        </filter>
        <linearGradient x1='89.2730127%' y1='64.5052635%' x2='18.0367597%' y2='36.2815385%' id='linearGradient-5'>
          <stop stopColor='#EDF5FF' offset='0%'></stop>
          <stop stopColor='#F1F6FF' offset='100%'></stop>
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-6'>
          <stop stopColor='#FFFFFF' stopOpacity='0.861806163' offset='0%'></stop>
          <stop stopColor='#FFFFFF' offset='100%'></stop>
        </linearGradient>
        <path
          d='M30.059,14.938 C29.4724223,14.3532548 28.5229212,14.3545978 27.938,14.941 L21.5345,21.3625 L17.7005,17.1855 C17.4207664,16.8806576 17.0275423,16.7048941 16.6138352,16.6997819 C16.2001281,16.6946697 15.8026809,16.860663 15.5155,17.1585 L9.92050002,22.9585 C9.34529546,23.5546914 9.36230864,24.5042954 9.95850002,25.0795 C10.5546914,25.6547046 11.5042954,25.6376914 12.0795,25.0415 L16.568,20.3885 L20.3845,24.5465 C20.6612766,24.848163 21.049327,25.0235902 21.4586357,25.0320879 C21.8679444,25.0405857 22.2629415,24.8814155 22.552,24.5915 L30.062,17.059 C30.6467452,16.4724223 30.6454022,15.5229212 30.059,14.938 L30.059,14.938 Z'
          id='path-7'
        ></path>
        <filter x='-16.7%' y='-22.7%' width='133.3%' height='163.6%' filterUnits='objectBoundingBox' id='filter-8'>
          <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset>
          <feGaussianBlur stdDeviation='1' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur>
          <feComposite in='shadowBlurOuter1' in2='SourceAlpha' operator='out' result='shadowBlurOuter1'></feComposite>
          <feColorMatrix
            values='0 0 0 0 0.131613607   0 0 0 0 0.19019262   0 0 0 0 0.383237092  0 0 0 0.712494537 0'
            type='matrix'
            in='shadowBlurOuter1'
          ></feColorMatrix>
        </filter>
      </defs>
      <g id='页面-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='Data' transform='translate(9, 4)'>
          <g id='形状'>
            <use fill='black' fillOpacity='1' filter='url(#filter-3)' xlinkHref='#path-2'></use>
            <use fill='#7038F5' fillRule='evenodd' xlinkHref='#path-2'></use>
            <use fill='black' fillOpacity='1' filter='url(#filter-4)' xlinkHref='#path-2'></use>
            <path
              stroke='url(#linearGradient-1)'
              strokeWidth='0.2'
              d='M20,0.1 C25.4951362,0.1 30.470136,2.32743233 34.0713518,5.92864817 C37.6725677,9.52986401 39.9,14.5048637 39.9,20 C39.9,25.4951363 37.6725677,30.470136 34.0713518,34.0713518 C30.470136,37.6725677 25.4951362,39.9 20,39.9 C14.5048638,39.9 9.52986403,37.6725677 5.92864819,34.0713518 C2.32743234,30.470136 0.1,25.4951362 0.1,20 C0.1,14.5048638 2.32743234,9.52986403 5.92864819,5.92864819 C9.52986403,2.32743234 14.5048638,0.1 20,0.1 Z'
              strokeLinejoin='square'
            ></path>
          </g>
          <g id='路径'>
            <use fill='black' fillOpacity='1' filter='url(#filter-8)' xlinkHref='#path-7'></use>
            <path
              stroke='url(#linearGradient-6)'
              strokeWidth='0.6'
              d='M28.9983031,14.8003194 C29.3053532,14.7998851 29.612569,14.9165656 29.8471364,15.1504001 C30.0816972,15.3843686 30.1992463,15.691253 30.1996806,15.9983032 C30.2001149,16.3053533 30.0834344,16.612569 29.8495509,16.8471855 L22.3395542,24.3796822 C22.1083074,24.6116146 21.7923097,24.7389508 21.4648628,24.7321526 C21.1374158,24.7253544 20.8269754,24.5850126 20.6055138,24.3436382 L16.5734293,19.9507632 L11.863602,24.833202 C11.6335197,25.0716791 11.3285572,25.1943203 11.0214961,25.1998216 C10.714435,25.2053229 10.4052752,25.0936844 10.166798,24.863602 C9.92832094,24.6335197 9.80567974,24.3285572 9.80017841,24.0214961 C9.79467708,23.714435 9.90631562,23.4052752 10.1364134,23.166782 L15.7314602,17.3667335 C15.9612049,17.1284638 16.2791627,16.9956692 16.6101284,16.999759 C16.9410941,17.0038487 17.2556734,17.1444596 17.4794878,17.3883635 L21.5255206,21.7963654 L28.1504001,15.1528637 C28.3843686,14.9183028 28.691253,14.8007537 28.9983031,14.8003194 Z'
              strokeLinejoin='square'
              fill='url(#linearGradient-5)'
              fillRule='evenodd'
            ></path>
          </g>
          <rect id='矩形备份-30' x='0' y='0' width='40' height='40'></rect>
        </g>
      </g>
    </svg>
  );
}

export default ColorfulData;
