import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RythuBandhuImg from "@/assets/rythu_bandhu.jpg";
import PMKisanImg from "@/assets/pmkisan.webp";
import SoilHealthImg from "@/assets/soil_health.webp";
import CropInsuranceImg from "@/assets/crop_insurance.webp";
import LoanWaiverImg from "@/assets/loan_waiver.webp";
import scheme from "@/assets/scheme.png"; 

interface Scheme {
  title: string;
  description: string;
  image: string;
  url: string;
}

const schemes: Scheme[] = [
  {
    title: "Rythu Bandhu Scheme",
    description: "Investment support for farmers in Karnataka: ₹8,000/acre per season.",
    image: RythuBandhuImg,
    url: "https://www.karnataka.gov.in/rythubandhu",
  },
  {
    title: "PM-KISAN",
    description: "Income support scheme for farmers: ₹6,000/year directly to bank accounts.",
    image: PMKisanImg,
    url: "https://pmkisan.gov.in/",
  },
  {
    title: "Soil Health Card",
    description: "Provides soil health cards to farmers for better fertilizer management.",
    image: SoilHealthImg,
    url: "https://soilhealth.dac.gov.in/",
  },
  {
    title: "Crop Insurance (PMFBY)",
    description: "Insurance scheme to protect farmers from losses due to natural calamities.",
    image: CropInsuranceImg,
    url: "https://pmfby.gov.in/",
  },
  {
    title: "Agricultural Loan Waiver",
    description: "Waiver of agricultural loans for eligible small farmers in Karnataka.",
    image: LoanWaiverImg,
    url: "https://www.karnataka.gov.in/AgriLoanWaiver",
  },
];

export default function GovernmentSchemes() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <img
        src={scheme}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="relative z-10 bg-black/20 min-h-screen flex flex-col items-center p-6">
        {/* Back Button at Top Left */}
        <Button
          onClick={() => navigate("/dashboard")}
          className="fixed top-4 left-4 bg-gray-800 text-white hover:bg-gray-900 z-20"
        >
          ← Back
        </Button>

        <h1 className="text-2xl md:text-3xl font-bold text-green-100 mb-6 text-center mt-4">
          🌿 Government Schemes for Farmers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mt-4">
          {schemes.map((schemeItem, idx) => (
            <Card
              key={idx}
              className="flex flex-col justify-between hover:shadow-lg transition cursor-pointer h-full"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{schemeItem.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <img
                  src={schemeItem.image}
                  alt={schemeItem.title}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <p className="text-sm text-muted-foreground flex-1">{schemeItem.description}</p>
                <Button
                  onClick={() => window.open(schemeItem.url, "_blank")}
                  className="mt-3 bg-green-700 hover:bg-green-800 text-white w-full"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
