Feature: Pruebas de API de la pagina https://www.demoblaze.com/ 

   Validar los servicios de signup en la pagina https://www.demoblaze.com/signup

Scenario: Escenario 1, Crear un nuevo usuario
    Given Al hacer una peticion POST a la url "https://api.demoblaze.com/signup" con usuario nuevo:
      | username      | random |
      | password      | 2020 |
    When cuando el usuario es nuevo el response code es 200
    Then el cuerpo de la respuesta debe ser vacía

Scenario: Escenario 2, Crear un usuario existente
    Given Al hacer una petición POST a la url "https://api.demoblaze.com/signup" con usuario existente:
      | username      | jmsuarez2005|
      | password      | 123 |
    When cuando el usuario existe el response code es 200
    Then el cuerpo de la respuesta cuando el user existe debe tener la property "errorMessage" y valor "This user already exist."
