import React from "react";
import { Link, useLocation } from "react-router";
import { cn } from "../lib/utils";
import {
  ChipDirective,
  ChipsDirective,
  ChipListComponent,
} from "@syncfusion/ej2-react-buttons";
import { getFirstWord } from "../lib/utils";

const TripCard = ({
  id,
  name,
  location,
  imageUrl,
  tags,
  price,
}: TripCardProps) => {
  const path = useLocation();
  return (
    <Link
      to={
        path.pathname === "/" || path.pathname.startsWith("/trips")
          ? `/travel/${id}`
          : `/trips/${id}`
      }
      className="trip-card"
    >
      <img src={imageUrl} alt={name} />
      <article>
        <h2>{name}</h2>
        <figure>
          <img
            src="/assets/icons/location-mark.svg"
            alt="Location"
            className="size-5"
          />
          <figcaption className="text-sm font-medium text-gray-100">
            {location}
          </figcaption>
        </figure>
      </article>
      <div className="mt-5 pl-4.5 pr-3.5 pb-5">
        <ChipListComponent id="travel">
          <ChipsDirective>
            {tags.map((tag, index) => (
              <ChipDirective
                key={index}
                text={getFirstWord(tag)}
                cssClass={cn(
                  index === 1
                    ? "!bg-pink-50 !text-pink-500"
                    : "!bg-success-50 !text-success-700",
                )}
              />
            ))}
          </ChipsDirective>
        </ChipListComponent>
      </div>
      <article className="tripCard-pill">{price}</article>
    </Link>
  );
};

export default TripCard;
