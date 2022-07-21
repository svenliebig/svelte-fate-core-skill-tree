export type SkilltreeForm = {
	name: string
	beschreibung: string
	konzept: string
	dilemma: string
	aspekte: [string, string, string],
	extras: string
	stunts: string,
	fertigkeiten: [
		[string, string, string, string, string],
		[string, string, string, string, string],
		[string, string, string, string, string],
		[string, string, string, string, string],
		[string, string, string, string, string]
	]
	level: number
}