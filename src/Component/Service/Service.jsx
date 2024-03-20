
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";



const Service = () => {
    const [services, setServices] = useState([]);

    const [length, setLength] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setServices(data));
    })

    return (

        <div>
            <div className="text-center text-white">
                <h2 className="text-3xl font-bold">Service</h2>
                <p className="mx-48">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati magnam necessitatibus ipsa aut sint quis commodi nemo suscipit architecto rerum, iusto laudantium assumenda amet vitae illum ullam ut eum quae?</p>
            </div>
            <div>
                {
                   Service.map(service  => <Card key={service.id} service={service}></Card>) 
                }
            </div>
        </div>
    );
};

export default Service;