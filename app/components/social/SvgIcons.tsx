interface SvgIconProps {
  theme?: string
}

export function EmailSvgIcon({ theme }: SvgIconProps) {
  return (
    <svg className="social-media__icon" viewBox="0 0 51 40">
      <path
        fill={theme}
        d="M50.4285714,13.2857143 L50.4285714,35.1428571 C50.4285714,36.2857143 50,37.4285714 49.1428571,38.2857143 C48.2857143,39.1428571 47.1428571,39.5714286 46,39.5714286 L5.42857143,39.5714286 C4.28571429,39.5714286 3.14285714,39.1428571 2.28571429,38.2857143 C1.42857143,37.4285714 1,36.2857143 1,35.1428571 L1,13.2857143 C1.71428571,14.1428571 2.71428571,14.8571429 3.85714286,15.7142857 C10.5714286,20.1428571 15.1428571,23.4285714 17.5714286,25.2857143 C18.5714286,26 19.5714286,26.5714286 20.1428571,27 C20.7142857,27.4285714 21.5714286,27.8571429 22.8571429,28.2857143 C23.8571429,28.7142857 25,29 25.8571429,29 L25.8571429,29 C26.7142857,29 27.8571429,28.7142857 28.8571429,28.2857143 C29.8571429,27.8571429 30.8571429,27.4285714 31.5714286,27 C32.1428571,26.5714286 33,26 34.1428571,25.2857143 C37.2857143,23 41.8571429,19.8571429 47.8571429,15.7142857 C48.7142857,15 49.5714286,14.1428571 50.4285714,13.2857143 L50.4285714,13.2857143 Z M50.4285714,5.14285714 C50.4285714,6.57142857 50,8 49.1428571,9.28571429 C48.2857143,10.5714286 47,11.8571429 45.7142857,12.7142857 C38.7142857,17.4285714 34.4285714,20.4285714 32.8571429,21.5714286 C32.7142857,21.7142857 32.2857143,22 31.7142857,22.4285714 C31.1428571,22.8571429 30.7142857,23.1428571 30.2857143,23.4285714 C29.8571429,23.7142857 29.4285714,24 28.8571429,24.2857143 C28.2857143,24.5714286 27.8571429,24.8571429 27.2857143,25 C26.7142857,25.1428571 26.4285714,25.2857143 26,25.2857143 L26,25.2857143 C25.5714286,25.2857143 25.1428571,25.1428571 24.7142857,25 C24.2857143,24.8571429 23.7142857,24.5714286 23.1428571,24.2857143 C22.5714286,24 22.1428571,23.7142857 21.7142857,23.4285714 C21.2857143,23.1428571 20.8571429,22.8571429 20.2857143,22.4285714 C19.7142857,22 19.2857143,21.7142857 19.1428571,21.5714286 C17.5714286,20.4285714 15.1428571,18.7142857 11.8571429,16.5714286 C8.57142857,14.2857143 7.14285714,13.1428571 6.57142857,12.7142857 C5.42857143,12 4.28571429,11 3.28571429,9.57142857 C2.28571429,8.14285714 1.85714286,6.85714286 1.85714286,5.85714286 C1.85714286,4.42857143 2.28571429,3.14285714 3,2.28571429 C3.71428571,1.42857143 4.71428571,0.857142857 6.28571429,0.857142857 L46.8571429,0.857142857 C48,0.857142857 49.1428571,1.28571429 50,2.14285714 C50.1428571,3 50.4285714,4 50.4285714,5.14285714 L50.4285714,5.14285714 Z"
      ></path>
    </svg>
  )
}

export function FacebookSvgIcon({ theme }: SvgIconProps) {
  return (
    <svg className="social-media__icon" viewBox="0 0 21 39">
      <path
        fill={theme}
        d="M20.25,0.875 L20.25,7 L16.625,7 C15.25,7 14.375,7.25 14,7.75 C13.5,8.375 13.25,9.125 13.25,10.25 L13.25,14.625 L20,14.625 L19.125,21.375 L13.25,21.375 L13.25,38.875 L6.25,38.875 L6.25,21.375 L0.375,21.375 L0.375,14.625 L6.25,14.625 L6.25,9.5 C6.25,6.625 7,4.375 8.625,2.875 C10.25,1.375 12.25,0.5 15.125,0.5 C17.25,0.5 19,0.625 20.25,0.875 L20.25,0.875 Z"
      ></path>
    </svg>
  )
}

export function GithubSvgIcon({ theme }: SvgIconProps) {
  return (
    <svg className="social-media__icon" viewBox="0 0 24 24">
      <path
        fill={theme}
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </svg>
  )
}

export function InstagramSvgIcon({ theme }: SvgIconProps) {
  return (
    <svg className="social-media__icon" viewBox="0 0 256 256">
      <g>
        <path
          fill={theme}
          d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z"
        ></path>
      </g>
    </svg>
  )
}

export function MediumSvgIcon({ theme }: SvgIconProps) {
  return (
    <svg className="social-media__icon" viewBox="0 0 51 40">
      <path
        fill={theme}
        d="M6.75862069,8.27586207 C6.75862069,7.72413793 6.62068966,7.03448276 6.06896552,6.62068966 L1.37931034,1.10344828 L1.37931034,0.137931034 L15.7241379,0.137931034 L26.8965517,24.5517241 L36.6896552,0.137931034 L50.3448276,0.137931034 L50.3448276,0.965517241 L46.3448276,4.82758621 C46.0689655,5.10344828 45.7931034,5.51724138 45.9310345,5.93103448 L45.9310345,33.7931034 C45.7931034,34.2068966 46.0689655,34.6206897 46.3448276,34.8965517 L50.2068966,38.7586207 L50.2068966,39.5862069 L30.8965517,39.5862069 L30.8965517,38.7586207 L34.8965517,34.8965517 C35.3103448,34.4827586 35.3103448,34.3448276 35.3103448,33.7931034 L35.3103448,11.1724138 L24.137931,39.4482759 L22.6206897,39.4482759 L9.65517241,11.1724138 L9.65517241,30.2068966 C9.65517241,30.8965517 9.93103448,31.7241379 10.4827586,32.2758621 L15.7241379,38.6206897 L15.7241379,39.4482759 L0.827586207,39.4482759 L0.827586207,38.6206897 L6.06896552,32.2758621 C6.62068966,31.7241379 6.89655172,30.8965517 6.75862069,30.0689655 L6.75862069,8.27586207 Z"
      ></path>
    </svg>
  )
}

export function TwitterSvgIcon({ theme }: SvgIconProps) {
  return (
    <svg className="social-media__icon" viewBox="0 0 50 40">
      <g transform="translate(-1.000000, 0.000000)">
        <path
          fill={theme}
          d="M49.3333333,4.74074074 C47.8518519,6.66666667 46.2222222,8.44444444 44.2962963,9.92592593 C44.2962963,10.2222222 44.2962963,10.5185185 44.2962963,11.4074074 C44.2962963,13.9259259 44,16.7407407 42.962963,19.2592593 C42.0740741,21.7777778 41.1851852,24.4444444 39.4074074,26.8148148 C37.7777778,29.037037 36,31.4074074 33.9259259,33.1851852 C31.8518519,34.962963 29.037037,36.5925926 26.0740741,37.6296296 C22.962963,38.8148148 19.8518519,39.4074074 16.2962963,39.4074074 C10.962963,39.4074074 5.92592593,37.9259259 1.18518519,34.962963 C1.77777778,34.962963 2.81481481,35.1111111 3.40740741,35.1111111 C8,35.1111111 12.1481481,33.6296296 15.5555556,30.8148148 C13.4814815,30.8148148 11.5555556,30.2222222 9.92592593,28.8888889 C8.14814815,27.4074074 7.11111111,25.9259259 6.66666667,24 C7.25925926,24.1481481 8.14814815,24.1481481 8.44444444,24.1481481 C9.33333333,24.1481481 10.2222222,24 10.962963,23.8518519 C8.88888889,23.4074074 6.96296296,22.2222222 5.48148148,20.4444444 C4,18.6666667 3.40740741,16.5925926 3.40740741,14.2222222 L3.40740741,14.0740741 C4.88888889,14.962963 6.37037037,15.4074074 7.85185185,15.4074074 C6.37037037,14.5185185 5.62962963,13.4814815 4.59259259,11.8518519 C3.7037037,10.3703704 3.25925926,8.74074074 3.25925926,6.96296296 C3.25925926,5.18518519 3.7037037,3.55555556 4.74074074,1.92592593 C6.96296296,5.03703704 10.0740741,7.25925926 13.6296296,9.18518519 C17.1851852,11.1111111 20.8888889,12.1481481 24.8888889,12.2962963 C24.7407407,11.4074074 24.7407407,10.6666667 24.7407407,10.2222222 C24.7407407,7.55555556 25.9259259,5.03703704 27.7037037,3.25925926 C29.4814815,1.48148148 32,0.296296296 34.6666667,0.296296296 C37.6296296,0.296296296 40,1.48148148 41.7777778,3.40740741 C43.8518519,2.96296296 46.0740741,2.07407407 48,1.18518519 C47.4074074,3.40740741 45.9259259,5.18518519 43.7037037,6.51851852 C45.6296296,6.22222222 47.5555556,5.77777778 49.3333333,4.74074074 L49.3333333,4.74074074 Z"
        ></path>
      </g>
    </svg>
  )
}