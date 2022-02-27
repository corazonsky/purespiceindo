import React from "react"
import Button from "../components/Button"

export default function ProductCard(props) {
  return (
    <div class="w-2/3 md:w-full lg:max-w-full rounded-lg shadow-lg transform transition duration-500 hover:scale-110 mx-auto h-full">
      <div class="relative pt-10 flex items-center justify-center">
        <div class="block absolute bottom-0 left-0 mb-24 ml-3"></div>
        {props.children}
      </div>
      <div class="relative text-black px-6 pb-6 mt-6">
        <div class="flex justify-between">
          <span class="block font-semibold text-xl">{props.name}</span>
        </div>
        <span class="block opacity-75 -mb-1">{props.origin}</span>
        <div class="justify-end flex inline-block align-middle block md:hidden">
          <b class="text-xs">See Our Products</b>
        </div>
      </div>
    </div>
  )
}
