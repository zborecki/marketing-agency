import { FC } from 'react';

import { BaseProps } from '#types/props/common';
import { classNames } from '#utils/classNames';
import '#components/logo/ma-logo.scss';

export const Logo: FC<BaseProps> = ({ className }) => (
  <svg
    className={classNames(['ma-logo', className])}
    fill="none"
    height="40"
    viewBox="0 0 179 40"
    width="179"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="logomark-big-square">
      <mask fill="white" id="path-1-inside-1_177_1062">
        <rect
          height="31"
          rx="4"
          width="31"
        />
      </mask>
      <rect
        height="31"
        mask="url(#path-1-inside-1_177_1062)"
        rx="4"
        stroke="#232323"
        strokeWidth="12"
        width="31"
      />
    </g>
    <g id="logomark-small-square">
      <mask fill="white" id="path-2-inside-2_177_1062">
        <rect
          height="22"
          rx="4"
          width="22"
          x="25"
          y="18"
        />
      </mask>
      <rect
        height="22"
        mask="url(#path-2-inside-2_177_1062)"
        rx="4"
        stroke="#B6BDC5"
        strokeWidth="12"
        width="22"
        x="25"
        y="18"
      />
    </g>
    <g id="logotype-marketing">
      <path d="M79.5999 3.04035V17.0004H76.7999V7.92035L73.0599 17.0004H70.9399L67.1799 7.92035V17.0004H64.3799V3.04035H67.5599L71.9999 13.4204L76.4399 3.04035H79.5999Z" fill="#232323" />
      <path d="M90.9282 14.3404H85.3682L84.4482 17.0004H81.5082L86.5282 3.02035H89.7882L94.8082 17.0004H91.8482L90.9282 14.3404ZM90.1682 12.1004L88.1482 6.26035L86.1282 12.1004H90.1682Z" fill="#232323" />
      <path d="M103.885 17.0004L100.805 11.5604H99.4846V17.0004H96.6846V3.04035H101.925C103.005 3.04035 103.925 3.23368 104.685 3.62035C105.445 3.99368 106.011 4.50702 106.385 5.16035C106.771 5.80035 106.965 6.52035 106.965 7.32035C106.965 8.24035 106.698 9.07368 106.165 9.82035C105.631 10.5537 104.838 11.0604 103.785 11.3404L107.125 17.0004H103.885ZM99.4846 9.46035H101.825C102.585 9.46035 103.151 9.28035 103.525 8.92035C103.898 8.54702 104.085 8.03368 104.085 7.38035C104.085 6.74035 103.898 6.24702 103.525 5.90035C103.151 5.54035 102.585 5.36035 101.825 5.36035H99.4846V9.46035Z" fill="#232323" />
      <path d="M117.377 17.0004L112.297 10.7804V17.0004H109.497V3.04035H112.297V9.30035L117.377 3.04035H120.757L114.997 9.96035L120.917 17.0004H117.377Z" fill="#232323" />
      <path d="M125.559 5.30035V8.80035H130.259V11.0204H125.559V14.7204H130.859V17.0004H122.759V3.02035H130.859V5.30035H125.559Z" fill="#232323" />
      <path d="M142.903 3.04035V5.30035H139.183V17.0004H136.383V5.30035H132.663V3.04035H142.903Z" fill="#232323" />
      <path d="M147.746 3.04035V17.0004H144.946V3.04035H147.746Z" fill="#232323" />
      <path d="M162.453 17.0004H159.653L153.313 7.42035V17.0004H150.513V3.02035H153.313L159.653 12.6204V3.02035H162.453V17.0004Z" fill="#232323" />
      <path d="M174.94 7.24035C174.62 6.65368 174.18 6.20702 173.62 5.90035C173.06 5.59369 172.406 5.44035 171.66 5.44035C170.833 5.44035 170.1 5.62702 169.46 6.00035C168.82 6.37368 168.32 6.90702 167.96 7.60035C167.6 8.29368 167.42 9.09368 167.42 10.0004C167.42 10.9337 167.6 11.747 167.96 12.4404C168.333 13.1337 168.846 13.667 169.5 14.0404C170.153 14.4137 170.913 14.6004 171.78 14.6004C172.846 14.6004 173.72 14.3204 174.4 13.7604C175.08 13.187 175.526 12.3937 175.74 11.3804H170.94V9.24035H178.5V11.6804C178.313 12.6537 177.913 13.5537 177.3 14.3804C176.686 15.207 175.893 15.8737 174.92 16.3804C173.96 16.8737 172.88 17.1204 171.68 17.1204C170.333 17.1204 169.113 16.8204 168.02 16.2204C166.94 15.607 166.086 14.7604 165.46 13.6804C164.846 12.6004 164.54 11.3737 164.54 10.0004C164.54 8.62702 164.846 7.40035 165.46 6.32035C166.086 5.22702 166.94 4.38035 168.02 3.78035C169.113 3.16702 170.326 2.86035 171.66 2.86035C173.233 2.86035 174.6 3.24702 175.76 4.02035C176.92 4.78035 177.72 5.85368 178.16 7.24035H174.94Z" fill="#232323" />
    </g>
    <g id="logotype-agency">
      <path d="M72.9395 34.3404H67.3795L66.4595 37.0004H63.5195L68.5395 23.0204H71.7995L76.8195 37.0004H73.8595L72.9395 34.3404ZM72.1795 32.1004L70.1595 26.2604L68.1395 32.1004H72.1795Z" fill="#B6BDC5" />
      <path d="M88.4159 27.2404C88.0959 26.6537 87.6559 26.207 87.0959 25.9004C86.5359 25.5937 85.8826 25.4404 85.1359 25.4404C84.3093 25.4404 83.5759 25.627 82.9359 26.0004C82.2959 26.3737 81.7959 26.907 81.4359 27.6004C81.0759 28.2937 80.8959 29.0937 80.8959 30.0004C80.8959 30.9337 81.0759 31.747 81.4359 32.4404C81.8093 33.1337 82.3226 33.667 82.9759 34.0404C83.6293 34.4137 84.3893 34.6004 85.2559 34.6004C86.3226 34.6004 87.1959 34.3204 87.8759 33.7604C88.5559 33.187 89.0026 32.3937 89.2159 31.3804H84.4159V29.2404H91.9759V31.6804C91.7893 32.6537 91.3893 33.5537 90.7759 34.3804C90.1626 35.207 89.3693 35.8737 88.3959 36.3804C87.4359 36.8737 86.3559 37.1204 85.1559 37.1204C83.8093 37.1204 82.5893 36.8204 81.4959 36.2204C80.4159 35.607 79.5626 34.7604 78.9359 33.6804C78.3226 32.6004 78.0159 31.3737 78.0159 30.0004C78.0159 28.627 78.3226 27.4004 78.9359 26.3204C79.5626 25.227 80.4159 24.3804 81.4959 23.7804C82.5893 23.167 83.8026 22.8604 85.1359 22.8604C86.7093 22.8604 88.0759 23.247 89.2359 24.0204C90.3959 24.7804 91.1959 25.8537 91.6359 27.2404H88.4159Z" fill="#B6BDC5" />
      <path d="M96.8475 25.3004V28.8004H101.548V31.0204H96.8475V34.7204H102.147V37.0004H94.0475V23.0204H102.147V25.3004H96.8475Z" fill="#B6BDC5" />
      <path d="M116.632 37.0004H113.832L107.492 27.4204V37.0004H104.692V23.0204H107.492L113.832 32.6204V23.0204H116.632V37.0004Z" fill="#B6BDC5" />
      <path d="M118.719 30.0004C118.719 28.627 119.026 27.4004 119.639 26.3204C120.266 25.227 121.112 24.3804 122.179 23.7804C123.259 23.167 124.466 22.8604 125.799 22.8604C127.359 22.8604 128.726 23.2604 129.899 24.0604C131.072 24.8604 131.892 25.967 132.359 27.3804H129.139C128.819 26.7137 128.366 26.2137 127.779 25.8804C127.206 25.547 126.539 25.3804 125.779 25.3804C124.966 25.3804 124.239 25.5737 123.599 25.9604C122.972 26.3337 122.479 26.867 122.119 27.5604C121.772 28.2537 121.599 29.067 121.599 30.0004C121.599 30.9204 121.772 31.7337 122.119 32.4404C122.479 33.1337 122.972 33.6737 123.599 34.0604C124.239 34.4337 124.966 34.6204 125.779 34.6204C126.539 34.6204 127.206 34.4537 127.779 34.1204C128.366 33.7737 128.819 33.267 129.139 32.6004H132.359C131.892 34.027 131.072 35.1404 129.899 35.9404C128.739 36.727 127.372 37.1204 125.799 37.1204C124.466 37.1204 123.259 36.8204 122.179 36.2204C121.112 35.607 120.266 34.7604 119.639 33.6804C119.026 32.6004 118.719 31.3737 118.719 30.0004Z" fill="#B6BDC5" />
      <path d="M145.851 23.0404L141.131 32.1404V37.0004H138.331V32.1404L133.591 23.0404H136.751L139.751 29.4204L142.731 23.0404H145.851Z" fill="#B6BDC5" />
    </g>
  </svg>
);
