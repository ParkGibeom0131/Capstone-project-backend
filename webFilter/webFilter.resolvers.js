import client from "../../client";

export default {
    Mutation: {
        webFilter: async (_, {
            FstInstance,
            SndInstance,
            TrdInstance,
        }) => {
            await client.webFilter.create({
                data: {
                    FstInstance, SndInstance, TrdInstance,
                },
            });
            const spawn = require("child_process").spawn;
            const process = spawn('./addon/masking-camera.exe', ['./addon', '0', '0']);
            process.stdout.on('data', (data) => {
                console.log(data.toString());
            })
            process.stderr.on('data', (data) => {
                console.error(data.toString());
            })
            return {
                ok: true,
            }
        }
    }
};