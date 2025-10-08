import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RythuBandhuImg from "@/assets/rythu_bandhu.jpg";
import PMKisanImg from "@/assets/pmkisan.webp";
import SoilHealthImg from "@/assets/soil_health.webp";
import CropInsuranceImg from "@/assets/crop_insurance.webp";
import LoanWaiverImg from "@/assets/loan_waiver.webp";
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
    image:PMKisanImg,
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
    image:LoanWaiverImg,
    url: "https://www.karnataka.gov.in/AgriLoanWaiver",
  },
];

export default function GovernmentSchemes() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Back Button */}
      <div className="w-full max-w-6xl mb-4">
        <Button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-800 text-white hover:bg-gray-900"
        >
          ← Back 
        </Button>
      </div>

      <h1 className="text-2xl font-bold text-green-800 mb-6">🌿 Government Schemes for Farmers (Karnataka)</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {schemes.map((scheme, idx) => (
          <Card
            key={idx}
            className="flex flex-col justify-between hover:shadow-lg transition cursor-pointer h-full"
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{scheme.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-1">
              <img
                src={scheme.image}
                alt={scheme.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <p className="text-sm text-muted-foreground flex-1">{scheme.description}</p>
              <Button
                onClick={() => window.open(scheme.url, "_blank")}
                className="mt-3 bg-green-700 hover:bg-green-800 text-white w-full"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
