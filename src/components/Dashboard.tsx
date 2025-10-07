import React, { useState } from 'react';
import svgPaths from "../imports/svg-xf70tbd79z";
import { Slider } from "./ui/slider";

interface DashboardProps {
  onNavigateToLogin?: () => void;
}

function LooperBg() {
  return (
    <div className="h-[1396.13px] relative w-[2259.73px]" data-name="Looper BG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2260 1397">
        <g id="Looper BG">
          <path d={svgPaths.p1f512d00} id="Polygon 1_69" opacity="0" stroke="url(#paint0_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p303f7d70} id="Polygon 1_68" opacity="0.0144928" stroke="url(#paint1_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.pa59faf0} id="Polygon 1_67" opacity="0.0289855" stroke="url(#paint2_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p1d2e5980} id="Polygon 1_66" opacity="0.0434783" stroke="url(#paint3_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p2bcf3600} id="Polygon 1_65" opacity="0.057971" stroke="url(#paint4_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p29ab9400} id="Polygon 1_64" opacity="0.0724638" stroke="url(#paint5_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p34adf600} id="Polygon 1_63" opacity="0.0869565" stroke="url(#paint6_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p1d2e8000} id="Polygon 1_62" opacity="0.101449" stroke="url(#paint7_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p198e1300} id="Polygon 1_61" opacity="0.115942" stroke="url(#paint8_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p194885f2} id="Polygon 1_60" opacity="0.130435" stroke="url(#paint9_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p2f9f4c80} id="Polygon 1_59" opacity="0.144928" stroke="url(#paint10_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p357dc000} id="Polygon 1_58" opacity="0.15942" stroke="url(#paint11_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p242aad00} id="Polygon 1_57" opacity="0.173913" stroke="url(#paint12_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p3c32470} id="Polygon 1_56" opacity="0.188406" stroke="url(#paint13_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p39571800} id="Polygon 1_55" opacity="0.202899" stroke="url(#paint14_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p380db300} id="Polygon 1_54" opacity="0.217391" stroke="url(#paint15_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p1c8d3ec0} id="Polygon 1_53" opacity="0.231884" stroke="url(#paint16_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.pedd28f0} id="Polygon 1_52" opacity="0.246377" stroke="url(#paint17_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p227b5dc0} id="Polygon 1_51" opacity="0.26087" stroke="url(#paint18_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p12cc4500} id="Polygon 1_50" opacity="0.275362" stroke="url(#paint19_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.pa7fa000} id="Polygon 1_49" opacity="0.289855" stroke="url(#paint20_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p3d432500} id="Polygon 1_48" opacity="0.304348" stroke="url(#paint21_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p1d7dfcf0} id="Polygon 1_47" opacity="0.318841" stroke="url(#paint22_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p1514400} id="Polygon 1_46" opacity="0.333333" stroke="url(#paint23_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p24e1dc80} id="Polygon 1_45" opacity="0.347826" stroke="url(#paint24_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p2bbc6200} id="Polygon 1_44" opacity="0.362319" stroke="url(#paint25_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p3d3afb00} id="Polygon 1_43" opacity="0.376812" stroke="url(#paint26_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p2b675900} id="Polygon 1_42" opacity="0.391304" stroke="url(#paint27_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p3d7bef00} id="Polygon 1_41" opacity="0.405797" stroke="url(#paint28_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p2a07a700} id="Polygon 1_40" opacity="0.42029" stroke="url(#paint29_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p1eda4900} id="Polygon 1_39" opacity="0.434783" stroke="url(#paint30_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p115d8000} id="Polygon 1_38" opacity="0.449275" stroke="url(#paint31_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p5d7f5f0} id="Polygon 1_37" opacity="0.463768" stroke="url(#paint32_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p6289400} id="Polygon 1_36" opacity="0.478261" stroke="url(#paint33_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p1902ab00} id="Polygon 1_35" opacity="0.492754" stroke="url(#paint34_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p264d0b80} id="Polygon 1_34" opacity="0.507246" stroke="url(#paint35_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p12e33bc0} id="Polygon 1_33" opacity="0.521739" stroke="url(#paint36_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p3f1c6a80} id="Polygon 1_32" opacity="0.536232" stroke="url(#paint37_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p4a39100} id="Polygon 1_31" opacity="0.550725" stroke="url(#paint38_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p17918d20} id="Polygon 1_30" opacity="0.565217" stroke="url(#paint39_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p23076480} id="Polygon 1_29" opacity="0.57971" stroke="url(#paint40_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p3a380a80} id="Polygon 1_28" opacity="0.594203" stroke="url(#paint41_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p2cfc62f2} id="Polygon 1_27" opacity="0.608696" stroke="url(#paint42_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p37dd5400} id="Polygon 1_26" opacity="0.623188" stroke="url(#paint43_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p26961b00} id="Polygon 1_25" opacity="0.637681" stroke="url(#paint44_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p1424700} id="Polygon 1_24" opacity="0.652174" stroke="url(#paint45_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p3c0bc600} id="Polygon 1_23" opacity="0.666667" stroke="url(#paint46_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p3ee0580} id="Polygon 1_22" opacity="0.681159" stroke="url(#paint47_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p62d6200} id="Polygon 1_21" opacity="0.695652" stroke="url(#paint48_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p208fd800} id="Polygon 1_20" opacity="0.710145" stroke="url(#paint49_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p3cb96b80} id="Polygon 1_19" opacity="0.724638" stroke="url(#paint50_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p380e62d0} id="Polygon 1_18" opacity="0.73913" stroke="url(#paint51_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p12dfdcf0} id="Polygon 1_17" opacity="0.753623" stroke="url(#paint52_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.pf7adc00} id="Polygon 1_16" opacity="0.768116" stroke="url(#paint53_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p2ff88180} id="Polygon 1_15" opacity="0.782609" stroke="url(#paint54_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p161e780} id="Polygon 1_14" opacity="0.797101" stroke="url(#paint55_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p1fc0d4c0} id="Polygon 1_13" opacity="0.811594" stroke="url(#paint56_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p352a920} id="Polygon 1_12" opacity="0.826087" stroke="url(#paint57_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.pc1c5780} id="Polygon 1_11" opacity="0.84058" stroke="url(#paint58_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p237c7800} id="Polygon 1_10" opacity="0.855072" stroke="url(#paint59_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.pa665900} id="Polygon 1_9" opacity="0.869565" stroke="url(#paint60_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p3d89f900} id="Polygon 1_8" opacity="0.884058" stroke="url(#paint61_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p19f88e00} id="Polygon 1_7" opacity="0.898551" stroke="url(#paint62_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p2180cb80} id="Polygon 1_6" opacity="0.913043" stroke="url(#paint63_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p1c21c180} id="Polygon 1_5" opacity="0.927536" stroke="url(#paint64_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p3be03b80} id="Polygon 1_4" opacity="0.942029" stroke="url(#paint65_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p3f557080} id="Polygon 1_3" opacity="0.956522" stroke="url(#paint66_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p22513500} id="Polygon 1_2" opacity="0.971014" stroke="url(#paint67_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p194ff280} id="Polygon 1_1" opacity="0.985507" stroke="url(#paint68_linear_19_3261)" strokeWidth="4" />
          <path d={svgPaths.p3d464600} id="Polygon 1" stroke="url(#paint69_linear_19_3261)" strokeWidth="4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_19_3261" x1="1934.96" x2="1396.59" y1="1183.9" y2="127.289">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_19_3261" x1="1884.92" x2="1406.8" y1="1198.21" y2="124.352">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_19_3261" x1="1834.72" x2="1417.18" y1="1210.9" y2="123.169">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_19_3261" x1="1784.47" x2="1427.63" y1="1221.95" y2="123.732">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_19_3261" x1="1734.24" x2="1438.06" y1="1231.4" y2="126.029">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_19_3261" x1="1684.12" x2="1448.35" y1="1239.25" y2="130.04">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_19_3261" x1="1634.21" x2="1458.44" y1="1245.52" y2="135.744">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_19_3261" x1="1584.58" x2="1468.21" y1="1250.25" y2="143.112">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_19_3261" x1="1535.32" x2="1477.6" y1="1253.46" y2="152.11">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_19_3261" x1="1486.5" x2="1486.5" y1="1255.19" y2="162.702">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_19_3261" x1="1438.21" x2="1494.84" y1="1255.48" y2="174.846">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_19_3261" x1="1390.51" x2="1502.54" y1="1254.36" y2="188.494">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_19_3261" x1="1343.48" x2="1509.52" y1="1251.89" y2="203.597">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_19_3261" x1="1297.19" x2="1515.71" y1="1248.12" y2="220.101">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_19_3261" x1="1251.7" x2="1521.03" y1="1243.1" y2="237.947">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_19_3261" x1="1207.07" x2="1525.43" y1="1236.89" y2="257.075">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_19_3261" x1="1163.36" x2="1528.85" y1="1229.54" y2="277.421">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_19_3261" x1="1120.62" x2="1531.22" y1="1221.13" y2="298.917">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_19_3261" x1="1078.9" x2="1532.49" y1="1211.71" y2="321.494">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_19_3261" x1="1038.25" x2="1532.62" y1="1201.35" y2="345.079">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_19_3261" x1="998.703" x2="1531.56" y1="1190.12" y2="369.599">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_19_3261" x1="960.298" x2="1529.27" y1="1178.1" y2="394.978">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_19_3261" x1="923.069" x2="1525.71" y1="1165.34" y2="421.138">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_19_3261" x1="887.042" x2="1520.87" y1="1151.94" y2="448.001">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_19_3261" x1="852.241" x2="1514.7" y1="1137.95" y2="475.487">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_19_3261" x1="818.686" x2="1507.2" y1="1123.46" y2="503.515">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_19_3261" x1="786.39" x2="1498.34" y1="1108.53" y2="532.006">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_19_3261" x1="755.364" x2="1488.12" y1="1093.26" y2="560.879">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_19_3261" x1="725.614" x2="1476.53" y1="1077.7" y2="590.052">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_19_3261" x1="697.14" x2="1463.56" y1="1061.94" y2="619.446">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_19_3261" x1="669.941" x2="1449.23" y1="1046.05" y2="648.981">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_19_3261" x1="644.008" x2="1433.53" y1="1030.1" y2="678.579">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_19_3261" x1="619.332" x2="1416.48" y1="1014.16" y2="708.161">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_19_3261" x1="595.896" x2="1398.1" y1="998.305" y2="737.653">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_19_3261" x1="573.681" x2="1378.41" y1="982.606" y2="766.98">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_19_3261" x1="552.664" x2="1357.42" y1="967.127" y2="796.07">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_19_3261" x1="532.82" x2="1335.18" y1="951.934" y2="824.852">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_19_3261" x1="514.117" x2="1311.71" y1="937.09" y2="853.26">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_19_3261" x1="496.523" x2="1287.05" y1="922.656" y2="881.226">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_19_3261" x1="480" x2="1261.24" y1="908.69" y2="908.69">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_19_3261" x1="464.509" x2="1234.32" y1="895.247" y2="935.591">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_19_3261" x1="450.008" x2="1206.33" y1="882.38" y2="961.873">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_19_3261" x1="436.451" x2="1177.33" y1="870.139" y2="987.482">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_19_3261" x1="423.79" x2="1147.36" y1="858.569" y2="1012.37">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_19_3261" x1="411.977" x2="1116.49" y1="847.715" y2="1036.49">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_19_3261" x1="400.959" x2="1084.76" y1="837.615" y2="1059.79">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_19_3261" x1="390.682" x2="1052.23" y1="828.307" y2="1082.25">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_19_3261" x1="381.092" x2="1018.96" y1="819.823" y2="1103.82">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_19_3261" x1="372.131" x2="985.021" y1="812.192" y2="1124.47">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_19_3261" x1="363.743" x2="950.464" y1="805.44" y2="1144.18">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_19_3261" x1="355.867" x2="915.355" y1="799.588" y2="1162.92">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_19_3261" x1="348.446" x2="879.758" y1="794.656" y2="1180.68">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_19_3261" x1="341.419" x2="843.737" y1="790.656" y2="1197.43">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_19_3261" x1="334.726" x2="807.357" y1="787.601" y2="1213.16">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_19_3261" x1="328.307" x2="770.682" y1="785.497" y2="1227.87">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_19_3261" x1="322.103" x2="733.777" y1="784.347" y2="1241.56">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_19_3261" x1="316.053" x2="696.705" y1="784.152" y2="1254.22">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_19_3261" x1="310.1" x2="659.531" y1="784.906" y2="1265.86">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint58_linear_19_3261" x1="304.184" x2="622.315" y1="786.604" y2="1276.48">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint59_linear_19_3261" x1="298.25" x2="585.119" y1="789.234" y2="1286.1">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint60_linear_19_3261" x1="292.242" x2="548.003" y1="792.781" y2="1294.74">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint61_linear_19_3261" x1="286.105" x2="511.025" y1="797.23" y2="1302.41">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint62_linear_19_3261" x1="279.787" x2="474.242" y1="802.558" y2="1309.13">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint63_linear_19_3261" x1="273.237" x2="437.708" y1="808.744" y2="1314.93">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint64_linear_19_3261" x1="266.407" x2="401.475" y1="815.759" y2="1319.84">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint65_linear_19_3261" x1="259.25" x2="365.594" y1="823.576" y2="1323.89">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint66_linear_19_3261" x1="251.721" x2="330.112" y1="832.163" y2="1327.11">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint67_linear_19_3261" x1="243.779" x2="295.075" y1="841.485" y2="1329.53">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint68_linear_19_3261" x1="235.384" x2="260.524" y1="851.507" y2="1331.21">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint69_linear_19_3261" x1="226.5" x2="226.5" y1="862.19" y2="1332.18">
            <stop stopColor="#FF1CF7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

const Dashboard = ({ onNavigateToLogin }: DashboardProps) => {
  // ROI Calculator state
  const [dealCount, setDealCount] = useState([100]);
  const [salary, setSalary] = useState([80000000]);
  const [ddCost, setDdCost] = useState([24000000]);

  // Calculate ROI metrics
  const timeSaved = Math.round(dealCount[0] * 8.4); // 연간 840시간 (70% of time)
  const costSaved = Math.round(dealCount[0] * ddCost[0] * 0.7); // 70% 비용 절감
  const efficiencyIncrease = 3.2;
  const roi = Math.round((costSaved / (salary[0] * 0.3)) * 100); // ROI 계산

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
      {/* Background Image with McKinsey-style overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1691947440396-49c2a6c99e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZm9yZXN0JTIwYnJhbmNoZXMlMjB0ZXh0dXJlfGVufDF8fHx8MTc1OTgyNjQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/75" />
      
      {/* McKinsey-style top navigation bar (minimal) */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-6">
        <div className="flex items-center">

        </div>
      
      </div>

      {/* Main Content - McKinsey style centered layout */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <div className="w-2 h-2 bg-[#FF1CF7] rounded-full mr-3"></div>
            <span className="text-white font-medium text-[16px] font-nanumgothic">
              데이터가 말하는 다음 유니콘
            </span>
          </div>

          {/* Main Heading - McKinsey style typography */}
          <h1 className="text-[48px] md:text-[64px] lg:text-[84px] font-bold leading-[1.1] mb-8 text-white font-nanumsquare tracking-tight">
            <span className="bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] bg-clip-text text-transparent font-black">
              Where will your next
            </span>
            <br />
            <span className="text-white font-bold">
              innovation investment go?
            </span>
          </h1>

          {/* Description */}
          <p className="text-[20px] md:text-[22px] text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto font-nanumgothic font-light">
            NTIS 기반의 검증된 사업화 실적 데이터로 숨겨진 유니콘을 발견하세요
          </p>

          {/* CTA Buttons - McKinsey style */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onNavigateToLogin}
              className="group bg-white text-black px-12 py-4 rounded-none font-medium text-[16px] tracking-wide transition-all duration-300 hover:bg-gray-100 font-nanumsquare flex items-center gap-3 min-w-[200px] justify-center"
            >
              로그인
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button className="group border border-white text-white px-12 py-4 rounded-none font-medium text-[16px] tracking-wide transition-all duration-300 hover:bg-white hover:text-black font-nanumsquare flex items-center gap-3 min-w-[200px] justify-center">
              Pricing & 가입문의
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom indicator - McKinsey style */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
      </div>

    
    </div>
  );
};

export default Dashboard;