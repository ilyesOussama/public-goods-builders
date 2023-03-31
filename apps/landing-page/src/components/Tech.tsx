import { motion } from "framer-motion";
import EthereumLogo from "./React Icons/Ethereum";
import SolanaLogo from "./React Icons/Solana";
import PolygonLogo from "./React Icons/Polygon";
import PolkadotLogo from "./React Icons/Polkadot";
import OptimismLogo from "./React Icons/Optimism";
import ArbitrumLogo from "./React Icons/Arbitrum";
import NearLogo from "./React Icons/Near";
import Livepeer from "./React Icons/Livepeer";
import LensLogo from "./React Icons/Lens";

const marqueeVariantsRight = {
  animate: {
    x: [0, -2000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const marqueeVariantsLeft = {
  animate: {
    x: [0, 2000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export const Tech = () => {
  return (
    <div>
      <div className="rotate-3 translate-y-2/4 py-4 w-screen opacity-80 bg-green-300 flex items-center justify-center">
        <motion.div
          className="whitespace-nowrap"
          variants={marqueeVariantsRight}
          animate="animate"
        >
          <ul className="flex flex-row gap-4">
            <EthereumLogo />
            <SolanaLogo />
            <PolygonLogo />
            <PolkadotLogo />
            <OptimismLogo />
            <ArbitrumLogo />
            <NearLogo />
            <LensLogo />
            <EthereumLogo />
            <SolanaLogo />
            <PolygonLogo />
            <PolkadotLogo />
            <OptimismLogo />
            <ArbitrumLogo />
            <NearLogo />
            <LensLogo />
            <EthereumLogo />
            <SolanaLogo />
            <PolygonLogo />
            <PolkadotLogo />
            <OptimismLogo />
            <ArbitrumLogo />
            <NearLogo />
            <LensLogo />
            <EthereumLogo />
            <SolanaLogo />
            <PolygonLogo />
            <PolkadotLogo />
            <OptimismLogo />
            <ArbitrumLogo />
            <NearLogo />
            <LensLogo />
            <EthereumLogo />
            <SolanaLogo />
            <PolygonLogo />
            <PolkadotLogo />
            <OptimismLogo />
            <ArbitrumLogo />
            <NearLogo />
            <LensLogo />
            <EthereumLogo />
            <SolanaLogo />
            <PolygonLogo />
            <PolkadotLogo />
            <OptimismLogo />
            <ArbitrumLogo />
            <NearLogo />
            <LensLogo />
            <EthereumLogo />
            <SolanaLogo />
            <PolygonLogo />
            <PolkadotLogo />
            <OptimismLogo />
            <ArbitrumLogo />
            <NearLogo />
            <LensLogo />
          </ul>
        </motion.div>
      </div>
      <div className="-rotate-3 -translate-y-2/4 py-4 w-screen opacity-80 bg-green-300 flex items-center justify-center">
        <motion.div
          className="whitespace-nowrap"
          variants={marqueeVariantsLeft}
          animate="animate"
        >
          <ul className="flex flex-row gap-4">
            <EthereumLogo />
            <SolanaLogo />
            <PolygonLogo />
            <PolkadotLogo />
            <OptimismLogo />
            <ArbitrumLogo />
            <NearLogo />
            <LensLogo />
            <EthereumLogo />
            <SolanaLogo />
            <PolygonLogo />
            <PolkadotLogo />
            <OptimismLogo />
            <ArbitrumLogo />
            <NearLogo />
            <LensLogo />
            <EthereumLogo />
            <SolanaLogo />
            <PolygonLogo />
            <PolkadotLogo />
            <OptimismLogo />
            <ArbitrumLogo />
            <NearLogo />
            <LensLogo />
            <EthereumLogo />
            <SolanaLogo />
            <PolygonLogo />
            <PolkadotLogo />
            <OptimismLogo />
            <ArbitrumLogo />
            <NearLogo />
            <LensLogo />
            <EthereumLogo />
            <SolanaLogo />
            <PolygonLogo />
            <PolkadotLogo />
            <OptimismLogo />
            <ArbitrumLogo />
            <NearLogo />
            <LensLogo />
            <EthereumLogo />
            <SolanaLogo />
            <PolygonLogo />
            <PolkadotLogo />
            <OptimismLogo />
            <ArbitrumLogo />
            <NearLogo />
            <LensLogo />
            <EthereumLogo />
            <SolanaLogo />
            <PolygonLogo />
            <PolkadotLogo />
            <OptimismLogo />
            <ArbitrumLogo />
            <NearLogo />
            <LensLogo />
            <EthereumLogo />
            <SolanaLogo />
            <PolygonLogo />
            <PolkadotLogo />
            <OptimismLogo />
            <ArbitrumLogo />
            <NearLogo />
            <LensLogo />
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
