import Image from "next/image";
import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";

const getPokemons = async (
	limit = 20,
	offset = 0
): Promise<SimplePokemon[]> => {
	const data: PokemonsResponse = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
	).then((res) => res.json());

	const pokemons = data.results.map((pokemon) => ({
		id: String(pokemon.url.split("/").at(-2)),
		name: pokemon.name,
	}));

	return pokemons;
};

export default async function PokemonsPage() {
	const pokemons = await getPokemons(151);

	return (
		<div className="flex flex-col">
			<div className="flex flex-wrap gap-10 items-center justify-center">
				{pokemons.map((pokemon) => (
					<div key={pokemon.id}>
						<Image
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
							alt="Pokemon Avatar"
							width={100}
							height={100}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
