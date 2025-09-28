"use client";

import { motion } from "framer-motion";

import useAnimateOnView from "@/app/hooks/useAnimateOnView";
import { Card, CardContent } from "@/components/ui/card";

const AboutMeBox = () => {
  const { ref: ref, animation: animation } = useAnimateOnView();

  return (
    <motion.div
      ref={ref}
      animate={animation}
      className="flex flex-col justify-center items-center w-full"
    >
      <div className="font-bold text-2xl md:text-3xl my-4">About Me</div>

      <Card className="w-full flex justify-center max-w-xl lg:max-w-none">
        <CardContent>
          <div className="text-center flex flex-col gap-y-3 max-w-[700px] pt-5">
            <div>
  My name is Irwan Gery Renaldi, a <span className="font-bold">Sales Leader</span> 
  with strong experience in the 
  <span className="font-bold">FMCG</span> and 
  <span className="font-bold">Consumer Health</span> industries. 
  I specialize in <span className="font-bold">direct & indirect distribution</span>, 
  <span className="font-bold">data analysis</span>, and 
  <span className="font-bold">field execution</span>.
</div>
<div>
  I am passionate about driving <span className="font-bold">sales growth</span>, 
  optimizing <span className="font-bold">territory planning</span>, 
  and building <span className="font-bold">strategic partnerships</span>. 
  My achievements include boosting division sales, leading multi-channel teams, 
  and collaborating with institutions to deliver impactful results.
</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutMeBox;
