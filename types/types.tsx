import React from 'react';
import { LucideIcon } from "lucide-react";

export interface FeatureProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  imageComponent?: React.ReactNode;
  reversed?: boolean;
}

export interface PricingTierProps {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  disabled?: boolean;
  comingSoon?: boolean;
}

export interface PainPointProps {
  emoji: string;
  text: string;
}