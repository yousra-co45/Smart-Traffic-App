import { GoogleMap, LoadScript, TrafficLayer } from '@react-google-maps/api';
import { motion } from 'framer-motion';
// Abdullah Traffic Page

const containerstyle = {
    width: "100%",
    height: "500px"
}

const center = {
    lat: 31.5204,
    lng: 74.3587,
};

export default function Traffic() {
    return (
        <motion.div
            className="p-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >

            {/* Page Title */}

            <motion.h1 className="text-3xl font-bold text-white mb-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                Live <span className="text-trafficRed">Traffic</span> Map

            </motion.h1>


            {/* Google Map with Traffic Layer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <LoadScript googleMapsApiKey="AIzaSyDqBCPgmcvY0cx5txcSg5unCE0aZZ_Npw8">
                    <GoogleMap
                        mapContainerStyle={containerstyle}
                        center={center}
                        zoom={12}>
                        <TrafficLayer />
                    </GoogleMap>
                </LoadScript>
            </motion.div>
        </motion.div>
    );
}
