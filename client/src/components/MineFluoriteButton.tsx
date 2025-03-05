import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { flouriteAtom } from "../atoms";
import { useAtom } from "jotai";

function MineFloruriteButton() {
  const [flourite, setFlourite] = useAtom(flouriteAtom)
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: async () => {
      await fetch("http://localhost:3000/fluorite/increment", {
          method: "POST",
      });
      queryClient.invalidateQueries({ queryKey: ['global_fluorite'] })
    },
  })

  function handleClick() {
    mutation.mutate();
    setFlourite(flourite + 1);
  }

  return (
    <div className='panel home-component'>
      <button type="button" onClick={handleClick} className="home-component flourite-button">
        Mine <span className='fluorite-text'>fluorite</span>
      </button>
    </div>
  )
}

export default MineFloruriteButton;