import React from 'react'

function OffersCard({itemName, src, discount}) {
  return (
    <div class="max-w-sm bg-transparent m-10 xl:w-[500px]">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-black">{itemName}</h5>
    <a href="#">
        <img class="rounded-t-lg h-[400px] w-auto" src={src} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-center">{discount}</h5>
        </a>
    </div>
</div>
  )
}

export default OffersCard