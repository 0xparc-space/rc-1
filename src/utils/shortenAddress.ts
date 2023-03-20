export const shortenAddress = (address: `0x${string}`): string => {
	const l = address.length;

	return `${address.slice(0, 6)}...${address.slice(l - 3, l - 0)}`;
}
