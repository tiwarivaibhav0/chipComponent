import React, {
	useState,
	useEffect,
	useRef,
	ChangeEvent,
	KeyboardEvent,
	useMemo,
} from "react";

const getInitials = (name: string): string => {
	const initials = name
		.split(" ")
		.map((word) => word[0])
		.join("")
		.toUpperCase();

	return initials;
};

const Colors = [
	"#3498db",
	"#e74c3c",
	"#2ecc71",
	"#f39c12",
	"#9b59b6",
	"#1abc9c",
	"#d35400",
];

const Chip: React.FC = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const [selectedItems, setSelectedItems] = useState<string[]>([]);
	const [filteredItems, setFilteredItems] = useState<string[]>([]);
	const [showList, setShowList] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const items: string[] = useMemo(
		() => [
			"Marina Augustine",
			"Nick Giannoupoulous",
			"Narayana Gamer",
			"Anita Gros",
			"Megan Smith",
			"Vaibhav Tiwari",
		],
		[]
	);

	useEffect(() => {
		setFilteredItems(
			items.filter(
				(item) =>
					!selectedItems.includes(item) &&
					item.toLowerCase().includes(inputValue.toLowerCase())
			)
		);
	}, [inputValue, selectedItems, items]);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleItemClick = (item: string) => {
		setSelectedItems([...selectedItems, item]);
	};

	const handleChipRemove = (index: number) => {
		const updatedItems = [...selectedItems];
		const removedItem = updatedItems.splice(index, 1)[0];
		setSelectedItems(updatedItems);
		setFilteredItems([...filteredItems, removedItem]);
	};

	const handleBackspace = () => {
		if (inputValue === "" && selectedItems.length > 0) {
			const updatedItems = [...selectedItems];
			updatedItems.pop();
			setSelectedItems(updatedItems);
		}
	};

	const handleInputClick = () => {
		if (inputRef.current) {
			inputRef.current.focus();
			setShowList(true);
		}
	};

	return (
		<div className="chip-container">
			{!showList && <h4 className="message">Click on the input to show the list</h4>}
			<div className="chip-input" onClick={handleInputClick}>
				{selectedItems.map((item, index) => (
					<div key={index} className="chip">
						<div
							className="initial-label"
							style={{ backgroundColor: Colors[index] }}
						>
							{getInitials(item)}
						</div>
						{item}{" "}
						<span
							className="remove-icon"
							onClick={() => handleChipRemove(index)}
						>
							X
						</span>
					</div>
				))}
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
						e.key === "Backspace" && handleBackspace()
					}
					ref={inputRef}
				/>
			</div>
			{showList && (
				<div className="item-list">
					{filteredItems.map((item, index) => (
						<div
							key={index}
							className="item"
							onClick={() => handleItemClick(item)}
						>
							{item}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Chip;
