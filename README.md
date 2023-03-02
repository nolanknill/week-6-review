Components 


App
    - array of plants (import plants)
    - state: selectedPlant
    - changeSelectedPlant (id)
        - Remove the selected plant with this id from the list
        - set the new selected plant to the plant with matching id

    PlantList
        props:
            - plants: array
            - changeSelectedPlant()
        

        PlantItem
            props: 
                - id
                - name
                - changeSelectedPlant( )
                    - argument: plant id

    SelectedPlant
        props:
            - name
            - type
            - imageUrl
            - waterFrequency