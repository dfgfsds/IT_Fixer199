import React, { useState, useCallback, useRef, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { FaX, FaLocationDot } from "react-icons/fa6";

type LibraryType = "places";

const LIBRARIES: LibraryType[] = ["places"];

const containerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "relative",
};

interface Center {
    lat: number;
    lng: number;
}

interface LocationFormData extends Center {
    address: string;
    house: string;
    landmark: string;
    street: string;
    area: string;
    city: string;
    pincode: string;
}

interface LocationMapModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const centerDefault: Center = {
    lat: 13.0429687,
    lng: 80.2432734,
};

export default function LocationMapModal({
    isOpen,
    onClose,
}: LocationMapModalProps) {
    const [formData, setFormData] = useState<LocationFormData>({
        lat: centerDefault.lat,
        lng: centerDefault.lng,
        address: "",
        house: "",
        landmark: "",
        street: "",
        area: "",
        city: "",
        pincode: "",
    });

    const mapRef = useRef<google.maps.Map | null>(null);
    const [center, setCenter] = useState<Center>(centerDefault);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_KEY!,
        libraries: LIBRARIES,
    });

    const getAddressFromLatLng = useCallback((lat: number, lng: number) => {
        if (!window.google || !window.google.maps) {
            console.error("Google Maps not loaded yet");
            return;
        }

        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
            if (status === "OK" && results && results[0]) {
                const addressComponents = results[0].address_components;

                let street = "";
                let area = "";
                let city = "";
                let pincode = "";

                addressComponents.forEach((component: google.maps.GeocoderAddressComponent) => {
                    if (component.types.includes("route")) {
                        street = component.long_name;
                    }
                    if (
                        component.types.includes("sublocality") ||
                        component.types.includes("sublocality_level_1")
                    ) {
                        area = component.long_name;
                    }
                    if (component.types.includes("locality")) {
                        city = component.long_name;
                    }
                    if (component.types.includes("postal_code")) {
                        pincode = component.long_name;
                    }
                });

                setFormData((prev) => ({
                    ...prev,
                    address: results[0].formatted_address,
                    street,
                    area,
                    city,
                    pincode,
                }));
            } else {
                console.error("Geocoding failed:", status);
            }
        });
    }, []);

    useEffect(() => {
        if (isOpen && isLoaded) {
            getAddressFromLatLng(centerDefault.lat, centerDefault.lng);
        }
    }, [isOpen, isLoaded, getAddressFromLatLng]);

    const handleMapLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
    }, []);

    const handleMapIdle = useCallback(() => {
        if (mapRef.current) {
            const newCenter = mapRef.current.getCenter();
            if (newCenter) {
                const lat = newCenter.lat();
                const lng = newCenter.lng();

                if (lat !== center.lat || lng !== center.lng) {
                    setCenter({ lat, lng });
                    setFormData((prev) => ({ ...prev, lat, lng }));
                    getAddressFromLatLng(lat, lng);
                }
            }
        }
    }, [center, getAddressFromLatLng]);

    const handleSave = () => {
        // onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-white rounded-2xl w-[90%] max-w-4xl h-[500px] flex overflow-hidden z-10">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-gray-700 hover:text-black z-20"
                >
                    <FaX size={18} />
                </button>

                {/* Map Section */}
                <div className="w-2/3 h-full relative">
                    {isLoaded ? (
                        <>
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={15}
                                onLoad={handleMapLoad}
                                onIdle={handleMapIdle}
                                options={{
                                    streetViewControl: false,
                                    mapTypeControl: false,
                                    fullscreenControl: false,
                                }}
                            />
                            {/* Fixed Center Pin */}
                            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full z-20">
                                <FaLocationDot className="text-blue-600 w-10 h-10 drop-shadow-lg" />
                            </div>
                        </>
                    ) : (
                        <p className="flex items-center justify-center h-full">
                            Loading Map...
                        </p>
                    )}
                </div>

                {/* Form Section */}
                <div className="w-1/3 overflow-y-auto flex flex-col justify-between h-full">
                    <div className="p-6 ">
                        <button className="text-xs text-primary border border-gray-300 px-5 py-2 rounded-md hover:bg-gray-300 cursor-pointer">
                            Change
                        </button>

                        <p className="text-sm text-gray-600 mb-4 border-b border-gray-300 pb-3">
                            {formData.address || "Move the map to select location"}
                        </p>

                        <input
                            type="text"
                            placeholder="House/Flat Number*"
                            value={formData.house}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, house: e.target.value }))
                            }
                            className="border border-gray-300 w-full px-3 py-2 mb-3 rounded-md text-sm"
                        />
                        <input
                            type="text"
                            placeholder="Landmark (Optional)"
                            value={formData.landmark}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, landmark: e.target.value }))
                            }
                            className="border border-gray-300 w-full px-3 py-2 mb-5 rounded-md text-sm"
                        />
                    </div>

                    {/* Fixed at bottom */}
                    <div className="p-2 bg-gray-100 border-t border-gray-200">
                        <button
                            onClick={handleSave}
                            className="w-full bg-primary text-white font-semibold py-3 rounded-md text-sm"
                        >
                            Save and proceed to slots
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
